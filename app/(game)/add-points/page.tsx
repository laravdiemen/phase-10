import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import AddPlayerPoints from "@/app/(game)/add-points/_components/AddPlayerPoints";
import { DUMMY_CURRENT_ROUND, DUMMY_PLAYERS } from "@/app/_lib/dummy-data";
import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return (
    <>
      <Heading as="h2" className="text-center text-stone-500">
        Punten toevoegen voor ronde {DUMMY_CURRENT_ROUND}
      </Heading>

      <div className="auto-grid my-10">
        {DUMMY_PLAYERS.map((player) => (
          <AddPlayerPoints key={player.key} player={player} />
        ))}
      </div>

      <ButtonLink href="/game" className="mx-auto">
        <ArchiveBoxIcon className="size-6" />
        Opslaan
      </ButtonLink>
    </>
  );
}
