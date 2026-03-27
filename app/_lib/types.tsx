export type Colors = "red" | "blue" | "green" | "yellow";

export type ColorVariant = Colors | "default";

export type RadioChoice<T = string> = {
  value: T;
  label: string;
};

export type PhaseChoices = "default" | "short" | "selection";

export type PhaseOrderChoices = "normal" | "random" | "free-choice";

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
