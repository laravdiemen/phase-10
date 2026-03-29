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
        {/* TODO: Add styling */}
        {rounds.map(
          (round) =>
            round.score.length !== 0 && (
              <li key={round.round} className="mb-4">
                <span className="block font-medium">Ronde {round.round}</span>
                {round.score.map((score) => (
                  <span key={score.player} className="block">
                    <span>{players[score.player - 1].name}: </span>
                    <span>
                      {score.phaseCompleted
                        ? `Fase ${score.phase} behaald`
                        : "Fase niet behaald"}
                    </span>
                    {" - "}
                    <span>{score.points} punten</span>
                  </span>
                ))}
              </li>
            ),
        )}
      </ul>
    </Card>
  );
}
