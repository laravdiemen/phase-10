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
        {/* TODO: Add styling */}
        {result.map((player) => (
          <li key={player.player} className="flex items-center gap-2">
            <span>{player.place}.</span>
            {player.name}: fase {player.currentPhase} - {player.points} punten
          </li>
        ))}
      </ul>
    </Card>
  );
}
