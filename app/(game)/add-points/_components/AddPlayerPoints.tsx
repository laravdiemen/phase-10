"use client";

import { useState } from "react";

import { COLORS_ORDER, PHASE_COMPLETED_CHOICES } from "@/app/_lib/constants";
import { type ColorVariant, type Player } from "@/app/_lib/types";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import Input from "@/app/_ui/Input";
import RadioGroup from "@/app/_ui/RadioGroup";

type AddPlayerPointsProps = {
  player: Player;
};

export default function AddPlayerPoints({ player }: AddPlayerPointsProps) {
  const [phaseCompleted, setPhaseCompleted] = useState("no");
  const [points, setPoints] = useState(0);

  return (
    <Card className="flex flex-col">
      <Heading as="h3" className="mb-4">
        {player.name}
      </Heading>
      <div className="auto-grid [--min-column:200px]">
        <fieldset>
          <legend className="mb-1 font-medium">Fase behaald?</legend>
          <RadioGroup
            choices={PHASE_COMPLETED_CHOICES}
            handleOnChange={setPhaseCompleted}
            name={`phase-completed-${player.key}`}
            selectedValue={phaseCompleted}
            variant={
              COLORS_ORDER[player.key % COLORS_ORDER.length] as ColorVariant
            }
          />
        </fieldset>

        <Input
          handleOnChange={(value) => setPoints(Number(value))}
          id={`points-player-${player.key}`}
          label="Punten"
          placeholder="Vul het aantal punten in..."
          type="number"
          value={points}
        />
      </div>
    </Card>
  );
}
