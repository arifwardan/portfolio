"use client";

import type { JSX } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroAsset from "@assets/images/arif-portfolio-hero-asset.png";
import { PROFILE, SOCIALS } from "@/lib/content";
import { logoFor, type LogoKey } from "@/lib/logos";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

const SOCIAL_LOGOS: Record<string, LogoKey> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Email: "gmail",
};

const TAGLINE_HIGHLIGHT = "worth solving";
const [TAGLINE_START, TAGLINE_END] = PROFILE.tagline.split(TAGLINE_HIGHLIGHT);

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
          <p className="flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-ink/55 uppercase">
            {PROFILE.role}
            <span aria-hidden className="h-px w-24 bg-ink/30" />
          </p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] font-extrabold tracking-tight lg:text-8xl">
            ARIF
            <br />
            WARDAN
          </h1>
          <p className="mt-6 max-w-sm font-mono text-lg leading-relaxed text-ink/80">
            {TAGLINE_START}
            <span className="bg-ink/10 px-1">{TAGLINE_HIGHLIGHT}</span>
            {TAGLINE_END}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId("hacker-projects")}
              className="flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/80"
            >
              View Projects
              <ArrowUpRight size={16} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("about")}
              className="border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
            >
              About Me
            </button>
          </div>
          <dl className="mt-12 max-w-md font-mono text-sm">
            <div className="flex gap-10 border-t border-ink/10 py-3">
              <dt className="w-24 shrink-0 text-xs tracking-[0.2em] text-ink/45 uppercase">Focus</dt>
              <dd>Backend Engineer</dd>
            </div>
            <div className="flex gap-10 border-t border-ink/10 py-3">
              <dt className="w-24 shrink-0 text-xs tracking-[0.2em] text-ink/45 uppercase">Stack</dt>
              <dd>{PROFILE.stackLine}</dd>
            </div>
            <div className="flex gap-10 border-t border-b border-ink/10 py-3">
              <dt className="w-24 shrink-0 text-xs tracking-[0.2em] text-ink/45 uppercase">Currently</dt>
              <dd>Building software &amp; systems</dd>
            </div>
          </dl>
          <ul aria-label="Social links" className="mt-10 flex items-center divide-x divide-ink/15">
            {SOCIALS.filter((social) => SOCIAL_LOGOS[social.label]).map((social) => {
              // LinkedIn's brand mark is a badge with its own background; the white
              // glyph variant keeps the icon a clean monochrome mark like the rest.
              const logo = logoFor(SOCIAL_LOGOS[social.label], social.label === "LinkedIn");
              return (
                <li key={social.label} className="px-5 first:pl-0">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="block opacity-70 transition-opacity hover:opacity-100"
                  >
                    <img
                      src={logo.src}
                      alt={`${social.label} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5 [filter:brightness(0)]"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div>
          <figure className="relative h-[440px] w-full lg:h-[620px]">
              <Image
                src={heroAsset}
                alt="Arif Wardan working at a desk with code on screen, city view at dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </figure>
        </div>  
      </div>
    </section>
  );
}
