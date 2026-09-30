#!/bin/sh
# Unduh ulang asset pihak ketiga (logo + foto). Idempoten: aman dijalankan ulang.
# Video generatif & file lokal lain TIDAK termasuk — lihat assets/ASSETS.md.
set -eu
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

echo "== logos (Simple Icons) =="
for slug in go fastapi nextdotjs react typescript nodedotjs python postgresql redis docker git linux tailwindcss vercel threedotjs gsap framer github gmail; do
  curl -sSL --max-time 30 -o "$ROOT/logo/${slug}.svg" "https://cdn.simpleicons.org/${slug}"
  echo "  $slug.svg"
done
mkdir -p "$ROOT/logo/white"
for slug in go fastapi nextdotjs react typescript postgresql redis docker git linux tailwindcss vercel threedotjs github; do
  curl -sSL --max-time 30 -o "$ROOT/logo/white/${slug}-white.svg" "https://cdn.simpleicons.org/${slug}/white"
  echo "  white/$slug-white.svg"
done
# linkedin-white.svg dibuat lokal (tidak di-cover CDN) — jangan ditimpa.

echo "== logos (Wikimedia) =="
curl -sSL --max-time 30 -o "$ROOT/logo/linkedin.svg" "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg"
echo "  linkedin.svg"

echo "== images (Unsplash, w=1600 q=80) =="
for pair in \
  "code-dark:photo-1461749280684-dccba630e2f6" \
  "laptop-code:photo-1498050108023-c5249f4df085" \
  "server-room:photo-1558494949-ef010cbdcc31" \
  "workspace-desk:photo-1497032628192-86f99bcd76bc" \
  "cyber-lock:photo-1550751827-4bd374c3f58b" \
  "matrix-green:photo-1526374965328-7f61d4dc18c5" \
  "vscode-screen:photo-1555066931-4365d14bab8c" \
  "laptop-dark-code:photo-1517694712202-14dd9538aa97" \
  "abstract-3d-light:photo-1618005182384-a83a8bd57fbe" \
  "abstract-3d-purple:photo-1620121692029-d088224ddc74" \
  "ai-gradient:photo-1677442136019-21780ecad995" \
  "mobile-mockup:photo-1551650975-87deedd944c3" \
  ; do
  name="${pair%%:*}"; id="${pair##*:}"
  curl -sSL --max-time 60 -o "$ROOT/images/${name}.jpg" "https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop"
  echo "  $name.jpg"
done

echo "DONE."
