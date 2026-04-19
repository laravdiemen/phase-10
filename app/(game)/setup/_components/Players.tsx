"use client";

import { PlusIcon, UserGroupIcon, MinusIcon } from "@heroicons/react/24/solid";

import { useData } from "@/app/_contexts/DataContext";
import { MAX_PLAYERS, MIN_PLAYERS } from "@/app/_lib/constants";
import Alert from "@/app/_ui/Alert";
import Button from "@/app/_ui/Button";
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
        <Button
          onClick={handleAddPlayer}
          variant="outline"
          size="small"
          className="mt-8 w-full"
        >
          <PlusIcon />
          Speler toevoegen
        </Button>
      )}

      {players.length > MIN_PLAYERS && (
        <Button
          onClick={handleRemovePlayer}
          variant="outline"
          size="small"
          className="mt-4 w-full"
        >
          <MinusIcon />
          Speler verwijderen
        </Button>
      )}
    </Card>
  );
}
