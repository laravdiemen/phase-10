"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { type ChangeEvent } from "react";

import { useData } from "@/app/_contexts/DataContext";
import {
  PHASE_CHOICES,
  PHASE_ORDER_CHOICES,
  PHASES,
} from "@/app/_lib/constants";
import { type PhaseChoices, type PhaseOrderChoices } from "@/app/_lib/types";
import Alert from "@/app/_ui/Alert";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import RadioGroup from "@/app/_ui/RadioGroup";

type GameSettingsProps = {
  errors: { component: string; message: string }[];
};

export default function GameSettings({ errors }: GameSettingsProps) {
  const {
    settings: { phaseChoice, phaseOrderChoice, phases },
    setPhaseChoice,
    setPhaseOrderChoice,
    setPhases,
  } = useData();

  const handleOnChangePhaseSelection = (
    event: ChangeEvent<HTMLInputElement>,
    number: number,
  ) => {
    const { value, checked } = event.target;

    if (checked && !phases.some((phase) => phase.number === number)) {
      setPhases(
        [...phases, { number, value }].sort((a, b) => a.number - b.number),
      );
    } else {
      setPhases(phases.filter((phase) => phase.number !== number));
    }
  };

  return (
    <Card>
      <Heading as="h3">
        <AdjustmentsHorizontalIcon className="icon-square" />
        Spelinstellingen
      </Heading>

      {errors.map((error, index) => (
        <Alert key={index} variant="error">
          {error.message}
        </Alert>
      ))}

      <div className="mb-4 flex flex-col gap-1">
        <fieldset>
          <legend className="mb-1 font-medium">Kies de fasen</legend>
          <RadioGroup
            choices={PHASE_CHOICES}
            handleOnChange={(value) => setPhaseChoice(value as PhaseChoices)}
            name="phases"
            selectedValue={phaseChoice}
            variant="green"
          />
        </fieldset>
      </div>

      {phaseChoice === "selection" && (
        <div className="mb-4 flex flex-col gap-1">
          <fieldset>
            <legend className="mb-1 font-medium">Selecteer de fasen</legend>
            <div className="columns-2">
              {PHASES.map(({ number, value }) => (
                <div key={number} className="mb-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`phase-${number}`}
                    name={`phase-${number}`}
                    value={value}
                    checked={phases.some((phase) => phase.number === number)}
                    className="accent-yellow size-4"
                    onChange={(event) =>
                      handleOnChangePhaseSelection(event, number)
                    }
                  />
                  <label htmlFor={`phase-${number}`} className="text-sm">
                    {value}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      <div className="mb-4 flex flex-col gap-1">
        <fieldset>
          <legend className="mb-1 font-medium">
            Kies de volgorde van de fasen
          </legend>
          <RadioGroup
            choices={PHASE_ORDER_CHOICES}
            handleOnChange={(value) =>
              setPhaseOrderChoice(value as PhaseOrderChoices)
            }
            name="phase-order"
            selectedValue={phaseOrderChoice}
            variant="red"
          />
        </fieldset>
      </div>
    </Card>
  );
}
