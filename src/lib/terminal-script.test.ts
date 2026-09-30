import { describe, expect, it } from "vitest";
import { TERMINAL_SCRIPT, scriptDurationMs } from "./terminal-script";

describe("terminal script", () => {
  it("has unique ids and well-formed steps", () => {
    expect(TERMINAL_SCRIPT.length).toBeGreaterThan(10);
    const ids = TERMINAL_SCRIPT.map((step) => step.id);
    expect(new Set(ids).size).toBe(ids.length);
    const kinds = ["cmd", "out", "dim", "accent", "success", "warn"];
    for (const step of TERMINAL_SCRIPT) {
      expect(step.text.trim()).not.toBe("");
      expect(step.delayMs).toBeGreaterThan(0);
      expect(kinds).toContain(step.kind);
    }
  });

  it("hits every signature beat of the incident story", () => {
    const transcript = TERMINAL_SCRIPT.map((step) => step.text).join("\n");
    for (const beat of [
      "$ whoami",
      "$ ls",
      "ANALYZING FAILURE",
      "Selected: [03]",
      "ROOT CAUSE FOUND",
      "SYSTEM RESTORED",
      "$ cat projects/althea",
      "PROBLEMS SOLVED",
      "$ system.summary",
      "THE BEST WAY TO PREDICT THE FUTURE",
    ]) {
      expect(transcript).toContain(beat);
    }
  });

  it("runs long enough to matter, short enough to watch", () => {
    const total = scriptDurationMs();
    const expected = TERMINAL_SCRIPT.reduce((sum, step) => sum + step.delayMs, 0);
    expect(total).toBe(expected);
    expect(total).toBeGreaterThan(5_000);
    expect(total).toBeLessThan(60_000);
  });
});
