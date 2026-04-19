import { type Metadata } from "next";
import { Russo_One, Roboto } from "next/font/google";
import { type ReactNode } from "react";

import { DataProvider } from "@/app/_contexts/DataContext";
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
        <main className="mx-auto flex min-h-dvh max-w-7xl px-4 py-6">
          <div
            className="pointer-events-none fixed inset-0 -z-1"
            aria-hidden="true"
          >
            <div className="from-red/15 absolute -top-[15vw] -right-[10vw] size-[75vw] rounded-full bg-radial via-stone-50 to-stone-50 backdrop-blur-xl md:size-[50vw]"></div>
            <div className="from-yellow/25 absolute -bottom-[15vw] -left-[10vw] size-[75vw] rounded-full bg-radial via-stone-50 to-stone-50 backdrop-blur-xl md:size-[50vw]"></div>
          </div>
          <DataProvider>{children}</DataProvider>
        </main>
      </body>
    </html>
  );
}
