// I designed the application now with dummy data. This file is going to be deleted when there is a global state management solution.

import { type Player } from "@/app/_lib/types";

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
