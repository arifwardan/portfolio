# Asset Manifest — Arif Wardan Interactive Portfolio

Pemetaan setiap file di `assets/` ke kebutuhan PRD, sumber, dan lisensi.
Struktur folder yang sudah ada (`images/`, `logo/`, `videos/`) dipertahankan.

> Catatan: file bertanda PLACEHOLDER harus diganti dengan materi asli
> (foto diri, screenshot project sungguhan) sebelum rilis publik.

## Struktur akhir

```
assets/
├── images/                        # 13 JPG + 2 SVG
├── logo/                          # 23 SVG + 15 SVG (white/)
└── videos/                        # 3 MP4 + 2 poster JPG
```

> Catatan: folder `3D_object/meshy-model.glb` (±24 MB) dihapus dari branch
> ringan ini — hero memakai poster statis, tanpa runtime 3D/WebGL.

## images/ — foto & grafik

| File                     | Kegunaan (ref PRD)                                       | Sumber                         |
| ------------------------ | -------------------------------------------------------- | ------------------------------ |
| `code-dark.jpg`          | Hero/backdrop World 01 (§6.1)                            | Unsplash `photo-1461749280684` |
| `laptop-code.jpg`        | About / workspace (§6.4)                                 | Unsplash `photo-1498050108023` |
| `workspace-desk.jpg`     | About / Experience (§6.4)                                | Unsplash `photo-1497032628192` |
| `vscode-screen.jpg`      | Skills / code terminal (§6.2)                            | Unsplash `photo-1555066931`    |
| `laptop-dark-code.jpg`   | Projects backdrop (§6.4)                                 | Unsplash `photo-1517694712202` |
| `server-room.jpg`        | PLACEHOLDER cover project backend / systems (§10.4)      | Unsplash `photo-1558494949`    |
| `ai-gradient.jpg`        | PLACEHOLDER cover ALTHEA — AI-native OS (§6.4)           | Unsplash `photo-1677442136019` |
| `mobile-mockup.jpg`      | PLACEHOLDER cover SiMahal / app project (§6.4)           | Unsplash `photo-1551650975`    |
| `abstract-3d-light.jpg`  | Tekstur/backdrop World 01 — clean premium (§12)          | Unsplash `photo-1618005182384` |
| `abstract-3d-purple.jpg` | Backdrop transisi / base OG cover                        | Unsplash `photo-1620121692029` |
| `matrix-green.jpg`       | Backdrop World 02 hacker mode (§10)                      | Unsplash `photo-1526374965328` |
| `cyber-lock.jpg`         | Blue Screen / system failure (§8)                        | Unsplash `photo-1550751827`    |
| `og-cover.jpg`           | Social share card 1200×630 (dibuat lokal, base Unsplash) | lokal (Pillow)                 |
| `avatar-placeholder.svg` | PLACEHOLDER foto profil About — ganti foto asli          | lokal                          |
| `noise-overlay.svg`      | Grain overlay CSS (alternatif ringan `grain-loop.mp4`)   | lokal                          |

Semua foto Unsplash: lisensi Unsplash (gratis dipakai komersial, tanpa atribusi wajib).
Unduhan memakai parameter `?q=80&w=1600&auto=format&fit=crop`.

## logo/ — ikon teknologi & sosial (SVG)

Warna brand (untuk World 01) + varian putih di `white/` (untuk World 02 terminal).

| File                | Stack PRD (§6.4 / §16)                              | Sumber                       |
| ------------------- | --------------------------------------------------- | ---------------------------- |
| `go.svg`            | Backend — Golang                                    | Simple Icons (`go`)          |
| `fastapi.svg`       | Backend — FastAPI                                   | Simple Icons (`fastapi`)     |
| `nextdotjs.svg`     | Frontend — Next.js                                  | Simple Icons (`nextdotjs`)   |
| `react.svg`         | Frontend — React                                    | Simple Icons (`react`)       |
| `typescript.svg`    | Frontend — TypeScript                               | Simple Icons (`typescript`)  |
| `nodedotjs.svg`     | Runtime pendukung                                   | Simple Icons (`nodedotjs`)   |
| `python.svg`        | Runtime pendukung                                   | Simple Icons (`python`)      |
| `postgresql.svg`    | Database                                            | Simple Icons (`postgresql`)  |
| `redis.svg`         | Database/cache                                      | Simple Icons (`redis`)       |
| `docker.svg`        | Tools                                               | Simple Icons (`docker`)      |
| `git.svg`           | Tools                                               | Simple Icons (`git`)         |
| `linux.svg`         | Tools                                               | Simple Icons (`linux`)       |
| `tailwindcss.svg`   | Styling (§16)                                       | Simple Icons (`tailwindcss`) |
| `vercel.svg`        | Deployment (§16)                                    | Simple Icons (`vercel`)      |
| `threedotjs.svg`    | 3D (§16)                                            | Simple Icons (`threedotjs`)  |
| `gsap.svg`          | Animasi (§16)                                       | Simple Icons (`gsap`)        |
| `framer.svg`        | Animasi (§16)                                       | Simple Icons (`framer`)      |
| `github.svg`        | Kontak (§6.4 Contact)                               | Simple Icons (`github`)      |
| `gmail.svg`         | Kontak — email                                      | Simple Icons (`gmail`)       |
| `linkedin.svg`      | Kontak — LinkedIn                                   | Wikimedia Commons            |
| `ai-chip.svg`       | AI — LLM/Agents (ikon generik, hindari logo vendor) | lokal                        |
| `arif-monogram.svg` | Brand `[ARIF]` navbar (§11)                         | lokal                        |
| `favicon.svg`       | Favicon browser                                     | lokal                        |

`white/` berisi varian putih: go, fastapi, nextdotjs, react, typescript,
postgresql, redis, docker, git, linux, tailwindcss, vercel, threedotjs,
github, linkedin.

Simple Icons: CC0. Logo brand tetap milik trademark masing-masing —
pemakaian di sini hanya sebagai penanda stack teknologi (wajar untuk portfolio).
LinkedIn via Wikimedia Commons (lisensi file berlaku, atribusi bila diminta).

## videos/ — loop ambient (dibuat lokal, bebas lisensi)

| File               | Kegunaan (ref PRD)                                             | Spesifikasi                                  |
| ------------------ | -------------------------------------------------------------- | -------------------------------------------- |
| `ambient-glow.mp4` | Backdrop hero World 02 / reboot — glow gelap perlahan (§9–§10) | 1280×720, 10 dtk, ~0,5 MB, H.264 + faststart |
| `grain-loop.mp4`   | Overlay grain global (opacity rendah via CSS §13)              | 480×270, 5 dtk loop, ~2,3 MB                 |
| `static-burst.mp4` | Efek momen SYSTEM FAILURE (§7–§8)                              | 480×270, 1 dtk, ~1 MB                        |
| `*-poster.jpg`     | Poster preload lazy-load video                                 | JPG frame tengah                             |

Resolusi overlay sengaja kecil — di-stretch fullscreen via CSS,
standar untuk grain/static (hemat bandwidth, sesuai §15 Performance).
Tidak ada stock footage wajah/orang: PRD tidak membutuhkannya, dan
efek naratif (glitch/reboot) lebih tepat sebagai loop generatif.

Perintah pembuat (ffmpeg static, dapat diulang):

```sh
FF=ffmpeg
$FF -y -f lavfi -i "nullsrc=s=480x270:d=5:r=12" -vf "noise=alls=90:allf=t+u,format=yuv420p" -c:v libx264 -preset veryfast -crf 26 -movflags +faststart assets/videos/grain-loop.mp4
$FF -y -f lavfi -i "gradients=s=1280x720:c0=0x050505:c1=0x0d2818:c2=0x050505:c3=0x0a0f0c:speed=0.06:d=10:r=24" -vf "format=yuv420p,fade=t=in:st=0:d=1.5,fade=t=out:st=8.5:d=1.5" -c:v libx264 -preset veryfast -crf 22 -movflags +faststart assets/videos/ambient-glow.mp4
$FF -y -f lavfi -i "nullsrc=s=480x270:d=1:r=24" -vf "noise=alls=100:allf=t,eq=contrast=2.2:brightness=0.1,format=yuv420p" -c:v libx264 -preset veryfast -crf 26 -movflags +faststart assets/videos/static-burst.mp4
```

## Mengunduh ulang

Unduhan (logo + foto) dapat diulang kapan saja:

```sh
sh assets/download-assets.sh
```

Video generatif + `og-cover.jpg` dibuat ulang dengan perintah di atas
dan skrip Pillow (lihat riwayat sesi) — tidak termasuk file unduhan.
