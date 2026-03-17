import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="font-russo-one mb-4 -skew-x-12 text-center text-5xl">
        Phase
        <br />
        10
      </h1>
      <Link href="/setup">Start nieuw spel</Link>
      <Link href="/game">Hervat huidig spel</Link>
    </>
  );
}
