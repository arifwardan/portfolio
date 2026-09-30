import type { JSX, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import ogCover from "@assets/images/og-cover.jpg";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

// TODO(arif): point at the real production domain before launch.
const SITE_URL = "https://arifwardan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arif Wardan — Software Engineer",
    template: "%s · Arif Wardan",
  },
  description:
    "Building software, systems and ideas. Interactive 3D portfolio of Arif Wardan, backend engineer.",
  openGraph: {
    title: "Arif Wardan — Software Engineer",
    description: "Building software, systems and ideas.",
    type: "website",
    images: [
      {
        url: ogCover.src,
        width: 1200,
        height: 630,
        alt: "Arif Wardan — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Wardan — Software Engineer",
    description: "Building software, systems and ideas.",
    images: [ogCover.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-paper font-display text-ink antialiased">{children}</body>
    </html>
  );
}
