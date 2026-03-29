"use client";

import {
  ArrowPathRoundedSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import ButtonLink from "@/app/_ui/ButtonLink";

export default function StartRestartButtons() {
  const { isStarted, isFinished } = useData();

  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonLink href="/setup" variant="blue">
        <PlayIcon />
        Start nieuw spel
      </ButtonLink>
      {isStarted && !isFinished && (
        <ButtonLink href="/game" variant="green">
          <ArrowPathRoundedSquareIcon />
          Hervat huidig spel
        </ButtonLink>
      )}
    </div>
  );
}
