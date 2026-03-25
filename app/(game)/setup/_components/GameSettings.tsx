"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { PHASE_CHOICES, PHASE_ORDER_CHOICES } from "@/app/_lib/constants";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import RadioGroup from "@/app/_ui/RadioGroup";

export default function GameSettings() {
  const [phase, setPhase] = useState(PHASE_CHOICES[0].value);
  const [phaseOrder, setPhaseOrder] = useState(PHASE_ORDER_CHOICES[0].value);

  return (
    <Card>
      <Heading as="h3" className="mb-4 flex items-center gap-3">
        <AdjustmentsHorizontalIcon className="size-6" />
        Spelinstellingen
      </Heading>

      <div className="mb-4 flex flex-col gap-1">
        <fieldset>
          <legend className="mb-1 font-medium">Kies de fasen</legend>
          <RadioGroup
            choices={PHASE_CHOICES}
            handleOnChange={setPhase}
            name="phases"
            selectedValue={phase}
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
            handleOnChange={setPhaseOrder}
            name="phase-order"
            selectedValue={phaseOrder}
            variant="green"
          />
        </fieldset>
      </div>
    </Card>
  );
}
