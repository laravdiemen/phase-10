import {
  type Colors,
  type PhaseChoices,
  type PhaseOrderChoices,
  type RadioChoice,
} from "@/app/_lib/types";

export const COLORS_ORDER: Colors[] = ["red", "yellow", "green", "blue"];

export const MIN_PLAYERS: number = 2;

export const MAX_PLAYERS: number = 6;

export const PHASE_CHOICES: RadioChoice<PhaseChoices>[] = [
  {
    value: "default",
    label: "Standaard",
  },
  {
    value: "short",
    label: "Kort",
  },
  {
    value: "selection",
    label: "Selectie",
  },
];

export const PHASE_ORDER_CHOICES: RadioChoice<PhaseOrderChoices>[] = [
  {
    value: "normal",
    label: "Normaal",
  },
  {
    value: "random",
    label: "Willekeurig",
  },
  {
    value: "free-choice",
    label: "Vrije keuze",
  },
];

export const PHASE_COMPLETED_CHOICES: RadioChoice[] = [
  {
    value: "yes",
    label: "Ja",
  },
  {
    value: "no",
    label: "Nee",
  },
];

export const PHASES = [
  {
    number: 1,
    value: "AAA BBB",
  },
  {
    number: 2,
    value: "AAA ABCD",
  },
  {
    number: 3,
    value: "AAAA ABCD",
  },
  {
    number: 4,
    value: "ABCDEFG",
  },
  {
    number: 5,
    value: "ABCDEFGH",
  },
  {
    number: 6,
    value: "ABCDEFGHI",
  },
  {
    number: 7,
    value: "AAAA BBBB",
  },
  {
    number: 8,
    value: "CCCCCCC",
  },
  {
    number: 9,
    value: "AAAAA BB",
  },
  {
    number: 10,
    value: "AAAAA BBB",
  },
];

export const PHASES_SHORT = [
  PHASES[0],
  PHASES[2],
  PHASES[4],
  PHASES[7],
  PHASES[8],
];
