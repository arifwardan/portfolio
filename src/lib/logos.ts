import type { StaticImageData } from "next/image";
import aiChip from "@assets/logo/ai-chip.svg";
import docker from "@assets/logo/docker.svg";
import fastapi from "@assets/logo/fastapi.svg";
import framer from "@assets/logo/framer.svg";
import git from "@assets/logo/git.svg";
import github from "@assets/logo/github.svg";
import gmail from "@assets/logo/gmail.svg";
import go from "@assets/logo/go.svg";
import gsap from "@assets/logo/gsap.svg";
import linkedin from "@assets/logo/linkedin.svg";
import linux from "@assets/logo/linux.svg";
import nextdotjs from "@assets/logo/nextdotjs.svg";
import nodedotjs from "@assets/logo/nodedotjs.svg";
import postgresql from "@assets/logo/postgresql.svg";
import python from "@assets/logo/python.svg";
import react from "@assets/logo/react.svg";
import redis from "@assets/logo/redis.svg";
import tailwindcss from "@assets/logo/tailwindcss.svg";
import threedotjs from "@assets/logo/threedotjs.svg";
import typescript from "@assets/logo/typescript.svg";
import vercel from "@assets/logo/vercel.svg";
import dockerWhite from "@assets/logo/white/docker-white.svg";
import fastapiWhite from "@assets/logo/white/fastapi-white.svg";
import gitWhite from "@assets/logo/white/git-white.svg";
import githubWhite from "@assets/logo/white/github-white.svg";
import goWhite from "@assets/logo/white/go-white.svg";
import linkedinWhite from "@assets/logo/white/linkedin-white.svg";
import linuxWhite from "@assets/logo/white/linux-white.svg";
import nextdotjsWhite from "@assets/logo/white/nextdotjs-white.svg";
import postgresqlWhite from "@assets/logo/white/postgresql-white.svg";
import reactWhite from "@assets/logo/white/react-white.svg";
import redisWhite from "@assets/logo/white/redis-white.svg";
import tailwindcssWhite from "@assets/logo/white/tailwindcss-white.svg";
import threedotjsWhite from "@assets/logo/white/threedotjs-white.svg";
import typescriptWhite from "@assets/logo/white/typescript-white.svg";
import vercelWhite from "@assets/logo/white/vercel-white.svg";

export type LogoKey =
  | "aiChip"
  | "docker"
  | "fastapi"
  | "framer"
  | "git"
  | "github"
  | "gmail"
  | "go"
  | "gsap"
  | "linkedin"
  | "linux"
  | "nextdotjs"
  | "nodedotjs"
  | "postgresql"
  | "python"
  | "react"
  | "redis"
  | "tailwindcss"
  | "threedotjs"
  | "typescript"
  | "vercel";

/** Brand-color marks for World 01 (light surfaces). */
export const LOGOS: Record<LogoKey, StaticImageData> = {
  aiChip,
  docker,
  fastapi,
  framer,
  git,
  github,
  gmail,
  go,
  gsap,
  linkedin,
  linux,
  nextdotjs,
  nodedotjs,
  postgresql,
  python,
  react,
  redis,
  tailwindcss,
  threedotjs,
  typescript,
  vercel,
};

/** White marks for World 02 (terminal surfaces). Absent = reuse brand mark. */
export const LOGOS_WHITE: Partial<Record<LogoKey, StaticImageData>> = {
  docker: dockerWhite,
  fastapi: fastapiWhite,
  git: gitWhite,
  github: githubWhite,
  go: goWhite,
  linkedin: linkedinWhite,
  linux: linuxWhite,
  nextdotjs: nextdotjsWhite,
  postgresql: postgresqlWhite,
  react: reactWhite,
  redis: redisWhite,
  tailwindcss: tailwindcssWhite,
  threedotjs: threedotjsWhite,
  typescript: typescriptWhite,
  vercel: vercelWhite,
};

export function logoFor(key: LogoKey, dark: boolean): StaticImageData {
  if (dark) return LOGOS_WHITE[key] ?? LOGOS[key];
  return LOGOS[key];
}
