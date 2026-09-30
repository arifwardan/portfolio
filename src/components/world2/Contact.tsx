import type { JSX } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, SOCIALS } from "@/lib/content";
import { logoFor, type LogoKey } from "@/lib/logos";
import { Section } from "@/components/ui/Section";

const SOCIAL_LOGOS: Record<string, LogoKey> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Email: "gmail",
};

export function Contact(): JSX.Element {
  const email = SOCIALS.find((social) => social.label === "Email");
  const channels = SOCIALS.filter((social) => social.label !== "Email");

  return (
    <Section id="contact" index="08" title="contact" tone="void">
      <p className="font-mono text-sm text-term">$ open_channel --secure</p>
      <h3 className="mt-4 max-w-2xl font-mono text-3xl leading-tight font-bold text-white lg:text-4xl">
        Have a system to build, fix, or rethink?
      </h3>
      {email && (
        <a
          href={email.href}
          className="mt-8 inline-block font-mono text-xl break-all text-white underline decoration-term decoration-2 underline-offset-8 transition-colors hover:text-term lg:text-3xl"
        >
          {email.href.replace("mailto:", "")}
        </a>
      )}
      <ul className="mt-12 max-w-3xl">
        {channels.map((social) => {
          const logo = logoFor(SOCIAL_LOGOS[social.label] ?? "github", true);
          return (
            <li key={social.label} className="border-t border-white/10 last:border-b">
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-4 transition-colors"
              >
                <img src={logo.src} alt="" aria-hidden width={20} height={20} className="h-5 w-5" />
                <span className="font-mono text-[15px] text-neutral-200 group-hover:text-term">
                  {social.label}
                </span>
                <span className="ml-auto hidden font-mono text-xs text-neutral-600 sm:block">
                  {social.href.replace("https://", "")}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-600 transition-colors group-hover:text-term"
                />
              </a>
            </li>
          );
        })}
      </ul>

      <footer className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {PROFILE.name} — World 01 / World 02</p>
        <p>Built with Next.js, Three.js, and intent.</p>
      </footer>
    </Section>
  );
}
