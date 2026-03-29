"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

import AllPhases from "@/app/(game)/game/_components/AllPhases";
import Standings from "@/app/(game)/game/_components/Standings";
import { useData } from "@/app/_contexts/DataContext";
import Button from "@/app/_ui/Button";
import Heading from "@/app/_ui/Heading";

export default function Game() {
  const {
    settings: { players },
    currentRound,
    standings,
    addRoundScore,
  } = useData();
  const router = useRouter();

  const handleOnClickAddPoints = () => {
    players.forEach((player) => {
      addRoundScore({
        player: player.number,
        phaseCompleted: false,
        phase: standings.find((s) => s.player === player.number)!.currentPhase,
        points: 0,
      });
    });

    router.push("/add-points");
  };

  return (
    <>
      <Heading as="h2" className="text-center">
        Ronde {currentRound}
      </Heading>

      <div className="auto-grid my-10">
        <Standings />
        <AllPhases />
      </div>

      <Button
        variant="green"
        className="mx-auto"
        onClick={handleOnClickAddPoints}
      >
        <PlusIcon />
        Punten toevoegen
      </Button>
    </>
  );
}
