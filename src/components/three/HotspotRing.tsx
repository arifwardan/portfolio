"use client";

import { useRef, useState, type JSX } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { cn } from "@/lib/cn";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

interface Hotspot {
  id: string;
  label: string;
  hint: string;
  /** Anchor id to scroll to. Hacker-zone targets route through the incident. */
  target: string;
  angleDeg: number;
  height: number;
}

// Front-hemisphere ring around the normalized model (PRD §6.2 mapping:
// computer→projects, books→experience, terminal→skills, desk→about,
// phone→contact).
const HOTSPOTS: readonly Hotspot[] = [
  {
    id: "projects",
    label: "Projects",
    hint: "Explore Projects",
    target: "hacker-projects",
    angleDeg: -54,
    height: 0.75,
  },
  {
    id: "experience",
    label: "Experience",
    hint: "Work history",
    target: "experience",
    angleDeg: -27,
    height: 1.15,
  },
  {
    id: "skills",
    label: "Skills",
    hint: "Technology ecosystem",
    target: "skills",
    angleDeg: 0,
    height: 0.45,
  },
  {
    id: "about",
    label: "About",
    hint: "The engineer",
    target: "about",
    angleDeg: 27,
    height: 1.15,
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Get in touch",
    target: "contact",
    angleDeg: 54,
    height: 0.75,
  },
];

const RING_RADIUS = 2.9;

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: usePortfolioStore.getState().reducedMotion ? "auto" : "smooth",
  });
}

function Marker({ hotspot, index }: { hotspot: Hotspot; index: number }): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const angle = THREE.MathUtils.degToRad(hotspot.angleDeg);
  const position: [number, number, number] = [
    Math.sin(angle) * RING_RADIUS,
    hotspot.height,
    Math.cos(angle) * RING_RADIUS * 0.92,
  ];

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const pulse = usePortfolioStore.getState().reducedMotion
      ? 0
      : Math.sin(clock.elapsedTime * 2 + index) * 0.12;
    mesh.scale.setScalar((hovered ? 1.5 : 1) + pulse);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
        onClick={(event) => {
          event.stopPropagation();
          scrollToSection(hotspot.target);
        }}
      >
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshBasicMaterial color={hovered ? "#00a651" : "#0a0a0a"} toneMapped={false} />
      </mesh>
      <Html center distanceFactor={7} position={[0, 0.42, 0]} zIndexRange={[30, 0]}>
        <button
          type="button"
          onClick={() => scrollToSection(hotspot.target)}
          className={cn("hotspot-label", hovered && "hotspot-label-active")}
        >
          <span className="hotspot-label-title">[ {hotspot.label} ]</span>
          <span className="hotspot-label-hint">{hotspot.hint} →</span>
        </button>
      </Html>
    </group>
  );
}

export function HotspotRing(): JSX.Element {
  return (
    <group>
      {HOTSPOTS.map((hotspot, index) => (
        <Marker key={hotspot.id} hotspot={hotspot} index={index} />
      ))}
    </group>
  );
}
