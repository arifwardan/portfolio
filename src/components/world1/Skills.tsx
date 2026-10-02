import type { JSX } from "react";
import Image from "next/image";
import { COVERS } from "@/lib/covers";
import { SKILL_GROUPS } from "@/lib/content";
import { LOGOS, type LogoKey } from "@/lib/logos";
import { Section } from "@/components/ui/Section";

const SKILL_LOGOS: Partial<Record<string, LogoKey>> = {
  Golang: "go",
  FastAPI: "fastapi",
  "Next.js": "nextdotjs",
  React: "react",
  TypeScript: "typescript",
  PostgreSQL: "postgresql",
  Redis: "redis",
  Docker: "docker",
  Git: "git",
  Linux: "linux",
  "LLM APIs": "aiChip",
  "AI Agents": "aiChip",
};

export function Skills(): JSX.Element {
  return (
    <Section id="skills" index="03" title="Skills">
      <p className="max-w-2xl leading-relaxed text-ink/70">
        In the AI era, no single language is a barrier — with clear context and intent, any
        syntax can be produced. What remains irreplaceable is the engineer&apos;s judgment:
        the knowledge and experience to plan a system, design it soundly, and see it through
        to production. That is the core of the craft; below are the tools it has been
        practiced with.
      </p>
      <div className="mt-10">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="grid gap-4 border-t border-ink/15 py-6 last:border-b lg:grid-cols-[200px_1fr] lg:gap-10"
          >
            <h3 className="font-mono text-sm tracking-[0.2em] text-ink/55 uppercase">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const logo = SKILL_LOGOS[item];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 border border-ink/15 bg-white/40 px-3.5 py-2 text-sm font-medium"
                  >
                    {logo && (
                      <img
                        src={LOGOS[logo].src}
                        alt=""
                        aria-hidden
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <figure className="mt-12">
        <Image
          src={COVERS.skills}
          alt="Code editor with backend source"
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="w-full border border-ink/15"
          placeholder="blur"
        />
        <figcaption className="mt-3 font-mono text-xs text-ink/45">
          fig. 02 — the daily driver.
        </figcaption>
      </figure>
    </Section>
  );
}
