// Narrative state machine — the single source of truth for the
// World 01 → incident → World 02 journey (PRD §4).
//
// Pure module: no React, no side effects. Fully covered by unit tests.

export type Phase = "world1" | "glitch" | "bluescreen" | "reboot" | "hacker";

export const PHASE_ORDER: readonly Phase[] = ["world1", "glitch", "bluescreen", "reboot", "hacker"];

export type NarrativeEvent =
  | "SENTINEL_REACHED"
  | "GLITCH_COMPLETE"
  | "COUNTDOWN_DONE"
  | "BOOT_DONE"
  | "SKIP_INCIDENT"
  | "RETURN_TO_WORLD";

type TransitionTable = Record<Phase, Partial<Record<NarrativeEvent, Phase>>>;

export const TRANSITIONS: TransitionTable = {
  world1: { SENTINEL_REACHED: "glitch" },
  glitch: { GLITCH_COMPLETE: "bluescreen", SKIP_INCIDENT: "hacker" },
  bluescreen: { COUNTDOWN_DONE: "reboot", SKIP_INCIDENT: "hacker" },
  reboot: { BOOT_DONE: "hacker", SKIP_INCIDENT: "hacker" },
  hacker: { RETURN_TO_WORLD: "world1" },
};

/** Total function: unknown events leave the phase unchanged. */
export function nextPhase(phase: Phase, event: NarrativeEvent): Phase {
  return TRANSITIONS[phase][event] ?? phase;
}

/** Phases where the incident is in progress (content distorted / taken over). */
export function isIncidentPhase(phase: Phase): boolean {
  return phase === "glitch" || phase === "bluescreen" || phase === "reboot";
}

/** Fullscreen takeover phases — scroll is locked while these render. */
export function isTakeoverPhase(phase: Phase): boolean {
  return phase === "bluescreen" || phase === "reboot";
}

/** Central timing budget for the incident, in milliseconds. */
export const TIMING = {
  /** Progressive glitch buildup: 0 → full distortion. */
  glitchBuildMs: 2600,
  /** Hold at full distortion before the crash. */
  glitchHoldMs: 900,
  /** Blue-screen countdown start value. */
  bluescreenCountFrom: 3,
  /** Interval between countdown ticks. */
  bluescreenTickMs: 900,
  /** Delay between reboot log lines. */
  rebootStepMs: 600,
  /** Pause after boot completes before scrolling to hacker mode. */
  postBootScrollDelayMs: 700,
} as const;
