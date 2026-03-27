import {
  ArrowPathRoundedSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { type Metadata } from "next";

import ButtonLink from "@/app/_ui/ButtonLink";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "404 - Pagina niet gevonden",
};

export default function NotFound() {
  return (
    <Card className="m-auto w-full max-w-2xl">
      <Heading as="h1" className="mb-6 text-center">
        404
      </Heading>
      <p className="mb-6 text-center text-xl text-stone-500">
        Het lijkt erop dat de kaarten even opnieuw zijn geschud, want de pagina
        die je zoekt bestaat niet. Maar geen zorgen, we hebben genoeg andere
        kaarten in ons spel!
      </p>

      <div className="flex flex-col items-center gap-4">
        <ButtonLink href="/game" variant="green">
          <ArrowPathRoundedSquareIcon />
          Hervat huidig spel
        </ButtonLink>
        <ButtonLink href="/setup" variant="red">
          <PlayIcon />
          Start nieuw spel
        </ButtonLink>
      </div>
    </Card>
  );
}
