import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

import {
  DUMMY_PHASES,
  DUMMY_CURRENT_PHASE,
  DUMMY_FINISHED_PHASES,
} from "@/app/_lib/dummy-data";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function AllPhases() {
  return (
    <Card>
      <Heading as="h3" className="mb-4 flex items-center gap-3">
        <Square3Stack3DIcon className="icon-square" />
        Alle fasen
      </Heading>
      <div className="columns-2">
        {DUMMY_PHASES.map((phase) => (
          <div
            key={phase.key}
            className={`mb-4 flex flex-col gap-1 rounded-xl px-5 py-3 ${
              phase.key === DUMMY_CURRENT_PHASE - 1
                ? "bg-yellow"
                : "bg-stone-100"
            } ${DUMMY_FINISHED_PHASES.includes(phase.key + 1) ? "opacity-30" : ""}`}
          >
            <span className="font-medium">{phase.name}</span>
            <span
              className={`text-sm ${phase.key === DUMMY_CURRENT_PHASE - 1 ? "" : "text-stone-500"}`}
            >
              {phase.description}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
