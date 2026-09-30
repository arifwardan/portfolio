import type { JSX, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  tone?: "paper" | "void";
  children: ReactNode;
  className?: string;
}

/** Shared section shell: index numeral, display title, hairline, content. */
export function Section({
  id,
  index,
  title,
  tone = "paper",
  children,
  className,
}: SectionProps): JSX.Element {
  const dark = tone === "void";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16",
        dark ? "bg-void text-neutral-200" : "bg-paper text-ink",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="flex items-baseline gap-5">
          <span className={cn("font-mono text-sm", dark ? "text-term" : "text-ink/50")}>
            {index}
          </span>
          <h2
            className={cn(
              "font-display text-3xl font-bold tracking-tight lg:text-4xl",
              dark && "font-mono font-medium",
            )}
          >
            {dark ? `$ ${title}` : title}
          </h2>
        </div>
        <hr className={cn("mt-6 mb-12", dark ? "border-white/10" : "border-ink/15")} />
        {children}
      </div>
    </section>
  );
}
