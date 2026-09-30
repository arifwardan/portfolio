"use client";

import { useEffect, useRef, type JSX } from "react";
import { useInView } from "framer-motion";
import ambientGlow from "@assets/videos/ambient-glow.mp4";
import ambientPoster from "@assets/videos/ambient-glow-poster.jpg";
import { TERMINAL_SCRIPT, type TerminalLineKind } from "@/lib/terminal-script";
import { cn } from "@/lib/cn";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { useTerminalPlayer } from "@/hooks/useTerminalPlayer";
import { Section } from "@/components/ui/Section";

const KIND_STYLES: Record<TerminalLineKind, string> = {
  cmd: "font-semibold text-white",
  out: "text-neutral-300",
  dim: "text-neutral-500",
  accent: "text-term",
  success: "font-bold text-term",
  warn: "text-amber",
};

/**
 * The signature moment (PRD §10): the system investigates its own failure
 * while the visitor watches. Autoplay starts on first viewport entry;
 * replay and skip controls stay available throughout.
 */
export function Terminal(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = useInView(containerRef, { once: true, margin: "-15%" });
  const reducedMotion = usePortfolioStore((state) => state.reducedMotion);
  const { lines, done, playing, replay, skip } = useTerminalPlayer(active, reducedMotion);

  useEffect(() => {
    if (done) usePortfolioStore.getState().setTerminalDone(true);
  }, [done]);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "auto",
    });
  }, [lines.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      void video.play().catch(() => {
        // Autoplay blocked — the poster frame carries the visual.
      });
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <Section id="hacker" index="04" title="the system" tone="void">
      <div className="relative">
        <video
          ref={videoRef}
          aria-hidden
          muted
          loop
          playsInline
          preload="none"
          src={ambientGlow}
          poster={ambientPoster.src}
          className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] object-cover opacity-30"
        />
        <div
          ref={containerRef}
          className="relative border border-white/15 bg-black/85 backdrop-blur-[1px]"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-term/70" />
            </div>
            <p className="truncate font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
              ARIF.WARDAN // SYSTEM
            </p>
            <div className="flex shrink-0 gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={replay}
                className="border border-white/15 px-3 py-1 text-neutral-400 transition-colors hover:border-term hover:text-term"
              >
                replay
              </button>
              {!done && (
                <button
                  type="button"
                  onClick={skip}
                  className="border border-white/15 px-3 py-1 text-neutral-400 transition-colors hover:border-term hover:text-term"
                >
                  skip
                </button>
              )}
            </div>
          </div>

          <div
            ref={bodyRef}
            role="log"
            aria-label="System investigation transcript"
            aria-live="off"
            className="h-[440px] overflow-y-auto p-5 font-mono text-[13px] leading-relaxed lg:h-[480px] lg:text-sm"
          >
            <span className="sr-only">{TERMINAL_SCRIPT.map((step) => step.text).join(". ")}</span>
            {lines.length === 0 && <p className="text-neutral-600">waiting for input stream…</p>}
            {lines.map((line) => (
              <p key={line.id} className={cn("whitespace-pre-wrap", KIND_STYLES[line.kind])}>
                {line.text}
              </p>
            ))}
            {playing && (
              <span
                aria-hidden
                className="terminal-caret mt-1 inline-block h-4 w-2.5 bg-term align-middle"
              />
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 font-mono text-xs text-neutral-500">
        {"// no typing required — the system runs the investigation itself."}
      </p>
    </Section>
  );
}
