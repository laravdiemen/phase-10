import { type Metadata } from "next";

import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export const metadata: Metadata = {
  title: "Spel opstarten",
};

export default function SetupPage() {
  return (
    <>
      <Heading as="h2">Opstarten</Heading>
      <ButtonLink href="/game">Start</ButtonLink>
    </>
  );
}
