import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return (
    <>
      <h2>Spel</h2>
      <Link href="/add-points">Punten toevoegen</Link>
    </>
  );
}
