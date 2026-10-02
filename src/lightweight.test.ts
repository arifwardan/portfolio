import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const FORBIDDEN_DEPS = ["three", "@react-three/fiber", "@react-three/drei", "@types/three"];

function sourceFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx)$/.test(entry) && !/\.test\.(ts|tsx)$/.test(entry) ? [full] : [];
  });
}

/**
 * Lightweight invariant: the app ships no 3D runtime. The 24 MB GLB and the
 * three.js dependency tree were removed so the hero renders a static poster —
 * this guards against reintroducing the WebGL bundle through any entry point.
 */
describe("lightweight (no 3D runtime)", () => {
  it("declares no three.js dependencies", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    for (const dep of FORBIDDEN_DEPS) {
      expect(pkg.dependencies?.[dep]).toBeUndefined();
      expect(pkg.devDependencies?.[dep]).toBeUndefined();
    }
  });

  it("has no three.js or GLB imports in app sources", () => {
    const files = [...sourceFiles(join(root, "src")), ...sourceFiles(join(root, "app"))];
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toMatch(/@react-three\//);
      expect(source).not.toMatch(/from ["']three["']/);
      expect(source).not.toMatch(/\.glb["']/);
    }
  });

  it("ships no GLB binary in assets", () => {
    expect(existsSync(join(root, "assets", "3D_object", "meshy-model.glb"))).toBe(false);
  });

  it("hero poster import resolves to an existing asset file", () => {
    const hero = readFileSync(join(root, "src", "components", "world1", "Hero.tsx"), "utf8");
    const asset = hero.match(/from ["']@assets\/images\/([^"']+)["']/)?.[1];
    expect(asset).toBeDefined();
    expect(existsSync(join(root, "assets", "images", asset ?? ""))).toBe(true);
  });
});
