"use client";

import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Button from "@/app/_ui/Button";

import StartButton from "./StartButton";

export default function StartRestartButtons() {
  const { isStarted, isFinished } = useData();

  return (
    <div className="flex flex-col items-center gap-4">
      <StartButton variant="blue">Start nieuw spel</StartButton>
      {isStarted && !isFinished && (
        <Button href="/game" variant="green">
          <ArrowPathRoundedSquareIcon />
          Hervat huidig spel
        </Button>
      )}
    </div>
  );
}
