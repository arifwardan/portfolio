"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion(): boolean {
  // SSR-safe: the first client render must match the server render, so the
  // initial state is a static default. The live preference is synced in the
  // effect below (after hydration), then kept current via the change listener.
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent): void => {
      setReduced(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => {
      query.removeEventListener("change", onChange);
    };
  }, []);

  return reduced;
}
