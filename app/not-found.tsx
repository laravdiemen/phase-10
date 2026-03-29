import { type Metadata } from "next";

import StartRestartButtons from "@/app/_components/StartRestartButtons";
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

      <StartRestartButtons />
    </Card>
  );
}
