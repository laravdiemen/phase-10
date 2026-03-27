import { PlusIcon } from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import AllPhases from "@/app/(game)/game/_components/AllPhases";
import Standings from "@/app/(game)/game/_components/Standings";
import { DUMMY_CURRENT_ROUND } from "@/app/_lib/dummy-data";
import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return (
    <>
      <Heading as="h2" className="text-center">
        Ronde {DUMMY_CURRENT_ROUND}
      </Heading>

      <div className="auto-grid my-10">
        <Standings />
        <AllPhases />
      </div>

      <ButtonLink href="/add-points" variant="green" className="mx-auto">
        <PlusIcon />
        Punten toevoegen
      </ButtonLink>
    </>
  );
}
