import type { JSX } from "react";
import Image from "next/image";
import { COVERS } from "@/lib/covers";
import { EXPERIMENTS, PROBLEMS_SOLVED } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export function SystemsExperiments(): JSX.Element {
  return (
    <Section id="systems" index="06" title="systems & experiments" tone="void">
      <p className="font-mono text-sm text-term">$ cat projects/experience</p>
      <h3 className="mt-4 font-mono text-xl font-bold text-white">PROBLEMS SOLVED</h3>
      <ol className="mt-6 max-w-3xl">
        {PROBLEMS_SOLVED.map((problem, index) => (
          <li
            key={problem}
            className="flex items-baseline gap-5 border-t border-white/10 py-3.5 font-mono last:border-b"
          >
            <span className="text-sm text-neutral-600">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-[15px] text-neutral-200">{problem}</span>
          </li>
        ))}
      </ol>

      <p className="mt-16 font-mono text-sm text-term" id="experiments">
        $ ls experiments/
      </p>
      <h3 className="mt-4 font-mono text-xl font-bold text-white">PLAYGROUND</h3>
      <ul className="mt-6 max-w-3xl">
        {EXPERIMENTS.map((experiment) => (
          <li
            key={experiment.name}
            className="grid gap-1 border-t border-white/10 py-4 last:border-b lg:grid-cols-[200px_1fr_auto] lg:items-baseline lg:gap-6"
          >
            <span className="font-mono text-[15px] font-bold text-term">{experiment.name}/</span>
            <span className="text-sm leading-relaxed text-neutral-400">
              {experiment.description}
            </span>
            <span className="font-mono text-xs text-neutral-600">{experiment.stack}</span>
          </li>
        ))}
      </ul>

      <figure className="mt-12 max-w-3xl">
        <Image
          src={COVERS.systems}
          alt="Server room corridor"
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="w-full border border-white/15"
          placeholder="blur"
        />
        <figcaption className="mt-3 font-mono text-xs text-neutral-600">
          fig. 03 — where uptime lives.
        </figcaption>
      </figure>
    </Section>
  );
}
