# Arif Wardan — 3D Interactive Portfolio

> “A digital space that represents the engineer behind the software.”

Personal portfolio as a two-act narrative: visitors arrive in **World 01**
(a minimal, premium 3D portfolio), scroll through About → Experience →
Skills, then the system **fails** — glitch, blue screen, reboot — and wakes
up in **World 02**, a terminal-native hacker mode where the incident
investigation _shows_ the problem-solving instead of claiming it.

Full product spec: [`PRD.md`](./PRD.md).

## Stack

| Layer     | Choice                                                      |
| --------- | ----------------------------------------------------------- |
| Framework | Next.js 15 (App Router) + React 19 + TypeScript (strict)    |
| Styling   | Tailwind CSS v4 (CSS-first `@theme` tokens)                 |
| 3D        | Three.js + React Three Fiber + drei (lazy, `ssr: false`)    |
| Motion    | Framer Motion (restrained) + CSS keyframes                  |
| State     | Zustand — narrative phase machine                           |
| Icons     | lucide-react + local Simple Icons SVGs                      |
| Tests     | Vitest (pure-logic suites for narrative, content, terminal) |
| Deploy    | Vercel                                                      |

## Quickstart

Prerequisites: **Node.js 22** (`nvm use`, see [`.nvmrc`](./.nvmrc)).

```sh
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

Production check:

```sh
npm run verify   # typecheck + lint + test + build
npm run start    # serves the production build on :3000
```

## Scripts

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Development server with hot reload           |
| `npm run build`     | Production build (fails on type/lint errors) |
| `npm run start`     | Serve the production build                   |
| `npm run typecheck` | `tsc --noEmit`                               |
| `npm run lint`      | ESLint (Next core-web-vitals + TypeScript)   |
| `npm run format`    | Prettier check                               |
| `npm run test`      | Vitest run (focused unit suites)             |
| `npm run verify`    | Full gate: typecheck → lint → test → build   |

## Project structure

```
app/                    App Router shell (layout, page, loading, 404, icon)
src/
  lib/                  Pure modules: narrative machine, content, terminal
                        script, covers, logos, sound, webgl probe
  lib/*.test.ts         Vitest suites (run with npm run test)
  stores/               Zustand portfolio store (phase + environment)
  hooks/                Narrative director, terminal player, reduced motion
  components/
    three/              Lazy 3D scene: model, hotspot ring, artifact rig,
                        error boundary + WebGL fallback
    world1/             Hero, About, Experience, Skills
    narrative/          Incident sentinel, glitch overlay, blue screen, reboot
    world2/             Terminal, projects, systems, summary, contact
    layout/ ui/         Navbar, section shell
assets/                 Source media (see assets/ASSETS.md)
  3D_object/            meshy-model.glb (hero studio model)
  images/ logo/ videos/ Downloaded + generated supporting media
```

## How the narrative works

`src/lib/narrative.ts` owns the phase machine —
`world1 → glitch → bluescreen → reboot → hacker` (plus `hacker → world1`
return and `SKIP_INCIDENT` fast paths). `useNarrativeDirector` observes the
sentinel band after Skills, drives the glitch buildup, locks scroll during
takeovers, and hands off to hacker mode after the reboot. The terminal then
auto-plays `src/lib/terminal-script.ts`.

Key behaviors worth knowing:

- **Scroll-gated incident** — reaching the sentinel starts the show; every
  takeover phase offers a visible _Skip incident_ escape hatch.
- **Reduced motion** — OS `prefers-reduced-motion` shortens the buildup,
  disables camera auto-rotate and collapses terminal delays.
- **No-WebGL path** — `SceneFallback` keeps the portfolio fully usable, and
  the incident still runs as a CSS-based sequence (§15).
- **Performance** — the 3D scene is dynamically imported, the canvas freezes
  its frame loop off-phase, and videos/images lazy-load.

## Before launch (owner TODOs)

- [ ] `src/lib/content.ts` → `SOCIALS`: replace with real GitHub / LinkedIn /
      email. Same for `SITE_URL` in `app/layout.tsx`.
- [ ] `About` portrait: replace `assets/images/avatar-placeholder.svg` with a
      real photo.
- [ ] Project covers (`ai-gradient.jpg`, `mobile-mockup.jpg`) are stand-ins —
      swap in real screenshots; confirm the SiMahal copy.
- [ ] `assets/3D_object/meshy-model.glb` is 24 MB single-mesh: run a decimation
      pass (e.g. `gltf-transform optimize`) and re-verify hotspots.
- [ ] Point the production domain at Vercel and re-check OG unfurls.

## License

All rights reserved — portfolio source of Arif Wardan. Third-party media
retains its original license; see [`assets/ASSETS.md`](./assets/ASSETS.md).
# portfolio
