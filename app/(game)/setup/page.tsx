import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spel opstarten",
};

export default function SetupPage() {
  return (
    <>
      <h2>Opstarten</h2>
      <Link href="/game">Start</Link>
    </>
  );
}
