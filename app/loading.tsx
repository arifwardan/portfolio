import type { JSX } from "react";
export default function Loading(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper font-mono text-sm tracking-[0.3em] text-ink/50 uppercase">
      loading…
    </div>
  );
}
