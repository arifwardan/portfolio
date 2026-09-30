// Hacker-mode autoplay script (PRD §10). The visitor never types —
// the system performs the investigation for them:
//   investigate → understand → solve → restore.

export type TerminalLineKind = "cmd" | "out" | "dim" | "accent" | "success" | "warn";

export interface TerminalStep {
  id: string;
  kind: TerminalLineKind;
  text: string;
  /** Pause after this line renders, in ms. */
  delayMs: number;
}

export const TERMINAL_SCRIPT: readonly TerminalStep[] = [
  { id: "boot-1", kind: "dim", text: "ARIF.WARDAN // SYSTEM — restricted shell", delayMs: 500 },
  { id: "boot-2", kind: "dim", text: "last login: just now — after the incident", delayMs: 650 },
  { id: "whoami-cmd", kind: "cmd", text: "$ whoami", delayMs: 450 },
  { id: "whoami-1", kind: "out", text: "arif", delayMs: 250 },
  { id: "whoami-2", kind: "out", text: "software_engineer", delayMs: 600 },
  { id: "ls-cmd", kind: "cmd", text: "$ ls", delayMs: 450 },
  {
    id: "ls-1",
    kind: "accent",
    text: "projects/  systems/  experiments/  failures/",
    delayMs: 700,
  },
  { id: "analyze-1", kind: "warn", text: "> ANALYZING FAILURE...", delayMs: 700 },
  { id: "analyze-2", kind: "out", text: "Issue detected.", delayMs: 350 },
  { id: "analyze-3", kind: "out", text: "Unknown condition.", delayMs: 350 },
  { id: "analyze-4", kind: "out", text: "Searching possible solutions...", delayMs: 600 },
  { id: "opt-1", kind: "dim", text: "[01] Ignore", delayMs: 300 },
  { id: "opt-2", kind: "dim", text: "[02] Restart", delayMs: 300 },
  { id: "opt-3", kind: "dim", text: "[03] Investigate", delayMs: 500 },
  { id: "selected", kind: "accent", text: "Selected: [03]", delayMs: 650 },
  { id: "analyzing", kind: "out", text: "Analyzing...", delayMs: 800 },
  { id: "cause", kind: "success", text: "ROOT CAUSE FOUND.", delayMs: 500 },
  { id: "restored", kind: "success", text: "SYSTEM RESTORED.", delayMs: 800 },
  { id: "althea-cmd", kind: "cmd", text: "$ cat projects/althea", delayMs: 500 },
  { id: "althea-1", kind: "accent", text: "ALTHEA", delayMs: 250 },
  {
    id: "althea-2",
    kind: "out",
    text: "AI-native software company operating system.",
    delayMs: 350,
  },
  { id: "althea-3", kind: "dim", text: "STATUS: BUILDING", delayMs: 300 },
  {
    id: "althea-4",
    kind: "dim",
    text: "ARCH: FastAPI / Golang / Next.js / PostgreSQL / Redis",
    delayMs: 700,
  },
  { id: "exp-cmd", kind: "cmd", text: "$ cat projects/experience", delayMs: 500 },
  { id: "exp-1", kind: "out", text: "PROBLEMS SOLVED:", delayMs: 300 },
  {
    id: "exp-2",
    kind: "accent",
    text: "multi-tenant architecture / backend systems / api design",
    delayMs: 300,
  },
  { id: "exp-3", kind: "accent", text: "complex workflows / ai orchestration", delayMs: 700 },
  { id: "sum-cmd", kind: "cmd", text: "$ system.summary", delayMs: 500 },
  { id: "sum-1", kind: "out", text: "projects        07", delayMs: 200 },
  { id: "sum-2", kind: "out", text: "systems         12", delayMs: 200 },
  { id: "sum-3", kind: "out", text: "experiments     09", delayMs: 200 },
  { id: "sum-4", kind: "out", text: "failures       143", delayMs: 400 },
  { id: "sum-5", kind: "dim", text: "status: BUILDING", delayMs: 600 },
  { id: "quote-1", kind: "accent", text: "> THE BEST WAY TO PREDICT THE FUTURE", delayMs: 400 },
  { id: "quote-2", kind: "accent", text: "> IS TO BUILD IT.", delayMs: 900 },
];

export function scriptDurationMs(steps: readonly TerminalStep[] = TERMINAL_SCRIPT): number {
  return steps.reduce((total, step) => total + step.delayMs, 0);
}
