"use client";

import { useRef, type JSX, type ReactNode } from "react";
import type * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

/**
 * Applies scripted render artifacts to the studio group while the glitch
 * buildup runs: positional jitter, micro-roll and slice flicker.
 * Idle (and cheap) in every other phase.
 */
export function ArtifactRig({ children }: { children: ReactNode }): JSX.Element {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;
    const { glitchLevel, phase } = usePortfolioStore.getState();
    if (phase !== "glitch" || glitchLevel <= 0.01) {
      group.position.set(0, 0, 0);
      group.rotation.set(0, 0, 0);
      group.visible = true;
      return;
    }
    const jitter = 0.12 * glitchLevel;
    group.position.set((Math.random() - 0.5) * jitter, (Math.random() - 0.5) * jitter, 0);
    group.rotation.set(0, 0, (Math.random() - 0.5) * 0.03 * glitchLevel);
    group.visible = glitchLevel < 0.85 || Math.random() > 0.12;
  });

  return <group ref={groupRef}>{children}</group>;
}
