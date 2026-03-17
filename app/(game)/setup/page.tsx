import { type Metadata } from "next";
import Link from "next/link";

import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Spel opstarten",
};

export default function SetupPage() {
  return (
    <>
      <Heading as="h2">Opstarten</Heading>
      <Link href="/game">Start</Link>
    </>
  );
}
