"use client";

import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AddPlayerPoints from "@/app/(game)/add-points/_components/AddPlayerPoints";
import { useData } from "@/app/_contexts/DataContext";
import Alert from "@/app/_ui/Alert";
import Button from "@/app/_ui/Button";
import Heading from "@/app/_ui/Heading";

const ERROR_MESSAGES = {
  MIN_ONE_PLAYER_PHASE_COMPLETED: {
    message: "Er moet minimaal 1 speler zijn die de fase heeft behaald.",
  },
  POINT_MULTIPLE_OF_5: {
    message: "Punten moeten een veelvoud van 5 zijn.",
  },
  MAX_ONE_PLAYER_ZERO_POINTS: {
    message: "Er mag maximaal 1 speler zijn met 0 punten.",
  },
};

export default function AddPoints() {
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const {
    currentRound,
    settings: { players },
    rounds,
    nextRound,
  } = useData();

  const router = useRouter();

  const handleOnClickSave = () => {
    setErrors([]);
    const newErrors = [];

    const currentRoundScores =
      rounds.find((r) => r.round === currentRound)?.score || [];

    if (currentRoundScores.filter((s) => s.phaseCompleted).length === 0) {
      newErrors.push(ERROR_MESSAGES.MIN_ONE_PLAYER_PHASE_COMPLETED);
    }

    if (currentRoundScores.some((s) => s.points % 5 !== 0)) {
      newErrors.push(ERROR_MESSAGES.POINT_MULTIPLE_OF_5);
    }

    if (currentRoundScores.filter((s) => s.points === 0).length > 1) {
      newErrors.push(ERROR_MESSAGES.MAX_ONE_PLAYER_ZERO_POINTS);
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      nextRound();

      // TODO: if there is a winner, navigate to the end screen instead of the next round
      router.push("/game");
    }
  };

  return (
    <>
      <Heading as="h2" className="text-center">
        Punten toevoegen voor ronde {currentRound}
      </Heading>

      {errors.map((error, index) => (
        <Alert key={index} variant="error">
          {error.message}
        </Alert>
      ))}

      <div className="auto-grid my-10">
        {players.map((player) => (
          <AddPlayerPoints key={player.number} player={player} />
        ))}
      </div>

      <Button className="mx-auto" onClick={handleOnClickSave}>
        <ArchiveBoxIcon />
        Opslaan
      </Button>
    </>
  );
}
