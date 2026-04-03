"use client";

import { TrophyIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Result() {
  const { result } = useData();

  return (
    <Card>
      <Heading as="h3">
        <TrophyIcon className="icon-square" />
        Volledige uitslag
      </Heading>
      <ul>
        {result.map((player) => (
          <li
            key={player.player}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl bg-stone-100 px-5 py-3 not-last:mb-4"
          >
            <span className="h-full border-r-2 border-stone-200 pr-3 text-xl">
              {player.place}.
            </span>

            <div className="flex flex-col">
              <span className="font-medium">{player.name}</span>
              <span className="text-sm text-stone-500">
                Fase {player.currentPhase - 1}
              </span>
            </div>

            <div className="ml-auto flex flex-col items-end">
              <span className="text-xl font-bold">{player.points}</span>
              <span className="text-xs text-stone-500">Punten</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
