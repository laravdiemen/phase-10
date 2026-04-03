"use client";

import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function AllPhases() {
  const {
    settings: { phases },
    standings,
  } = useData();

  const currentPhase = standings.reduce((max, standing) => {
    return standing.currentPhase > max ? standing.currentPhase : max;
  }, 0);

  const lowestCurrentPhase = standings.reduce((min, standing) => {
    return standing.currentPhase < min ? standing.currentPhase : min;
  }, 11);

  const finishedPhases = phases
    .filter((phase) => phase.number < lowestCurrentPhase)
    .map((phase) => phase.number);

  return (
    <Card>
      <Heading as="h3">
        <Square3Stack3DIcon className="icon-square" />
        Alle fasen
      </Heading>
      <ul className={`${phases.length > 5 ? "columns-2" : ""}`}>
        {phases.map((phase) => {
          const isActive = phase.number === currentPhase;
          const isFinished = finishedPhases.includes(phase.number);

          return (
            <li
              key={phase.number}
              className={`inline-flex w-full flex-col gap-1 rounded-xl px-5 py-3 not-last:mb-4 ${
                isActive ? "bg-yellow" : "bg-stone-100"
              } ${isFinished ? "opacity-30" : ""}`}
            >
              <span className="font-medium">Fase {phase.number}</span>
              <span className={`text-sm ${isActive ? "" : "text-stone-500"}`}>
                {phase.value}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
