import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export default function Page() {
  return (
    <>
      <Heading as="h1" className="text-center">
        Phase 10
      </Heading>

      <div className="flex flex-col items-center gap-2">
        <ButtonLink href="/setup">Start nieuw spel</ButtonLink>
        <ButtonLink href="/game">Hervat huidig spel</ButtonLink>
      </div>
    </>
  );
}
