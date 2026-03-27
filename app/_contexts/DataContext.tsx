"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { type PhaseChoices, type PhaseOrderChoices } from "@/app/_lib/types";

type Player = {
  number: number;
  name: string;
};

type Phase = {
  number: number;
  value: string;
};

type Settings = {
  players: Player[];
  phaseChoice: PhaseChoices;
  phaseOrderChoice: PhaseOrderChoices;
  phases: Phase[];
};

type Score = {
  player: number;
  phaseCompleted: boolean;
  phase: number;
  points: number;
};

type Round = {
  round: number;
  distributorPlayer: number;
  startingPlayer: number;
  score: Score[];
};

type Standings = {
  player: number;
  currentPhase: number;
  points: number;
}[];

type DataContextType = {
  settings: Settings;
  rounds: Round[];
  standings: Standings;
  setPlayers: (players: Player[]) => void;
  setPhaseChoice: (phaseChoice: PhaseChoices) => void;
  setPhaseOrderChoice: (phaseOrderChoice: PhaseOrderChoices) => void;
};

const defaultData: Pick<DataContextType, "settings" | "rounds" | "standings"> =
  {
    settings: {
      players: [
        { number: 1, name: "" },
        { number: 2, name: "" },
      ],
      phaseChoice: "default",
      phaseOrderChoice: "normal",
      phases: [],
    },
    rounds: [],
    standings: [],
  };

const dataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(defaultData);

  const updateSettings = useCallback(
    <K extends keyof Settings>(key: K, value: Settings[K]) => {
      setData((prevData) => ({
        ...prevData,
        settings: {
          ...prevData.settings,
          [key]: value,
        },
      }));
    },
    [],
  );

  const setPlayers = useCallback(
    (players: Player[]) => {
      updateSettings("players", players);
    },
    [updateSettings],
  );

  const setPhaseChoice = useCallback(
    (phaseChoice: PhaseChoices) => {
      updateSettings("phaseChoice", phaseChoice);
    },
    [updateSettings],
  );

  const setPhaseOrderChoice = useCallback(
    (phaseOrderChoice: PhaseOrderChoices) => {
      updateSettings("phaseOrderChoice", phaseOrderChoice);
    },
    [updateSettings],
  );

  const value = useMemo(
    () => ({
      ...data,
      setPlayers,
      setPhaseChoice,
      setPhaseOrderChoice,
    }),
    [data, setPlayers, setPhaseChoice, setPhaseOrderChoice],
  );

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export function useData() {
  const context = useContext(dataContext);

  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }

  return context;
}
