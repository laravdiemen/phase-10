import Link from "next/link";

import Heading from "@/app/_ui/Heading";

export default function Page() {
  return (
    <>
      <Heading as="h1" className="text-center">
        Phase 10
      </Heading>

      <Link href="/setup">Start nieuw spel</Link>
      <Link href="/game">Hervat huidig spel</Link>
    </>
  );
}
