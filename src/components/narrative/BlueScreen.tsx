"use client";

import { useEffect, useState, type JSX } from "react";
import { TIMING } from "@/lib/narrative";
import { blip } from "@/lib/sound";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

/**
 * Fictional OS crash screen (PRD §8) — on-brand, not a Windows clone.
 * Counts down, then hands off to the reboot sequence.
 */
export function BlueScreen(): JSX.Element {
  const reducedMotion = usePortfolioStore((state) => state.reducedMotion);
  const [count, setCount] = useState<number>(TIMING.bluescreenCountFrom);
  const [collecting, setCollecting] = useState(false);

  useEffect(() => {
    const start = window.setTimeout(() => setCollecting(true), 100);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      usePortfolioStore.getState().send("COUNTDOWN_DONE");
      return;
    }
    const tickMs = reducedMotion ? 250 : TIMING.bluescreenTickMs;
    const timer = window.setTimeout(() => {
      blip(330, 120);
      setCount((value) => value - 1);
    }, tickMs);
    return () => window.clearTimeout(timer);
  }, [count, reducedMotion]);

  return (
    <div
      role="alertdialog"
      aria-label="System failure"
      className="fixed inset-0 z-50 flex items-center justify-center bg-bsod font-mono text-neutral-100"
    >
      <div className="w-full max-w-xl px-8">
        <p className="text-7xl font-light">:(</p>
        <p className="mt-8 text-lg leading-relaxed">
          YOUR SYSTEM RAN INTO A PROBLEM
          <br />
          AND NEEDS TO RESTART.
        </p>
        <div className="mt-8 text-sm">
          <p className="text-neutral-400">ERROR CODE:</p>
          <p className="mt-1 text-xl font-bold text-amber">PORTFOLIO_EXCEPTION</p>
        </div>
        <p className="mt-8 text-sm text-neutral-400">Collecting diagnostic information...</p>
        <div
          className="mt-3 h-2 w-full bg-white/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={collecting ? 100 : 0}
        >
          <div
            className="h-full bg-term transition-[width] duration-1000 ease-linear"
            style={{ width: collecting ? "100%" : "0%" }}
          />
        </div>
        <p className="mt-8 text-sm tracking-[0.25em] text-neutral-400 uppercase">
          System will restart
        </p>
        <p className="mt-2 text-2xl font-bold" aria-live="polite">
          Restarting in {count}...
        </p>
        <button
          type="button"
          onClick={() => usePortfolioStore.getState().send("SKIP_INCIDENT")}
          className="mt-10 border border-white/30 px-4 py-2 text-xs tracking-widest text-white/70 uppercase transition-colors hover:border-white hover:text-white"
        >
          Skip incident →
        </button>
      </div>
    </div>
  );
}
