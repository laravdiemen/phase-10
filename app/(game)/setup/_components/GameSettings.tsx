"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import { PHASE_CHOICES, PHASE_ORDER_CHOICES } from "@/app/_lib/constants";
import { type PhaseChoices, type PhaseOrderChoices } from "@/app/_lib/types";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import RadioGroup from "@/app/_ui/RadioGroup";

export default function GameSettings() {
  const {
    settings: { phaseChoice, phaseOrderChoice },
    setPhaseChoice,
    setPhaseOrderChoice,
  } = useData();

  return (
    <Card>
      <Heading as="h3">
        <AdjustmentsHorizontalIcon className="icon-square" />
        Spelinstellingen
      </Heading>

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
