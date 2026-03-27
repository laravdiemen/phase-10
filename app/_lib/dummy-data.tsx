// I designed the application now with dummy data. This file is going to be deleted when there is a global state management solution.

import { type Phase, type Player } from "@/app/_lib/types";

export const DUMMY_PLAYERS: Player[] = [
  {
    key: 0,
    name: "John Doe",
    currentPhase: 4,
    points: 80,
  },
  {
    key: 1,
    name: "Jane Doe",
    currentPhase: 3,
    points: 150,
  },
  {
    key: 2,
    name: "Bob Smith",
    currentPhase: 4,
    points: 0,
  },
];

export const DUMMY_DISTRIBUTOR_PLAYER: Player["key"] = DUMMY_PLAYERS[0].key;

export const DUMMY_STARTING_PLAYER: Player["key"] = DUMMY_PLAYERS[1].key;

export const DUMMY_CURRENT_ROUND: number = 3;

export const DUMMY_PHASES: Phase[] = [
  {
    key: 0,
    name: "Fase 1",
    description: "AAA BBB",
  },
  {
    key: 1,
    name: "Fase 2",
    description: "AAA ABCD",
  },
  {
    key: 2,
    name: "Fase 3",
    description: "AAAA ABCD",
  },
  {
    key: 3,
    name: "Fase 4",
    description: "ABCDEFG",
  },
  {
    key: 4,
    name: "Fase 5",
    description: "ABCDEFGH",
  },
  {
    key: 5,
    name: "Fase 6",
    description: "ABCDEFGHI",
  },
  {
    key: 6,
    name: "Fase 7",
    description: "AAAA BBBB",
  },
  {
    key: 7,
    name: "Fase 8",
    description: "CCCCCCC",
  },
  {
    key: 8,
    name: "Fase 9",
    description: "AAAAA BB",
  },
  {
    key: 9,
    name: "Fase 10",
    description: "AAAAA BBB",
  },
];

export const DUMMY_CURRENT_PHASE: number = 4;

export const DUMMY_FINISHED_PHASES: number[] = [1, 2];
