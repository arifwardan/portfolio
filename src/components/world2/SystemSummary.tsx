"use client";

import type { JSX } from "react";

import { PROFILE, SYSTEM_SUMMARY } from "@/lib/content";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { Section } from "@/components/ui/Section";

const STATS = [
  { value: SYSTEM_SUMMARY.projects, label: "projects" },
  { value: SYSTEM_SUMMARY.systems, label: "systems" },
  { value: SYSTEM_SUMMARY.experiments, label: "experiments" },
  { value: SYSTEM_SUMMARY.failures, label: "failures" },
] as const;

export function SystemSummary(): JSX.Element {
  const goHome = (): void => {
    const store = usePortfolioStore.getState();
    store.send("RETURN_TO_WORLD");
    window.scrollTo({
      top: 0,
      behavior: store.reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <Section id="summary" index="07" title="system.summary" tone="void">
      <dl className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-void p-8">
            <dd className="font-mono text-5xl font-bold text-white">
              {String(stat.value).padStart(2, "0")}
            </dd>
            <dt className="mt-2 font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
      <p className="mt-8 font-mono text-sm text-neutral-500">
        status: <span className="font-bold text-term">{SYSTEM_SUMMARY.status}</span>
      </p>
      <div className="mt-10 border-t border-white/10 pt-10">
        <p className="font-mono text-lg leading-relaxed text-term lg:text-xl">
          &gt; THE BEST WAY TO PREDICT THE FUTURE
          <br />
          &gt; IS TO BUILD IT.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-500">
          You didn&apos;t just visit {PROFILE.name}&apos;s portfolio. You experienced how he
          approaches a problem: investigate → understand → solve → restore.
        </p>
        <button
          type="button"
          onClick={goHome}
          className="mt-8 border border-white/25 px-6 py-3 font-mono text-sm text-neutral-200 transition-colors hover:border-term hover:text-term"
        >
          ↩ Return to World 01
        </button>
      </div>
    </Section>
  );
}
