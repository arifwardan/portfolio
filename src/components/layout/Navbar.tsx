"use client";

import { useState, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#hacker-projects" },
] as const;

function goTo(href: string): void {
  document.querySelector(href)?.scrollIntoView({
    behavior: usePortfolioStore.getState().reducedMotion ? "auto" : "smooth",
  });
}

/**
 * Fixed navigation, restyled per world (PRD §11). Position stays identical;
 * only the voice changes — sans on paper, mono on void.
 */
export function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const hacker = usePortfolioStore((state) => state.phase === "hacker");

  const goHome = (): void => {
    const { phase, send } = usePortfolioStore.getState();
    if (phase === "hacker") send("RETURN_TO_WORLD");
    window.scrollTo({
      top: 0,
      behavior: usePortfolioStore.getState().reducedMotion ? "auto" : "smooth",
    });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md",
        hacker ? "border-white/10 bg-void/85 font-mono" : "border-ink/10 bg-paper/85",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={goHome}
          aria-label="Back to top"
          className={cn("text-sm font-bold tracking-[0.2em]", hacker ? "text-term" : "text-ink")}
        >
          {hacker ? "ARIF://ROOT" : "[ARIF]"}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => goTo(link.href)}
              className={cn(
                "text-sm transition-colors",
                hacker ? "text-neutral-400 hover:text-term" : "text-ink/70 hover:text-ink",
              )}
            >
              {hacker ? `./${link.label.toLowerCase()}` : link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo("#contact")}
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-colors",
              hacker
                ? "border border-term/60 text-term hover:bg-term hover:text-void"
                : "bg-ink text-paper hover:bg-ink/80",
            )}
          >
            {hacker ? "$ contact" : "Contact"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn("p-2 md:hidden", hacker ? "text-term" : "text-ink")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className={cn(
              "overflow-hidden border-t md:hidden",
              hacker ? "border-white/10 bg-void font-mono" : "border-ink/10 bg-paper",
            )}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {[...LINKS, { label: "Contact", href: "#contact" }].map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    goTo(link.href);
                    setOpen(false);
                  }}
                  className={cn("py-3 text-left text-lg", hacker ? "text-neutral-300" : "text-ink")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
