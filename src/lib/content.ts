// Portfolio content — every human-readable string lives here, typed.
// Asset-free by design: covers are symbolic keys resolved in
// `@/lib/covers.ts` so this module stays unit-testable under plain Vitest.

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  stackLine: string;
  quote: string;
}

export const PROFILE: Profile = {
  name: "Arif Wardan",
  role: "Software Engineer",
  tagline: "Building software, systems, and things worth solving.",
  location: "Indonesia",
  stackLine: "Golang • FastAPI • Next.js",
  quote: "The best way to predict the future is to build it.",
};

export interface Experience {
  period: string;
  role: string;
  organization: string;
  bullets: readonly string[];
}

export const EXPERIENCES: readonly Experience[] = [
  {
    period: "2024 — Present",
    role: "Mentor",
    organization: "Pondok Programmer",
    bullets: [
      "Mentored aspiring developers in backend engineering fundamentals",
      "Delivered technical public speaking sessions and workshops",
      "Guided students through practical software development projects",
    ],
  },
  {
    period: "2024 — Present",
    role: "Self Employed",
    organization: "Exnusa",
    bullets: [
      "Architected and built an AI-native software product from scratch",
      "Orchestrated Large Language Models (LLMs) into core backend features",
      "Managed end-to-end product lifecycle and technical roadmap",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Software Engineer",
    organization: "PT Nizom Berkah Informasi",
    bullets: [
      "Developed backend services primarily using Golang",
      "Designed and optimized complex database queries and schemas",
      "Improved overall system performance through targeted optimizations",
    ],
  },
  {
    period: "2023",
    role: "Back End Developer",
    organization: "PT Semesta Arus Teknologi",
    bullets: [
      "Built backend features for enterprise applications",
      "Optimized database performance and system queries",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Back End Developer",
    organization: "Ortax",
    bullets: [
      "Designed and developed RESTful APIs using Object-Oriented Programming",
      "Built scalable backend systems for taxation platforms",
      "Collaborated on multi-tenant application workflows",
    ],
  },
  {
    period: "2020 — 2021",
    role: "Mentor",
    organization: "Pondok Programmer",
    bullets: [
      "Guided students through foundational programming concepts",
      "Facilitated technical mentoring and public speaking activities",
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

/**
 * Technology ecosystem — deliberately NOT a proficiency list.
 * PRD invariant: the words "problem solving" must never appear here;
 * that story is told by the incident experience instead.
 */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  { label: "Backend", items: ["Golang", "FastAPI", "Laravel", "REST API", "JWT"] },
  { label: "Frontend", items: ["Next.js", "React", "Svelte", "TypeScript"] },
  { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "Tools", items: ["Docker", "Git", "Linux"] },
  { label: "AI", items: ["LLM APIs", "AI Agents", "AI-native Systems"] },
];

export type CoverKey = "althea" | "simahal" | "systems" | "about" | "skills" | "hacker";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: readonly string[];
  status: "Building" | "Shipped" | "Maintaining";
  year: string;
  cover: CoverKey;
  links: readonly { label: string; href: string }[];
}

export const PROJECTS: readonly Project[] = [
  {
    slug: "althea",
    name: "ALTHEA",
    tagline: "Autonomous agent runtime — does the work while you sleep.",
    description:
      "A laptop-first autonomous runtime: a Node.js + TypeScript backend with a Svelte 5 " +
      "dashboard that orchestrates the Muse CLI subscription as its brain. Dynamic LIFO task " +
      "workflows, sleep-that-wakes, resume across usage-limit resets, and a web → Telegram → " +
      "auto-decide permission escalation with a kill-switch. Project work runs an autonomous " +
      "pipeline — PRD to MVP to release — with code review, MCP tool verification, and live " +
      "per-port app previews.",
    role: "Founder / Engineer",
    stack: ["Node.js", "TypeScript", "Svelte 5", "Telegram API", "LangGraph", "Playwright"],
    status: "Building",
    year: "2026",
    cover: "althea",
    links: [{ label: "GitHub", href: "https://github.com/arifwardan/althea" }],
  },
  {
    slug: "simahal",
    name: "SiMahal",
    tagline: "Qur'an halaqah management — one ecosystem for the whole journey.",
    description:
      "A Qur'an memorization management system built for PondokIT, connecting Admin, " +
      "Muhafidz, Santri, and parents in one ecosystem: mutabaah records, hafalan targets, " +
      "evaluations, and progress computed from real records — never stored as a guess — with " +
      "parent notifications on every milestone. Laravel core with Eloquent on PostgreSQL, " +
      "React + Inertia + TypeScript frontend in a calm Modern Islamic Futurism language.",
    role: "Engineer",
    stack: ["Laravel", "React", "Inertia", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    status: "Building",
    year: "2026",
    cover: "simahal",
    links: [{ label: "GitHub", href: "https://github.com/arifwardan/simahal" }],
  },
];

/** Evidence shown in hacker mode: outcomes, not adjectives. */
export const PROBLEMS_SOLVED: readonly string[] = [
  "Multi-tenant architecture",
  "Backend systems",
  "API design",
  "Complex application workflows",
  "AI orchestration",
];

export interface Experiment {
  name: string;
  description: string;
  stack: string;
}

export const EXPERIMENTS: readonly Experiment[] = [
  {
    name: "tenant-kit",
    description: "Row-level tenancy patterns for Postgres-backed Go services.",
    stack: "Golang • PostgreSQL",
  },
  {
    name: "llm-router",
    description: "Failover and budget routing across LLM providers.",
    stack: "FastAPI • Redis",
  },
  {
    name: "r3f-scenes",
    description: "Reusable React Three Fiber rigs: hotspots, camera rails, LOD.",
    stack: "Three.js • R3F",
  },
  {
    name: "edge-jobs",
    description: "Cron-like background jobs on serverless runtimes.",
    stack: "Next.js • Vercel",
  },
];

export interface SystemSummary {
  projects: number;
  systems: number;
  experiments: number;
  failures: number;
  status: string;
}

export const SYSTEM_SUMMARY: SystemSummary = {
  projects: 7,
  systems: 12,
  experiments: 9,
  failures: 143,
  status: "BUILDING",
};

export interface Social {
  label: string;
  href: string;
  logo: string;
}

// TODO(arif): replace with your real handles before launch.
export const SOCIALS: readonly Social[] = [
  { label: "GitHub", href: "https://github.com/arifwardan", logo: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arifwardan",
    logo: "linkedin",
  },
  { label: "Email", href: "mailto:arifwardan.id@gmail.com", logo: "gmail" },
];
