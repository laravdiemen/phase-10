import { type Metadata } from "next";
import Link from "next/link";

import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "We hebben een winnaar!",
};

export default function FinishPage() {
  return (
    <>
      <Heading as="h2">Winnaar</Heading>
      <Link href="/setup">Start nieuw spel</Link>
    </>
  );
}
