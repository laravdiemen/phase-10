import { type Metadata } from "next";
import Link from "next/link";

import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return (
    <>
      <Heading as="h2">Spel</Heading>
      <Link href="/add-points">Punten toevoegen</Link>
    </>
  );
}
