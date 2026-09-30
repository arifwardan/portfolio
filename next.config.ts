import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Fail builds on type / lint errors — no silent drift.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
  // Emit large binaries (model, video) as hashed static assets so `assets/`
  // stays the single source of truth. (Webpack pipeline; if dev ever moves
  // to --turbopack, add the matching `experimental.turbo.rules` entry.)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|mp4|webm)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
