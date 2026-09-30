"use client";

import { Component, type ReactNode, type JSX } from "react";

export function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/** PRD §15 fallback: the portfolio stays usable without WebGL. */
export function SceneFallback(): JSX.Element {
  return (
    <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 border border-ink/15 bg-paper px-6 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-ink/60 uppercase">
        3D Experience unavailable
      </p>
      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="border border-ink bg-ink px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:bg-transparent hover:text-ink"
      >
        Continue to Portfolio
      </button>
    </div>
  );
}

export function CanvasSkeleton(): JSX.Element {
  return (
    <div className="flex h-full min-h-[320px] animate-pulse flex-col items-center justify-center gap-3 border border-ink/15 bg-paper">
      <span className="font-mono text-xs tracking-[0.2em] text-ink/50 uppercase">
        Preparing 3D environment
      </span>
    </div>
  );
}

interface BoundaryProps {
  children: ReactNode;
}

interface BoundaryState {
  failed: boolean;
}

/** Catches Canvas/WebGL runtime failures and degrades to the fallback. */
export class SceneErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  render(): ReactNode {
    if (this.state.failed) return <SceneFallback />;
    return this.props.children;
  }
}
