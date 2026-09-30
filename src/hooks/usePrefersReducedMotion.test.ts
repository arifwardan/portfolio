import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  resolve(dirname(fileURLToPath(import.meta.url)), "usePrefersReducedMotion.ts"),
  "utf8",
);

/**
 * SSR invariant: the first client render must produce the same HTML as the
 * server render. Reading `window.matchMedia` during render (e.g. in a
 * `useState` initializer) breaks that for users with `prefers-reduced-motion`
 * enabled and triggers a hydration mismatch. The live preference must only
 * be read inside `useEffect`.
 */
describe("usePrefersReducedMotion SSR safety", () => {
  it("initializes state to a static default without reading window", () => {
    const stateInit = source.match(/useState<boolean>\(([\s\S]*?)\)\s*;/);
    expect(stateInit).not.toBeNull();
    expect(stateInit?.[1]).not.toMatch(/window|matchMedia|typeof/);
  });

  it("syncs the live preference inside an effect", () => {
    expect(source).toMatch(/useEffect/);
    expect(source).toMatch(/window\.matchMedia/);
    const effectIndex = source.indexOf("useEffect");
    const matchMediaIndex = source.indexOf("window.matchMedia");
    expect(matchMediaIndex).toBeGreaterThan(effectIndex);
  });
});
