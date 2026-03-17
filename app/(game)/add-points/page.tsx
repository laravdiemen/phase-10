import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return (
    <>
      <h2>Punten toevoegen</h2>
      <Link href="/game">Opslaan</Link>
    </>
  );
}
