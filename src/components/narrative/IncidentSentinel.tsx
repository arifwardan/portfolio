import type { RefObject, JSX } from "react";

/**
 * In-flow trigger band between the professional portfolio and the incident
 * (PRD: transition fires after Experience, before Projects). The narrative
 * director observes this element — scrolling here starts the glitch.
 */
export function IncidentSentinel({
  sentinelRef,
}: {
  sentinelRef: RefObject<HTMLElement | null>;
}): JSX.Element {
  return (
    <section
      ref={sentinelRef}
      aria-label="System integrity warning"
      className="border-y border-white/10 bg-void py-14 text-center font-mono"
    >
      <div className="rupture-stripes h-1.5 w-full opacity-70" aria-hidden />
      <p className="mt-8 flex items-center justify-center gap-3 px-6 text-sm tracking-[0.25em] text-neutral-500 uppercase">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber" />
        signal degrading — keep scrolling
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber" />
      </p>
      <p className="mt-3 px-6 text-xs text-neutral-600">{"// system integrity 98% ... 97% ..."}</p>
    </section>
  );
}
