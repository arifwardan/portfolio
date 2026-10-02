import type { JSX } from "react";
import Image from "next/image";
import { COVERS } from "@/lib/covers";
import { PROJECTS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";

export function HackerProjects(): JSX.Element {
  return (
    <Section id="hacker-projects" index="05" title="projects" tone="void">
      <div className="space-y-20">
        {PROJECTS.map((project, position) => (
          <article
            key={project.slug}
            id={`projects-${project.slug}`}
            className="grid scroll-mt-28 gap-10 lg:grid-cols-[1fr_320px] lg:gap-14"
          >
            <div>
              <p className="font-mono text-sm text-term">$ cat projects/{project.slug}</p>
              <div className="mt-4 flex items-baseline gap-4">
                <span className="font-mono text-sm text-neutral-600">
                  {String(position + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  {project.name}
                </h3>
              </div>
              <p className="mt-3 text-lg text-neutral-300">{project.tagline}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <dl className="mt-8 max-w-2xl font-mono text-sm">
                <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/10 py-3">
                  <dt className="text-neutral-500">ROLE</dt>
                  <dd className="text-neutral-200">{project.role}</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/10 py-3">
                  <dt className="text-neutral-500">STACK</dt>
                  <dd className="text-neutral-200">{project.stack.join(" / ")}</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/10 py-3">
                  <dt className="text-neutral-500">STATUS</dt>
                  <dd>
                    <span
                      className={cn(
                        "border px-2 py-0.5 text-xs tracking-widest uppercase",
                        project.status === "Building"
                          ? "border-amber/60 text-amber"
                          : "border-term/60 text-term",
                      )}
                    >
                      {project.status}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-4 border-y border-white/10 py-3">
                  <dt className="text-neutral-500">YEAR</dt>
                  <dd className="text-neutral-200">{project.year}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="border border-term/60 px-5 py-2.5 font-mono text-sm text-term transition-colors hover:bg-term hover:text-void"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
            <figure className="relative self-start">
              <Image
                src={COVERS[project.cover]}
                alt={`${project.name} cover`}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="w-full border border-white/15"
                placeholder="blur"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-term/10 mix-blend-overlay"
              />
              <figcaption className="mt-3 font-mono text-xs text-neutral-600">
                {`evidence/${project.slug}.png`}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </Section>
  );
}
