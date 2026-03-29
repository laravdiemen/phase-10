"use client";

import {
  ArrowPathRoundedSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Button from "@/app/_ui/Button";

export default function StartRestartButtons() {
  const { isStarted, isFinished } = useData();

  return (
    <div className="flex flex-col items-center gap-4">
      <Button href="/setup" variant="blue">
        <PlayIcon />
        Start nieuw spel
      </Button>
      {isStarted && !isFinished && (
        <Button href="/game" variant="green">
          <ArrowPathRoundedSquareIcon />
          Hervat huidig spel
        </Button>
      )}
    </div>
  );
}
