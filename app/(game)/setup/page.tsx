import { PlayIcon } from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import GameSettings from "@/app/(game)/setup/_components/GameSettings";
import Players from "@/app/(game)/setup/_components/Players";
import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Spel opstarten",
};

export default function SetupPage() {
  return (
    <>
      <Heading as="h2" className="text-center">
        Nieuw spel opstarten
      </Heading>

      <div className="auto-grid my-10">
        <Players />
        <GameSettings />
      </div>

      <ButtonLink href="/game" variant="yellow" className="mx-auto">
        <PlayIcon />
        Start het spel
      </ButtonLink>
    </>
  );
}
