"use client";

import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import { MAX_PLAYERS } from "@/app/_lib/constants";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Players() {
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

  return (
    <Card>
      <Heading as="h3">
        <UserGroupIcon className="icon-square" />
        Spelers
        <span className="ml-auto">
          {players.length}/{MAX_PLAYERS}
        </span>
      </Heading>

      {players.map(({ number, name }, index) => (
        <div key={index} className="mb-4 flex flex-col gap-1">
          <label htmlFor={`player-${index}`} className="font-medium">
            Speler {number}
          </label>
          <input
            type="text"
            id={`player-${index}`}
            name={`player-${index}`}
            placeholder="Vul de naam van de speler in..."
            className="rounded-xl border border-stone-300 px-5 py-3"
            value={name}
            onChange={(e) => handleOnChange(index, e.target.value)}
          />
        </div>
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
    </Card>
  );
}
