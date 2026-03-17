import type { Metadata } from "next";
import { Russo_One, Roboto } from "next/font/google";
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
    default: "Start | Phase 10",
  },
  description: "Speel Phase 10 en houd je scores bij met deze handige app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${russoOne.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
