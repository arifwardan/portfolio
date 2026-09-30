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
  tagline: "Building software, systems and ideas.",
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
    period: "2023 — Present",
    role: "Backend / Software Engineering",
    organization: "Independent",
    bullets: [
      "Built backend systems serving production traffic",
      "Designed versioned REST APIs with JWT auth",
      "Shipped multi-tenant application workflows",
      "Orchestrated LLM APIs into AI-native features",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Software Engineer",
    organization: "PT Nizom Berkah Informasi",
    bullets: [
      "Developed backend services in Golang",
      "Designed APIs consumed by web and mobile clients",
      "Hardened multi-tenant data isolation",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Software Engineer",
    organization: "PT Integral Data Prima",
    bullets: [
      "Built backend systems for enterprise clients",
      "Worked across complex application workflows",
      "Shipped features with PostgreSQL and Redis",
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
  { label: "Backend", items: ["Golang", "FastAPI", "REST API", "JWT"] },
  { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { label: "Database", items: ["PostgreSQL", "Redis"] },
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
    tagline: "AI-native software company operating system.",
    description:
      "An operating system for software companies: projects, knowledge and " +
      "AI agents orchestrated behind one API. Event-driven core, multi-tenant " +
      "by design, with an agent layer that drafts, reviews and ships routine work.",
    role: "Founder / Engineer",
    stack: ["FastAPI", "Golang", "Next.js", "PostgreSQL", "Redis"],
    status: "Building",
    year: "2025",
    cover: "althea",
    links: [{ label: "Case file", href: "#projects-althea" }],
  },
  {
    slug: "simahal",
    name: "SiMahal",
    tagline: "Price intelligence, engineered end-to-end.",
    description:
      "A multi-tenant application tracking prices across vendors: ingestion " +
      "pipelines, a versioned public API and a client app. Built for correctness " +
      "first — every figure traceable to its source snapshot.",
    role: "Engineer",
    stack: ["Golang", "PostgreSQL", "Redis", "Next.js"],
    status: "Shipped",
    year: "2024",
    cover: "simahal",
    links: [{ label: "Case file", href: "#projects-simahal" }],
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
  { label: "Email", href: "mailto:hello@arifwardan.dev", logo: "gmail" },
];
