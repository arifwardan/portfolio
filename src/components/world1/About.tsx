import type { JSX } from "react";
import Image from "next/image";
import avatarPlaceholder from "@assets/images/avatar-placeholder.svg";
import { COVERS } from "@/lib/covers";
import { PROFILE } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export function About(): JSX.Element {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div>
          {/* PLACEHOLDER: swap with a real portrait before launch. */}
          <img
            src={avatarPlaceholder.src}
            alt="Portrait placeholder for Arif Wardan"
            width={280}
            height={280}
            className="aspect-square w-full max-w-[280px] border border-ink/15"
          />
          <dl className="mt-6 font-mono text-sm">
            <div className="flex justify-between gap-4 border-t border-ink/15 py-2.5">
              <dt className="text-ink/50">Name</dt>
              <dd>{PROFILE.name}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-ink/15 py-2.5">
              <dt className="text-ink/50">Role</dt>
              <dd>{PROFILE.role}</dd>
            </div>
            <div className="flex justify-between gap-4 border-y border-ink/15 py-2.5">
              <dt className="text-ink/50">Base</dt>
              <dd>{PROFILE.location}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="font-display text-2xl leading-snug font-medium lg:text-3xl">
            Engineer, builder, explorer — I work on the parts of software nobody sees until they
            break.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-ink/75">
            <p>
              I&apos;m Arif, a software engineer based in {PROFILE.location}. Most of my time goes
              into backends: APIs, data models and the unglamorous plumbing that decides whether
              software survives contact with production.
            </p>
            <p>
              My stack centers on {PROFILE.stackLine}, with PostgreSQL and Redis underneath. Lately
              most of my building has been AI-native — LLM APIs and agents wired into systems that
              do real work, like ALTHEA.
            </p>
          </div>
          <blockquote className="mt-10 border-ink/80 pl-0">
            <p className="font-display text-xl font-medium text-ink italic lg:text-2xl">
              “{PROFILE.quote}”
            </p>
          </blockquote>
          <figure className="mt-12">
            <Image
              src={COVERS.about}
              alt="Desk workspace with laptop"
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="w-full border border-ink/15"
              placeholder="blur"
            />
            <figcaption className="mt-3 font-mono text-xs text-ink/45">
              fig. 01 — where the systems get built.
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
