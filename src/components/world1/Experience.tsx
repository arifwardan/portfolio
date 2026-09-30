import type { JSX } from "react";
import { EXPERIENCES } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export function Experience(): JSX.Element {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol>
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.period}-${experience.organization}`}
            className="grid gap-3 border-t border-ink/15 py-8 transition-colors last:border-b hover:bg-ink/[0.025] lg:grid-cols-[220px_1fr_1.4fr] lg:gap-10"
          >
            <span className="font-mono text-sm text-ink/55">{experience.period}</span>
            <div>
              <h3 className="font-display text-lg font-semibold">{experience.role}</h3>
              <p className="mt-1 text-sm text-ink/60">{experience.organization}</p>
            </div>
            <ul className="space-y-2 text-[15px] leading-relaxed text-ink/75">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden className="text-ink/35">
                    →
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
