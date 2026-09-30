"use client";

import { useEffect, useState } from "react";
import { TERMINAL_SCRIPT, type TerminalStep } from "@/lib/terminal-script";

export interface TerminalPlayer {
  lines: readonly TerminalStep[];
  done: boolean;
  playing: boolean;
  replay: () => void;
  skip: () => void;
}

/**
 * Plays the hacker-mode script line by line once `active` turns true
 * (parent gates this on viewport visibility). Reduced motion collapses
 * every delay so the full transcript appears near-instantly.
 */
export function useTerminalPlayer(active: boolean, reducedMotion: boolean): TerminalPlayer {
  const [visibleCount, setVisibleCount] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (active) setPlaying(true);
  }, [active]);

  const done = visibleCount >= TERMINAL_SCRIPT.length;

  useEffect(() => {
    if (!playing || done) return;
    const step = TERMINAL_SCRIPT[visibleCount];
    if (!step) return;
    const delay = reducedMotion ? 25 : step.delayMs;
    const timer = window.setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, delay);
    return () => {
      window.clearTimeout(timer);
    };
  }, [playing, visibleCount, done, reducedMotion]);

  return {
    lines: TERMINAL_SCRIPT.slice(0, visibleCount),
    done,
    playing: playing && !done,
    replay: () => {
      setVisibleCount(0);
      setPlaying(true);
    },
    skip: () => {
      setVisibleCount(TERMINAL_SCRIPT.length);
    },
  };
}
