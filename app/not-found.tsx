import type { JSX } from "react";
import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void font-mono text-neutral-200">
      <div className="px-8">
        <p className="text-sm text-term">$ cd ~/this-page</p>
        <p className="mt-4 text-4xl font-bold text-white">404</p>
        <p className="mt-2 text-neutral-400">
          no such file or directory — the system never had it.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-term/60 px-5 py-2.5 text-sm text-term transition-colors hover:bg-term hover:text-void"
        >
          cd ~/ — back to the portfolio
        </Link>
      </div>
    </div>
  );
}
