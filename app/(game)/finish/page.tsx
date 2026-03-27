import { ChartBarIcon, PlayIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import { DUMMY_PLAYERS } from "@/app/_lib/dummy-data";
import ButtonLink from "@/app/_ui/ButtonLink";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "We hebben een winnaar!",
};

export default function FinishPage() {
  return (
    <>
      <Heading as="h2" className="text-center">
        {DUMMY_PLAYERS[0].name} heeft gewonnen!
      </Heading>

      <div className="auto-grid my-10">
        <Card>
          <Heading as="h3">
            <TrophyIcon className="icon-square" />
            Volledige uitslag
          </Heading>
          <ul>
            {DUMMY_PLAYERS.map((player) => (
              <li key={player.key} className="flex items-center gap-2">
                {player.name}: fase {player.currentPhase} - {player.points}{" "}
                punten
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <Heading as="h3">
            <ChartBarIcon className="icon-square" />
            Alle rondes
          </Heading>
          <ul>
            <li>Ronde 1</li>
            <li>Ronde 2</li>
            <li>Ronde 3</li>
          </ul>
        </Card>
      </div>

      <ButtonLink href="/setup" variant="yellow" className="mx-auto">
        <PlayIcon />
        Start nieuw spel
      </ButtonLink>
    </>
  );
}
