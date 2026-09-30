# PRD — Arif Wardan 3D Interactive Portfolio

> **"A digital space that represents the engineer behind the software."**

---

## 1. Product Overview

|                  |                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product Name** | Arif Wardan — 3D Interactive Portfolio                                                                                                                                                                      |
| **Product Type** | Personal Interactive 3D Portfolio Website                                                                                                                                                                   |
| **Platform**     | Web                                                                                                                                                                                                         |
| **Primary Goal** | Menampilkan personal branding, kemampuan teknis, pengalaman, dan project melalui pengalaman visual 3D yang memorable — dengan narrative twist yang menunjukkan _problem solving_ tanpa perlu menuliskannya. |

### Product Concept

Website portfolio yang menggabungkan **personal website + interactive 3D environment + narrative experience**.

Pengunjung tidak hanya membaca CV, tetapi seolah-olah **memasuki sebuah digital space milik Arif**, lalu pada titik tertentu mengalami **"system incident"** yang mengubah seluruh pengalaman menjadi **hacker mode** — memperlihatkan sisi engineer di balik layar.

**Core Narrative:**

> _The 3D should make people remember you. The content should make them understand you._

---

## 2. Goals

### Primary Goals

1. Membuat portfolio yang berbeda dari portfolio developer biasa.
2. Menampilkan kemampuan sebagai **Software Engineer / Backend Engineer**.
3. Menunjukkan project nyata, bukan hanya daftar teknologi.
4. Memberikan pengalaman visual memorable melalui 3D **dan narrative transformation**.
5. Menyampaikan _problem solving skill_ melalui **experience**, bukan tulisan.
6. Struktur informasi tetap mudah dipahami recruiter/client.
7. Website tetap performant dan responsive.

### Secondary Goals

- Personal branding.
- Landing page profesional untuk freelance/job opportunity.
- Showcase kemampuan engineering + AI + web development.
- Base untuk eksperimen WebGL/3D.

---

## 3. Target Audience

| Segment                                   | Yang Mereka Cari                                                      |
| ----------------------------------------- | --------------------------------------------------------------------- |
| **Recruiter / Hiring Manager** (Primary)  | Siapa kamu, pengalaman, skill, project, kontak                        |
| **Potential Client** (Secondary)          | Apa yang bisa dibangun, teknologi, project, kontak                    |
| **Developer / Tech Community** (Tertiary) | Architecture, technologies, GitHub, engineering projects, experiments |

---

## 4. Core Experience — The Narrative

Website memiliki konsep **digital world** dengan **dua act besar**.

```
┌──────────────────────┐
│  WORLD 01 — THE      │   "The engineer people see."
│  PORTFOLIO           │   Minimal • Premium • 3D • Elegant
└──────────┬───────────┘
           ↓
       [ GLITCH ]
           ↓
┌──────────────────────┐
│  WORLD 02 — THE      │   "The engineer behind the work."
│  SYSTEM              │   Dark • Monospace • Terminal • Raw
└──────────────────────┘
```

### Full User Journey

```
                    ┌──────────────┐
                    │   ARRIVAL    │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │ 3D PORTFOLIO │  ← ACT 1
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │   ABOUT      │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │  EXPERIENCE  │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │   GLITCH     │  ← ACT 2
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │ BLUE SCREEN  │  ← ACT 3
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │    REBOOT    │  ← ACT 4
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │ HACKER MODE  │  ← ACT 5
                    └──────┬───────┘
                           ↓
              ┌────────────┼────────────┐
              ↓            ↓            ↓
          PROJECTS      SYSTEMS     EXPERIMENTS
              │            │            │
              └────────────┼────────────┘
                           ↓
                    ┌──────────────┐
                    │   CONTACT    │
                    └──────────────┘
                           ↓
                    [ Return to World 01 ]
```

---

## 5. Information Architecture

```
/
├── Home                    → Hero + 3D Scene
│
├── About                   → Profile, Philosophy, Background
│
├── Experience              → Work History
│
├── Skills                  → Technology Ecosystem
│
├── Projects
│   ├── ALTHEA
│   ├── SiMahal
│   ├── Other Projects
│   └── Experiments
│
├── Playground              → Technical Experiments
│
└── Contact                 → Email, GitHub, LinkedIn
```

**Section trigger untuk GLITCH:** setelah user menyelesaikan **Experience**, sebelum masuk **Projects**.

---

## 6. ACT 1 — The Professional (World 01)

### 6.1 Homepage / Hero

Menampilkan:

```
ARIF WARDAN

Software Engineer

Building software,
systems and ideas.

[ Explore Portfolio ]   [ View Projects ]
```

Secondary info:

```
Backend Engineer
Golang • FastAPI • Next.js
Indonesia
```

### 6.2 3D Environment

Concept: **workspace / futuristic digital studio**.

```
                  PROJECTS
                     ◇
                     │
       EXPERIENCE ───┼─── SKILLS
                     │
                   DESK
                     │
                  PROFILE
                     │
                  CONTACT
```

**Object → Function mapping:**

| Object                 | Destination |
| ---------------------- | ----------- |
| Computer               | Projects    |
| Books / documents      | Experience  |
| Code terminal          | Skills      |
| Desk / personal object | About       |
| Phone                  | Contact     |

### 6.3 Interaction (World 01)

- Rotate camera, zoom
- Click & hover object
- Navigate between sections
- Open project detail
- Switch between 3D mode ↔ normal navigation

**Hover behavior:**

```
[ PROJECTS ]
Explore Projects →

→ subtle glow
→ floating label
→ light animation
```

### 6.4 Sections (World 01)

**Projects** — setiap project memiliki:

```
Project Name
Description
Role
Technologies
Architecture
Status
Year
Links
```

Contoh **ALTHEA**:

```
AI-native software company operating system.

Role       Founder / Engineer
Stack      FastAPI, Golang, Next.js, PostgreSQL, Redis
Status     Building
```

**Experience** — timeline sederhana, fokus pada _impact_, bukan job title:

```
2023 — Present
Backend / Software Engineering

2023 — 2024
PT Nizom Berkah Informasi

2022 — 2023
PT Integral Data Prima
```

Contoh isi:

```
Built backend systems
Designed APIs
Worked with Golang
Developed multi-tenant applications
```

**Skills** — disajikan sebagai **technology ecosystem**, bukan progress bar:

```
BACKEND      Golang • FastAPI • REST API • JWT
FRONTEND     Next.js • React • TypeScript
DATABASE     PostgreSQL • Redis
TOOLS        Docker • Git • Linux
AI           LLM APIs • AI Agents • AI-native Systems
```

**About:**

```
Arif Wardan

Software Engineer
Builder
Explorer

"The best way to predict the future is to build it."
```

---

## 7. ACT 2 — Something Is Wrong (The Glitch)

Transisi ini harus **membangun tension**, bukan langsung meledak.

### Progressive Buildup

```
Scroll 1  →  Teks sedikit bergeser
Scroll 2  →  Cursor delay
Scroll 3  →  3D environment freeze sepersekian detik
Scroll 4  →  [GLITCH]
```

### Glitch Symptoms

- Screen berkedip
- Typography rusak
- Beberapa elemen UI bergeser
- Rendering artifact pada 3D object
- Suara kecil: `beep`

Kemudian muncul:

```
SYSTEM FAILURE
```

---

## 8. ACT 3 — Blue Screen

Seluruh viewport berubah menjadi **fictional OS error** (bukan BSOD Windows literal, agar tetap on-brand).

```
:(

YOUR SYSTEM RAN INTO A PROBLEM
AND NEEDS TO RESTART.

ERROR CODE:
PORTFOLIO_EXCEPTION

Collecting diagnostic information...

████████████████████████ 100%

SYSTEM WILL RESTART

Restarting in 3...
2...
1...
```

---

## 9. ACT 4 — Reboot

Screen hitam. Cursor muncul. Lalu:

```
BOOTING...

INITIALIZING CORE
██████████████ 100%

LOADING ENVIRONMENT
██████████████ 100%

RESTORING SYSTEM
██████████████ 100%

> SYSTEM RESTORED

> BUT SOMETHING CHANGED
```

**Glitch.**

---

## 10. ACT 5 — Hacker Mode (World 02)

### 10.1 Visual Identity

```
BACKGROUND   #050505
TEXT         monospace
ACCENT       terminal green / amber
FEEL         raw • technical • data-driven
```

### 10.2 Interface Style

```
┌───────────────────────────────────────────┐
│ ARIF.WARDAN // SYSTEM                     │
├───────────────────────────────────────────┤
│                                           │
│ $ whoami                                  │
│                                           │
│ arif                                      │
│ software_engineer                         │
│                                           │
│ $ ls                                      │
│                                           │
│ projects/                                 │
│ systems/                                  │
│ experiments/                              │
│ failures/                                 │
│                                           │
└───────────────────────────────────────────┘
```

> **User tidak perlu mengetik.** Website yang menjalankan semuanya secara otomatis.

### 10.3 The Core Narrative Moment

Terminal menampilkan analisis "failure" — bukan sebagai kegagalan, tetapi sebagai _problem to solve_:

```
> ANALYZING FAILURE...

Issue detected.
Unknown condition.
Searching possible solutions...

[01] Ignore
[02] Restart
[03] Investigate

Selected: [03]

Analyzing...

ROOT CAUSE FOUND.

SYSTEM RESTORED.
```

**Ini adalah momen kunci:** user **merasakan sendiri** bahwa karakter portfolio ini adalah seseorang yang ketika sistem rusak:

> **investigate → understand → solve → restore**

Tanpa pernah menulis: _"I am good at problem solving."_

### 10.4 Projects di Hacker Mode (Evidence)

Project ditampilkan sebagai output terminal, bukan card:

```
$ cat projects/althea

ALTHEA

AI-native software company
operating system.

STATUS:
BUILDING

ARCHITECTURE:
FastAPI
Golang
Next.js
PostgreSQL
Redis
```

```
$ cat projects/experience

PROBLEMS SOLVED:

Multi-tenant architecture
Backend systems
API design
Complex application workflows
AI orchestration
```

Perhatikan: **bukan skill list — tetapi problems solved.**

### 10.5 Closing Terminal

```
$ system.summary

projects        07
systems         12
experiments     09
failures       143

status: BUILDING

> THE BEST WAY TO PREDICT THE FUTURE
> IS TO BUILD IT.
```

Lalu **kembali perlahan ke World 01**.

> Website seolah berkata: _"You didn't just visit my portfolio. You experienced how I approach a problem."_

---

## 11. Navigation

### Desktop

```
[ARIF]

About
Experience
Projects
Playground

                [Contact]
```

Navigasi tetap tersedia di kedua world. Di World 02, style nav berubah menjadi terminal-style tapi posisinya konsisten.

### Mobile

```
[ARIF]                     [☰]
```

---

## 12. Visual Direction

### Style Keywords

**Premium + Technical + Futuristic + Minimal**

Referensi feel: Linear, Apple, Cursor, high-end creative developer portfolios.

**Hindari:**

- Cyberpunk berlebihan
- Neon overload
- Glassmorphism
- "AI generated website" look
- Dashboard aesthetic

### Visual Principle

```
Minimal UI
      +
High quality 3D
      +
Subtle animation
      +
Strong typography
```

### Two-World Color System

|            | World 01        | World 02               |
| ---------- | --------------- | ---------------------- |
| Mood       | Clean, elegant  | Raw, technical         |
| Background | Light / neutral | `#050505`              |
| Text       | Sans-serif      | Monospace              |
| Accent     | Subtle          | Terminal green / amber |
| 3D         | Present, focal  | Reduced, glitchy       |

---

## 13. Animation System

### Initial Load (World 01)

```
Black screen
     ↓
Environment appears
     ↓
Camera slowly moves
     ↓
Arif appears
     ↓
"Explore"
```

### Section Transition

```
User clicks computer
       ↓
Camera moves toward computer
       ↓
Screen becomes full screen
       ↓
Projects UI appears
```

### Hover

```
Object
  ↓
Subtle movement + Label + Light
```

### Glitch → Blue Screen → Reboot → Hacker Mode

- **Purposeful**, bukan random effect.
- Timing dibangun perlahan (buildup), bukan instan.
- Glitch intensity meningkat secara progresif.
- Transisi reboot harus terasa "berat" dan meyakinkan.

**Semua animation harus punya alasan.** Bukan sekadar efek.

---

## 14. Responsive Strategy

| Device      | Experience                                                                               |
| ----------- | ---------------------------------------------------------------------------------------- |
| **Desktop** | Full interactive 3D + semua narrative acts                                               |
| **Tablet**  | Reduced 3D complexity, narrative tetap utuh                                              |
| **Mobile**  | Simplified 3D / guided experience; narrative glitch tetap dipertahankan (disederhanakan) |

**Mobile priority:** content accessibility, bukan memaksakan 3D berat.

```
Profile → Projects → Experience → Skills → Contact
```

---

## 15. Performance Requirements

- Fast initial load
- Lazy-load 3D assets
- Optimized GLTF/GLB
- Compressed textures
- Code splitting
- Progressive loading
- Reduced animation on low-end devices

**WebGL fallback:**

```
3D Experience unavailable

→ Continue to Portfolio
```

Website tetap usable tanpa 3D — dan narrative glitch tetap berjalan sebagai transisi CSS-based.

---

## 16. Tech Stack

```
Frontend     Next.js • TypeScript • Tailwind CSS
3D           Three.js • React Three Fiber • Drei
Animation    GSAP / Framer Motion
State        Zustand
Deployment   Vercel
Assets       GLB / GLTF
```

> **Backend tidak wajib untuk MVP.** Portfolio menggunakan static data terlebih dahulu.

---

## 17. MVP Scope

### Phase 1 — MVP

**1. Landing** — Hero, 3D scene, navigation
**2. About** — Profile, philosophy
**3. Skills** — Technology ecosystem
**4. Experience** — Timeline
**5. Projects** — List + detail
**6. Contact** — Social links, email
**7. Responsive** — Desktop + mobile fallback
**8. Narrative Trigger** — Glitch → Blue Screen → Reboot → Hacker Mode (basic)

### Phase 2 — After MVP Stable

```
Interactive 3D navigation
↓
Advanced camera transitions
↓
3D project showcase
↓
Playground
↓
Interactive terminal (ketik manual)
↓
Easter eggs
↓
Sound design
```

---

## 18. Non-Goals

Untuk versi pertama **tidak perlu:**

- CMS
- Authentication
- Database
- Admin panel
- Blog system
- Complex backend
- Multiplayer 3D
- Massive open world
- Overly complex game mechanics

> Portfolio harus tetap **website**, bukan game.

---

## 19. Success Metrics

### Engagement

- Visitor membuka Projects
- Visitor membuka Experience
- Time on site

### Conversion

- GitHub clicks
- LinkedIn clicks
- Email/contact clicks
- Project detail views

### Technical

- Good Lighthouse performance
- Low initial bundle
- Responsive
- 3D fallback bekerja
- Narrative transition tidak menyebabkan crash

---

## 20. Product Principles

> **The 3D should make people remember you.**
> **The content should make them understand you.**

> **3D = memorable experience.**
> **Content = professional credibility.**
> **Interaction = storytelling.**
> **Glitch = personality.**

**Satu hal yang tidak boleh dilakukan:**

Jangan pernah menulis _"Problem Solving"_ di Skills.

Biarkan **experience** yang menyampaikannya melalui **SYSTEM INCIDENT** narrative.

User tidak membaca bahwa Arif adalah problem solver.
User **mengalami** bagaimana Arif menghadapi sistem yang rusak:

> investigate → understand → solve → restore.

Itulah **signature moment** dari portfolio ini.

---

## 21. Signature Moment

> _"You didn't just visit my portfolio. You experienced how I approach a problem."_

Portfolio ini bukan sekadar website berisi CV dan card project.

Portfolio ini adalah **interactive 3D personal experience** yang membawa user dari:

**The engineer people see** → _system failure_ → **The engineer behind the work**.
