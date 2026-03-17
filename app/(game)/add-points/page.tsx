import { type Metadata } from "next";
import Link from "next/link";

import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return (
    <>
      <Heading as="h2">Punten toevoegen</Heading>
      <Link href="/game">Opslaan</Link>
    </>
  );
}
