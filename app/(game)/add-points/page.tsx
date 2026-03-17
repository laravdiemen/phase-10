import { type Metadata } from "next";

import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return (
    <>
      <Heading as="h2">Punten toevoegen</Heading>
      <ButtonLink href="/game">Opslaan</ButtonLink>
    </>
  );
}
