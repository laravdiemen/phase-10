import { ChartBarIcon } from "@heroicons/react/24/solid";

import {
  DUMMY_PLAYERS,
  DUMMY_DISTRIBUTOR_PLAYER,
  DUMMY_STARTING_PLAYER,
} from "@/app/_lib/dummy-data";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Standings() {
  return (
    <Card>
      <Heading as="h3">
        <ChartBarIcon className="icon-square" />
        Huidige stand
      </Heading>

      {DUMMY_PLAYERS.map((player) => (
        <div
          key={player.key}
          className="mb-4 rounded-xl bg-stone-100 px-5 py-3"
        >
          <div className="flex flex-col">
            <span className="font-medium">
              {player.name}{" "}
              {player.key === DUMMY_DISTRIBUTOR_PLAYER && (
                <span className="text-stone-500">(Uitdeler)</span>
              )}
              {player.key === DUMMY_STARTING_PLAYER && (
                <span className="text-stone-500">(Starter)</span>
              )}
            </span>
            <span className="text-sm text-stone-500">
              Fase {player.currentPhase}
            </span>
          </div>

          <div className="ml-auto flex flex-col items-end">
            <span className="text-xl font-bold">{player.points}</span>
            <span className="text-xs text-stone-500">Punten</span>
          </div>
        </div>
      ))}
    </Card>
  );
}
