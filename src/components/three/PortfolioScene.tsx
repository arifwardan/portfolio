"use client";

import { Suspense, type JSX } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls, useProgress } from "@react-three/drei";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { ArtifactRig } from "./ArtifactRig";
import { HotspotRing } from "./HotspotRing";
import { StudioModel } from "./StudioModel";

function ModelLoader(): JSX.Element {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 font-mono text-xs tracking-widest text-ink/60 uppercase">
        <span>Loading 3D environment</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </Html>
  );
}

/**
 * Lazy-loaded hero scene (dynamic import, ssr: false).
 * Freezes its frame loop once the incident takes over — first the
 * scripted glitch artifacts, then a full stop to save GPU off-screen.
 */
export function PortfolioScene(): JSX.Element {
  const interactive = usePortfolioStore((state) => state.phase === "world1");
  const autoRotate = usePortfolioStore((state) => !state.reducedMotion && state.phase === "world1");

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [4.6, 2.6, 5.4], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      frameloop={interactive ? "always" : "never"}
    >
      <color attach="background" args={["#f4f4f2"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} />
      <directionalLight position={[-5, 3, -4]} intensity={0.45} color="#dfe8ff" />
      <Suspense fallback={<ModelLoader />}>
        <ArtifactRig>
          <StudioModel />
          <HotspotRing />
        </ArtifactRig>
        <ContactShadows
          position={[0, -1.8, 0]}
          scale={12}
          blur={2.6}
          opacity={0.42}
          far={4}
          color="#0a0a0a"
        />
      </Suspense>
      <OrbitControls
        makeDefault
        target={[0, 0.35, 0]}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={3.5}
        maxDistance={10}
        minPolarAngle={0.65}
        maxPolarAngle={1.45}
        autoRotate={autoRotate}
        autoRotateSpeed={0.7}
      />
    </Canvas>
  );
}
