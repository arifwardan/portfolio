"use client";

import type { JSX } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import laptopCode from "@assets/images/laptop-code.jpg";
import { PROFILE } from "@/lib/content";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: usePortfolioStore.getState().reducedMotion ? "auto" : "smooth",
  });
}

/**
 * World 01 arrival: editorial hero beside a static visual.
 * Deliberately canvas-free — no WebGL, no 3D runtime, fast on every device.
 */
export function Hero(): JSX.Element {
  const reducedMotion = usePortfolioStore((state) => state.reducedMotion);

  return (
    <section id="top" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:pt-40 lg:pb-28">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-sm tracking-[0.25em] text-ink/55 uppercase">
            {PROFILE.role}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] font-extrabold tracking-tight lg:text-7xl">
            ARIF
            <br />
            WARDAN
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">{PROFILE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId("about")}
              className="bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/80"
            >
              Explore Portfolio
            </button>
            <button
              type="button"
              onClick={() => scrollToId("hacker-projects")}
              className="border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              View Projects
            </button>
          </div>
          <dl className="mt-12 max-w-md font-mono text-sm">
            <div className="flex justify-between gap-6 border-t border-ink/15 py-3">
              <dt className="text-ink/50">Focus</dt>
              <dd className="text-right">Backend Engineer</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-ink/15 py-3">
              <dt className="text-ink/50">Stack</dt>
              <dd className="text-right">{PROFILE.stackLine}</dd>
            </div>
            <div className="flex justify-between gap-6 border-y border-ink/15 py-3">
              <dt className="text-ink/50">Base</dt>
              <dd className="text-right">{PROFILE.location}</dd>
            </div>
          </dl>
        </motion.div>

        <div>
          <div className="relative h-[440px] border border-ink/15 lg:h-[620px]">
            <figure className="relative h-full w-full">
              <Image
                src={laptopCode}
                alt="Code on a laptop screen"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </figure>
          </div>
          <p className="mt-3 font-mono text-xs text-ink/45">
            Field notes from the systems I build and break.
          </p>
        </div>
      </div>
    </section>
  );
}
