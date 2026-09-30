"use client";

import { useEffect, useRef, type RefObject } from "react";
import { TIMING } from "@/lib/narrative";
import { blip, unlockAudio } from "@/lib/sound";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Narrative director: owns reduced-motion sync, the incident trigger,
 * glitch progression, takeover scroll-locking and the post-boot handoff.
 * Mounted once in the page shell.
 */
export function useNarrativeDirector(sentinelRef: RefObject<HTMLElement | null>): void {
  const reducedMotion = usePrefersReducedMotion();
  const firedRef = useRef(false);

  // Audio unlock on first interaction (sound effects stay silent until then).
  useEffect(() => {
    const unlock = (): void => {
      unlockAudio();
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
    };
  }, []);

  useEffect(() => {
    usePortfolioStore.getState().setReducedMotion(reducedMotion);
  }, [reducedMotion]);

  // Incident trigger: sentinel scrolls into view after Experience.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || firedRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || firedRef.current) return;
        const { phase, send } = usePortfolioStore.getState();
        if (phase !== "world1") return;
        firedRef.current = true;
        send("SENTINEL_REACHED");
      },
      { threshold: 0.35 },
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [sentinelRef]);

  // Glitch progression: raise distortion, hold, then crash.
  // Guards re-check the live phase so a mid-build SKIP can't be overridden.
  useEffect(() => {
    let raf = 0;
    let holdTimer = 0;
    let cancelled = false;
    const unsubscribe = usePortfolioStore.subscribe((state, previous) => {
      if (state.phase !== "glitch" || previous.phase === "glitch") return;
      const store = usePortfolioStore.getState();
      const buildMs = store.reducedMotion ? 500 : TIMING.glitchBuildMs;
      const holdMs = store.reducedMotion ? 200 : TIMING.glitchHoldMs;
      const startedAt = performance.now();
      const tick = (now: number): void => {
        if (cancelled) return;
        if (usePortfolioStore.getState().phase !== "glitch") return;
        const progress = Math.min(1, (now - startedAt) / buildMs);
        usePortfolioStore.getState().setGlitchLevel(progress);
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
          return;
        }
        blip(660, 90);
        holdTimer = window.setTimeout(() => {
          if (cancelled) return;
          if (usePortfolioStore.getState().phase !== "glitch") return;
          blip(220, 220);
          usePortfolioStore.getState().send("GLITCH_COMPLETE");
        }, holdMs);
      };
      raf = requestAnimationFrame(tick);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(holdTimer);
      unsubscribe();
    };
  }, []);

  // Takeover phases lock page scroll; post-boot scrolls into hacker mode.
  useEffect(
    () =>
      usePortfolioStore.subscribe((state, previous) => {
        if (state.phase === previous.phase) return;
        const takeover = state.phase === "bluescreen" || state.phase === "reboot";
        document.documentElement.style.overflow = takeover ? "hidden" : "";
        if (state.phase !== "hacker" || previous.phase === "hacker") return;
        window.setTimeout(() => {
          document.getElementById("hacker")?.scrollIntoView({
            behavior: state.reducedMotion ? "auto" : "smooth",
          });
        }, TIMING.postBootScrollDelayMs);
      }),
    [],
  );
}
