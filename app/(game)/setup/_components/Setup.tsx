"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

import GameSettings from "@/app/(game)/setup/_components/GameSettings";
import Players from "@/app/(game)/setup/_components/Players";
import { useData } from "@/app/_contexts/DataContext";
import { MAX_PLAYERS, MIN_PLAYERS } from "@/app/_lib/constants";
import Button from "@/app/_ui/Button";

const ERROR_MESSAGES = {
  MIN_PLAYERS: {
    component: "players",
    message: `Er moeten minimaal ${MIN_PLAYERS} spelers zijn om het spel te starten.`,
  },
  MAX_PLAYERS: {
    component: "players",
    message: `Er kunnen maximaal ${MAX_PLAYERS} spelers meedoen aan het spel.`,
  },
  PLAYER_NAMES: {
    component: "players",
    message:
      "Alle spelers moeten een naam hebben voordat het spel kan starten.",
  },
  MIN_PHASE_SELECTION: {
    component: "gameSettings",
    message: "Er moet minimaal 1 fase geselecteerd zijn.",
  },
};

export default function Setup() {
  const [errors, setErrors] = useState<
    { component: string; message: string }[]
  >([]);
  const {
    settings: { players, phaseChoice, phases },
    startGame,
  } = useData();

  const router = useRouter();

  const handleOnClickStartGame = () => {
    setErrors([]);

    if (players.length < MIN_PLAYERS) {
      setErrors((prev) => [...prev, ERROR_MESSAGES.MIN_PLAYERS]);
    }

    if (players.length > MAX_PLAYERS) {
      setErrors((prev) => [...prev, ERROR_MESSAGES.MAX_PLAYERS]);
    }

    if (players.some(({ name }) => name.trim() === "")) {
      setErrors((prev) => [...prev, ERROR_MESSAGES.PLAYER_NAMES]);
    }

    if (phaseChoice === "selection" && phases.length === 0) {
      setErrors((prev) => [...prev, ERROR_MESSAGES.MIN_PHASE_SELECTION]);
    }

    if (errors.length === 0) {
      startGame();
      router.push("/game");
    }
  };

  return (
    <>
      <div className="auto-grid my-10">
        <Players
          errors={errors.filter((error) => error.component === "players")}
        />
        <GameSettings
          errors={errors.filter((error) => error.component === "gameSettings")}
        />
      </div>

      <Button
        variant="yellow"
        className="mx-auto"
        onClick={handleOnClickStartGame}
      >
        <PlayIcon />
        Start het spel
      </Button>
    </>
  );
}
