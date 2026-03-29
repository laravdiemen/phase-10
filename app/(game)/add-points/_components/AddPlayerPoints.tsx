"use client";

import { useState } from "react";

import { useData } from "@/app/_contexts/DataContext";
import { COLORS_ORDER, PHASE_COMPLETED_CHOICES } from "@/app/_lib/constants";
import { type ColorVariant } from "@/app/_lib/types";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import Input from "@/app/_ui/Input";
import RadioGroup from "@/app/_ui/RadioGroup";

type AddPlayerPointsProps = {
  player: {
    number: number;
    name: string;
  };
};

export default function AddPlayerPoints({ player }: AddPlayerPointsProps) {
  const { standings, addRoundScore } = useData();
  const [phaseCompleted, setPhaseCompleted] = useState("no");
  const [points, setPoints] = useState(0);

  const handleOnChangePhaseCompleted = (value: string) => {
    setPhaseCompleted(value);
    updateRoundScore(value, points);
  };

  const handleOnChangePoints = (value: string) => {
    setPoints(Number(value));
    updateRoundScore(phaseCompleted, Number(value));
  };

  const updateRoundScore = (phaseCompleted: string, points: number) => {
    addRoundScore({
      player: player.number,
      phaseCompleted: phaseCompleted === "yes",
      phase: standings.find((s) => s.player === player.number)!.currentPhase,
      points: points,
    });
  };

  return (
    <Card className="flex flex-col">
      <Heading as="h3">{player.name}</Heading>
      <div className="auto-grid [--min-column:200px]">
        <fieldset>
          <legend className="mb-1 font-medium">Fase behaald?</legend>
          <RadioGroup
            choices={PHASE_COMPLETED_CHOICES}
            handleOnChange={handleOnChangePhaseCompleted}
            name={`phase-completed-${player.number}`}
            selectedValue={phaseCompleted}
            variant={
              COLORS_ORDER[
                (player.number - 1) % COLORS_ORDER.length
              ] as ColorVariant
            }
          />
        </fieldset>

        <Input
          handleOnChange={handleOnChangePoints}
          id={`points-player-${player.number}`}
          label="Punten"
          placeholder="Vul het aantal punten in..."
          type="number"
          value={points}
        />
      </div>
    </Card>
  );
}
