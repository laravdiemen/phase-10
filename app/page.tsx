import {
  ArrowPathRoundedSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

import ButtonLink from "@/app/_ui/ButtonLink";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Page() {
  return (
    <Card className="m-auto w-full max-w-xl">
      <Heading as="h1" className="mb-6 text-center">
        Phase 10
      </Heading>

      <div className="flex flex-col items-center gap-4">
        <ButtonLink href="/setup" variant="blue">
          <PlayIcon className="size-6" />
          Start nieuw spel
        </ButtonLink>
        <ButtonLink href="/game" variant="green">
          <ArrowPathRoundedSquareIcon className="size-6" />
          Hervat huidig spel
        </ButtonLink>
      </div>
    </Card>
  );
}
