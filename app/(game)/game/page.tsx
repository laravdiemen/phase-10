import { type Metadata } from "next";

import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return (
    <>
      <Heading as="h2">Spel</Heading>
      <ButtonLink href="/add-points">Punten toevoegen</ButtonLink>
    </>
  );
}
