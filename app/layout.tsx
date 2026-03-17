import { type Metadata } from "next";
import { Russo_One, Roboto } from "next/font/google";
import { type ReactNode } from "react";

import "@/app/_styles/globals.css";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Phase 10",
    default: "Welkom | Phase 10",
  },
  description: "Speel Phase 10 en houd de punten en fases bij.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl">
      <body
        className={`${russoOne.variable} ${roboto.variable} bg-stone-50 font-sans text-stone-950 antialiased`}
      >
        <main className="mx-auto flex min-h-screen max-w-7xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
