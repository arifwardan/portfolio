"use client";

import { useMemo, type JSX } from "react";
import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import modelUrl from "@assets/3D_object/meshy-model.glb";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

/** Longest dimension of the model after normalization, in world units. */
export const MODEL_TARGET_SIZE = 3.4;

/**
 * The studio centerpiece. The source GLB is a single unnamed mesh, so the
 * model is normalized by bounding box (scale + center) instead of by node
 * names — the hotspot ring is placed relative to MODEL_TARGET_SIZE.
 */
export function StudioModel(): JSX.Element {
  const { scene } = useGLTF(modelUrl);
  const reducedMotion = usePortfolioStore((state) => state.reducedMotion);

  const object = useMemo(() => {
    const clone = scene.clone();
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = MODEL_TARGET_SIZE / maxDim;
    clone.scale.setScalar(scale);
    clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
    return clone;
  }, [scene]);

  if (reducedMotion) {
    return <primitive object={object} />;
  }
  return (
    <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.4} floatingRange={[-0.08, 0.08]}>
      <primitive object={object} />
    </Float>
  );
}
