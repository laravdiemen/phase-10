"use client";

import { ChartBarIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function AllRounds() {
  const {
    settings: { players },
    rounds,
  } = useData();

  return (
    <Card>
      <Heading as="h3">
        <ChartBarIcon className="icon-square" />
        Alle rondes
      </Heading>
      <ul>
        {rounds.map(
          (round) =>
            round.score.length !== 0 && (
              <li
                key={round.round}
                className="gap-x-4 rounded-xl bg-stone-100 px-5 py-3 not-last:mb-4"
              >
                <div className="mb-1 font-medium">Ronde {round.round}</div>
                {round.score.map((score) => (
                  <div
                    key={score.player}
                    className="mb-0.5 text-sm text-stone-500"
                  >
                    <span className="font-medium">
                      {players[score.player - 1].name}:{" "}
                    </span>
                    <span>
                      {score.phaseCompleted
                        ? `Fase ${score.phase} behaald`
                        : "Fase niet behaald"}
                    </span>
                    {" - "}
                    <span>{score.points} punten</span>
                  </div>
                ))}
              </li>
            ),
        )}
      </ul>
    </Card>
  );
}
