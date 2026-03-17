import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We hebben een winnaar!",
};

export default function FinishPage() {
  return (
    <>
      <h2>Winnaar</h2>
      <Link href="/setup">Start nieuw spel</Link>
    </>
  );
}
