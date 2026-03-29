import { type Metadata } from "next";

import Setup from "@/app/(game)/setup/_components/Setup";
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

      <Setup />
    </>
  );
}
