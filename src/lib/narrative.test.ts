import { describe, expect, it } from "vitest";
import {
  PHASE_ORDER,
  TIMING,
  isIncidentPhase,
  isTakeoverPhase,
  nextPhase,
  type NarrativeEvent,
  type Phase,
} from "./narrative";

describe("narrative state machine", () => {
  it("walks the full incident journey in order", () => {
    const journey: Array<[NarrativeEvent, Phase]> = [
      ["SENTINEL_REACHED", "glitch"],
      ["GLITCH_COMPLETE", "bluescreen"],
      ["COUNTDOWN_DONE", "reboot"],
      ["BOOT_DONE", "hacker"],
    ];
    let phase: Phase = "world1";
    for (const [event, expected] of journey) {
      phase = nextPhase(phase, event);
      expect(phase).toBe(expected);
    }
  });

  it("returns from hacker mode to world 01", () => {
    expect(nextPhase("hacker", "RETURN_TO_WORLD")).toBe("world1");
  });

  it("skips the incident from every incident phase", () => {
    const incident: Phase[] = ["glitch", "bluescreen", "reboot"];
    for (const phase of incident) {
      expect(nextPhase(phase, "SKIP_INCIDENT")).toBe("hacker");
    }
  });

  it("ignores events that do not apply to the current phase", () => {
    expect(nextPhase("world1", "BOOT_DONE")).toBe("world1");
    expect(nextPhase("world1", "SKIP_INCIDENT")).toBe("world1");
    expect(nextPhase("hacker", "SENTINEL_REACHED")).toBe("hacker");
    expect(nextPhase("bluescreen", "RETURN_TO_WORLD")).toBe("bluescreen");
  });

  it("lists every phase exactly once in journey order", () => {
    expect(PHASE_ORDER).toEqual(["world1", "glitch", "bluescreen", "reboot", "hacker"]);
    expect(new Set(PHASE_ORDER).size).toBe(PHASE_ORDER.length);
  });

  it("classifies incident and takeover phases", () => {
    expect(isIncidentPhase("world1")).toBe(false);
    expect(isIncidentPhase("hacker")).toBe(false);
    for (const phase of ["glitch", "bluescreen", "reboot"] as const) {
      expect(isIncidentPhase(phase)).toBe(true);
    }
    expect(isTakeoverPhase("bluescreen")).toBe(true);
    expect(isTakeoverPhase("reboot")).toBe(true);
    expect(isTakeoverPhase("glitch")).toBe(false);
    expect(isTakeoverPhase("hacker")).toBe(false);
  });

  it("keeps a sane timing budget", () => {
    expect(TIMING.glitchBuildMs).toBeGreaterThan(0);
    expect(TIMING.glitchHoldMs).toBeGreaterThan(0);
    expect(TIMING.bluescreenCountFrom).toBeGreaterThanOrEqual(1);
    expect(TIMING.bluescreenTickMs).toBeGreaterThan(0);
    expect(TIMING.rebootStepMs).toBeGreaterThan(0);
    expect(TIMING.postBootScrollDelayMs).toBeGreaterThanOrEqual(0);
  });
});
