import { PlayIcon } from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import AllRounds from "@/app/(game)/finish/_components/AllRounds";
import FinishHeading from "@/app/(game)/finish/_components/FinishHeading";
import Result from "@/app/(game)/finish/_components/Result";
import Button from "@/app/_ui/Button";

export const metadata: Metadata = {
  title: "We hebben een winnaar!",
};

export default function FinishPage() {
  return (
    <>
      <FinishHeading />

      <div className="auto-grid my-10">
        <Result />
        <AllRounds />
      </div>

      <Button href="/setup" variant="yellow" className="mx-auto">
        <PlayIcon />
        Start nieuw spel
      </Button>
    </>
  );
}
