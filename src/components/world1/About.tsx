import type { JSX } from "react";
import Image from "next/image";
import profilePortrait from "@assets/images/profile.png";
import { COVERS } from "@/lib/covers";
import { PROFILE } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export function About(): JSX.Element {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div>
          <img
            src={profilePortrait.src}
            alt="Portrait of Arif Wardan"
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
            I&apos;m <strong>Arif Wardan</strong>, a Backend Developer who believes that great
            software is not built by writing more code — it is built by{" "}
            <strong>understanding the problem, designing the right system, and taking ownership
            of the result.</strong>
          </p>
          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-ink/75">
            <p>
              My journey started at <strong className="font-semibold text-ink">Pondok IT</strong>,
              where I spent years learning not only how to code, but how to think like an
              engineer. Since then, I&apos;ve worked on real-world systems involving{" "}
              <strong className="font-semibold text-ink">multi-tenant applications, taxation
              platforms, internal business tools, and advertising platforms</strong>, primarily
              using <strong className="font-semibold text-ink">Golang and backend
              technologies</strong>.
            </p>
            <p>What makes me different is the way I approach engineering.</p>
            <p>
              I don&apos;t want to be the developer who simply waits for a ticket and turns
              requirements into code.
            </p>
            <p>I like asking:</p>
          </div>
          <blockquote className="mt-6 max-w-2xl border-l-2 border-ink pl-6 font-display text-xl leading-relaxed font-medium">
            <p>Why are we building this?</p>
            <p>What happens when it grows?</p>
            <p>What will break?</p>
            <p>How can we make the next change easier?</p>
          </blockquote>
          <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-ink/75">
            <p>
              That mindset naturally led me beyond implementation — into{" "}
              <strong className="font-semibold text-ink">architecture, developer experience,
              automation, system design, and product thinking</strong>.
            </p>
            <p>
              I&apos;m currently exploring how AI can become part of the engineering process
              without sacrificing the standards, structure, and reasoning that make software
              maintainable.
            </p>
            <p>
              Because for me, AI isn&apos;t the destination.{" "}
              <strong className="font-semibold text-ink">Building better software is.</strong>
            </p>
            <p>
              I enjoy difficult problems, unfamiliar technologies, Linux, and projects where I can
              turn an unclear idea into something real.
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
