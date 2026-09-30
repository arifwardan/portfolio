"use client";

import { useEffect, useState, type JSX } from "react";
import staticBurst from "@assets/videos/static-burst.mp4";
import { TIMING } from "@/lib/narrative";
import { blip } from "@/lib/sound";
import { cn } from "@/lib/cn";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

const BOOT_LINES = [
  { text: "BOOTING...", bar: false },
  { text: "INITIALIZING CORE", bar: true },
  { text: "LOADING ENVIRONMENT", bar: true },
  { text: "RESTORING SYSTEM", bar: true },
  { text: "> SYSTEM RESTORED", bar: false },
  { text: "> BUT SOMETHING CHANGED", bar: false },
] as const;

/**
 * Reboot sequence (PRD §9). Heavy, deliberate, then a hard cut —
 * the last line lands, the screen flashes, hacker mode takes over.
 */
export function RebootSequence(): JSX.Element {
  const reducedMotion = usePortfolioStore((state) => state.reducedMotion);
  const [visible, setVisible] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (visible >= BOOT_LINES.length) {
      const doneMs = reducedMotion ? 150 : 650;
      const done = window.setTimeout(() => {
        setFlash(true);
        blip(1760, 60);
        window.setTimeout(() => {
          usePortfolioStore.getState().send("BOOT_DONE");
        }, 180);
      }, doneMs);
      return () => window.clearTimeout(done);
    }
    const stepMs = reducedMotion ? 150 : TIMING.rebootStepMs;
    const timer = window.setTimeout(() => {
      blip(520, 40);
      setVisible((value) => value + 1);
    }, stepMs);
    return () => window.clearTimeout(timer);
  }, [visible, reducedMotion]);

  return (
    <div
      role="status"
      aria-label="System rebooting"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black font-mono text-neutral-200"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-white transition-opacity duration-150",
          flash ? "opacity-90" : "opacity-0",
        )}
      />
      {flash && (
        <video
          aria-hidden
          autoPlay
          muted
          playsInline
          preload="auto"
          src={staticBurst}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        />
      )}
      <div className="w-full max-w-md px-8">
        {BOOT_LINES.slice(0, visible).map((line, index) => (
          <div key={line.text} className="mb-5">
            <p
              className={cn(
                "text-sm tracking-wider",
                index >= BOOT_LINES.length - 2 ? "font-bold text-term" : "text-neutral-300",
              )}
            >
              {line.text}
            </p>
            {line.bar && (
              <div className="mt-2 h-1.5 w-full bg-white/10">
                <div
                  className="boot-bar h-full bg-term"
                  style={{
                    animationDuration: reducedMotion ? "150ms" : `${TIMING.rebootStepMs}ms`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
        <span className="terminal-caret mt-2 inline-block h-4 w-2.5 bg-term" />
        <div>
          <button
            type="button"
            onClick={() => usePortfolioStore.getState().send("SKIP_INCIDENT")}
            className="mt-10 border border-white/30 px-4 py-2 text-xs tracking-widest text-white/70 uppercase transition-colors hover:border-white hover:text-white"
          >
            Skip incident →
          </button>
        </div>
      </div>
    </div>
  );
}
