import type { CSSProperties, JSX } from "react";
import grainLoop from "@assets/videos/grain-loop.mp4";
import { useGlitchLevel, usePortfolioStore } from "@/stores/usePortfolioStore";

const SLICES = [
  { top: "12%", height: 14, duration: "0.42s" },
  { top: "34%", height: 26, duration: "0.31s" },
  { top: "58%", height: 10, duration: "0.53s" },
  { top: "76%", height: 34, duration: "0.27s" },
  { top: "89%", height: 12, duration: "0.47s" },
];

/**
 * Progressive distortion overlay for the glitch phase (PRD §7).
 * Intensity follows the store's glitchLevel 0 → 1; purely decorative
 * except for the skip control.
 */
export function GlitchOverlay(): JSX.Element {
  const level = useGlitchLevel();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: Math.min(1, level * 1.15) }}
    >
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={grainLoop}
        className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
      />
      <div className="glitch-scanlines absolute inset-0" />
      {SLICES.map((slice, index) => (
        <div
          key={slice.top}
          className="glitch-slice absolute inset-x-0"
          style={
            {
              top: slice.top,
              height: slice.height,
              animationDuration: slice.duration,
              animationDelay: `${index * 0.07}s`,
              "--gl": level,
            } as CSSProperties
          }
        />
      ))}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: level > 0.82 ? 1 : 0 }}
      >
        <p className="glitch-stamp font-mono text-4xl font-bold tracking-[0.3em] text-red-500 lg:text-6xl">
          SYSTEM FAILURE
        </p>
      </div>
      <SkipIncident />
    </div>
  );
}

function SkipIncident(): JSX.Element {
  return (
    <div className="pointer-events-auto absolute right-6 bottom-6">
      <button
        type="button"
        onClick={() => usePortfolioStore.getState().send("SKIP_INCIDENT")}
        className="border border-white/40 bg-black/60 px-4 py-2 font-mono text-xs tracking-widest text-white/80 uppercase backdrop-blur transition-colors hover:border-white hover:text-white"
      >
        Skip incident →
      </button>
    </div>
  );
}
