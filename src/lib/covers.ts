import type { StaticImageData } from "next/image";
import about from "@assets/images/workspace-desk.jpg";
import althea from "@assets/images/ai-gradient.jpg";
import hacker from "@assets/images/matrix-green.jpg";
import simahal from "@assets/images/mobile-mockup.jpg";
import skills from "@assets/images/vscode-screen.jpg";
import systems from "@assets/images/server-room.jpg";
import type { CoverKey } from "./content";

/** Symbolic cover keys → optimized static images. */
export const COVERS: Record<CoverKey, StaticImageData> = {
  about,
  althea,
  hacker,
  simahal,
  skills,
  systems,
};
