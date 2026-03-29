"use client";

import { ChartBarIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Standings() {
  const {
    settings: { players },
    rounds,
    standings,
  } = useData();

  return (
    <Card>
      <Heading as="h3">
        <ChartBarIcon className="icon-square" />
        Huidige stand
      </Heading>

      {standings.map((standing) => (
        <div
          key={standing.player}
          className="mb-4 flex rounded-xl bg-stone-100 px-5 py-3"
        >
          <div className="flex flex-col">
            <span className="font-medium">
              {
                players.find((player) => player.number === standing.player)
                  ?.name
              }{" "}
              {standing.player ===
                rounds[rounds.length - 1].distributorPlayer && (
                <span className="text-stone-500">(Uitdeler)</span>
              )}{" "}
              {standing.player === rounds[rounds.length - 1].startingPlayer && (
                <span className="text-stone-500">(Starter)</span>
              )}
            </span>
            <span className="text-sm text-stone-500">
              Fase {standing.currentPhase}
            </span>
          </div>

          <div className="ml-auto flex flex-col items-end">
            <span className="text-xl font-bold">{standing.points}</span>
            <span className="text-xs text-stone-500">Punten</span>
          </div>
        </div>
      ))}
    </Card>
  );
}
