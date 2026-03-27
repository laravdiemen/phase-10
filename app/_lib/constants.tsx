import { type Colors, type RadioChoice } from "@/app/_lib/types";

export const COLORS_ORDER: Colors[] = ["red", "yellow", "green", "blue"];

export const MAX_PLAYERS: number = 6;

export const PHASE_CHOICES: RadioChoice[] = [
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

export const PHASE_ORDER_CHOICES: RadioChoice[] = [
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
