import { type Metadata } from "next";

import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "We hebben een winnaar!",
};

export default function FinishPage() {
  return (
    <>
      <Heading as="h2">Winnaar</Heading>
      <ButtonLink href="/setup">Start nieuw spel</ButtonLink>
    </>
  );
}
