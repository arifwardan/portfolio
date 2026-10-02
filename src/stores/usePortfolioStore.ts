"use client";

import { create } from "zustand";
import { nextPhase, type NarrativeEvent, type Phase } from "@/lib/narrative";

interface PortfolioState {
  phase: Phase;
  /** Progressive glitch distortion, 0 (clean) → 1 (full). */
  glitchLevel: number;
  reducedMotion: boolean;
  terminalDone: boolean;
  send: (event: NarrativeEvent) => void;
  setGlitchLevel: (level: number) => void;
  setReducedMotion: (reduced: boolean) => void;
  setTerminalDone: (done: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>()((set) => ({
  phase: "world1",
  glitchLevel: 0,
  reducedMotion: false,
  terminalDone: false,
  send: (event) => set((state) => ({ phase: nextPhase(state.phase, event) })),
  setGlitchLevel: (level) => set({ glitchLevel: Math.min(1, Math.max(0, level)) }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setTerminalDone: (terminalDone) => set({ terminalDone }),
}));

// Focused selectors — components subscribe to slices, not the whole store.
export function usePhase(): Phase {
  return usePortfolioStore((state) => state.phase);
}

export function useGlitchLevel(): number {
  return usePortfolioStore((state) => state.glitchLevel);
}
