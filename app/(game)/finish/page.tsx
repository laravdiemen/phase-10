import { type Metadata } from "next";

import AllRounds from "@/app/(game)/finish/_components/AllRounds";
import FinishHeading from "@/app/(game)/finish/_components/FinishHeading";
import Result from "@/app/(game)/finish/_components/Result";
import StartButton from "@/app/_components/StartButton";

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

      <StartButton variant="yellow" className="mx-auto">
        Start nieuw spel
      </StartButton>
    </>
  );
}
