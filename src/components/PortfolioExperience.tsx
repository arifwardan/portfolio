"use client";

import { useRef, type JSX } from "react";
import noiseOverlay from "@assets/images/noise-overlay.svg";
import { useNarrativeDirector } from "@/hooks/useNarrativeDirector";
import { usePhase } from "@/stores/usePortfolioStore";
import { Navbar } from "@/components/layout/Navbar";
import { BlueScreen } from "@/components/narrative/BlueScreen";
import { GlitchOverlay } from "@/components/narrative/GlitchOverlay";
import { IncidentSentinel } from "@/components/narrative/IncidentSentinel";
import { RebootSequence } from "@/components/narrative/RebootSequence";
import { About } from "@/components/world1/About";
import { Experience } from "@/components/world1/Experience";
import { Hero } from "@/components/world1/Hero";
import { Skills } from "@/components/world1/Skills";
import { Contact } from "@/components/world2/Contact";
import { HackerProjects } from "@/components/world2/HackerProjects";
import { SystemSummary } from "@/components/world2/SystemSummary";
import { SystemsExperiments } from "@/components/world2/SystemsExperiments";
import { Terminal } from "@/components/world2/Terminal";

/**
 * Page shell: mounts the narrative director once, then renders the full
 * journey — World 01, the incident trigger, World 02, and the phase-driven
 * takeover overlays.
 */
export function PortfolioExperience(): JSX.Element {
  const sentinelRef = useRef<HTMLElement | null>(null);
  useNarrativeDirector(sentinelRef);
  const phase = usePhase();
  const hacker = phase === "hacker";

  return (
    <div data-world={hacker ? "02" : "01"} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <IncidentSentinel sentinelRef={sentinelRef} />
        <Terminal />
        <HackerProjects />
        <SystemsExperiments />
        <SystemSummary />
        <Contact />
      </main>

      {phase === "glitch" && <GlitchOverlay />}
      {phase === "bluescreen" && <BlueScreen />}
      {phase === "reboot" && <RebootSequence />}

      {/* Film grain over hacker mode — cheap, static, unobtrusive. */}
      {hacker && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-30 opacity-[0.05]"
          style={{ backgroundImage: `url(${noiseOverlay.src})` }}
        />
      )}
    </div>
  );
}
