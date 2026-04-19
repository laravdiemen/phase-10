"use client";

import { PlusIcon, UserGroupIcon, MinusIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import { MAX_PLAYERS, MIN_PLAYERS } from "@/app/_lib/constants";
import Alert from "@/app/_ui/Alert";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";
import Input from "@/app/_ui/Input";

type PlayersProps = {
  errors: { component: string; message: string }[];
};

export default function Players({ errors }: PlayersProps) {
  const {
    settings: { players },
    setPlayers,
  } = useData();

  const handleOnChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index].name = value;
    setPlayers(newPlayers);
  };

  const handleAddPlayer = () => {
    const newPlayer = {
      number: players.length + 1,
      name: "",
    };

    if (players.length < MAX_PLAYERS) {
      setPlayers([...players, newPlayer]);
    }
  };

  const handleRemovePlayer = () => {
    if (players.length > MIN_PLAYERS) {
      setPlayers(players.slice(0, -1));
    }
  };

  return (
    <Card>
      <Heading as="h3">
        <UserGroupIcon className="icon-square" />
        Spelers
        <span className="ml-auto">
          {players.length}/{MAX_PLAYERS}
        </span>
      </Heading>

      {errors.map((error, index) => (
        <Alert key={index} variant="error">
          {error.message}
        </Alert>
      ))}

      {players.map(({ number, name }, index) => (
        <Input
          className="mb-4 flex flex-col gap-1"
          handleOnChange={(value) => handleOnChange(index, value)}
          id={`player-${index}`}
          key={index}
          label={`Speler ${number}`}
          placeholder="Vul de naam van de speler in..."
          type="text"
          value={name}
        />
      ))}

      {players.length < MAX_PLAYERS && (
        <button
          className="hocus:bg-stone-500 hocus:text-stone-50 mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-stone-500 px-6 py-3 text-sm font-bold text-stone-500 uppercase transition-all duration-300"
          onClick={handleAddPlayer}
        >
          <PlusIcon className="size-6" />
          Speler toevoegen
        </button>
      )}

      {players.length > MIN_PLAYERS && (
        <button
          className="hocus:bg-stone-500 hocus:text-stone-50 mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-stone-500 px-6 py-3 text-sm font-bold text-stone-500 uppercase transition-all duration-300"
          onClick={handleRemovePlayer}
        >
          <MinusIcon className="size-6" />
          Speler verwijderen
        </button>
      )}
    </Card>
  );
}
