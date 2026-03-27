export type Colors = "red" | "blue" | "green" | "yellow";

export type ColorVariant = Colors | "default";

export type RadioChoice = {
  value: string;
  label: string;
};

export type Player = {
  key: number;
  name: string;
  currentPhase: number;
  points: number;
};

export type Phase = {
  key: number;
  name: string;
  description: string;
};
