"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

import { PHASES, PHASES_SHORT } from "@/app/_lib/constants";
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
  isStarted: boolean;
  isFinished: boolean;
  settings: Settings;
  rounds: Round[];
  standings: Standings;
  startGame: () => void;
  setIsFinished: (isFinished: boolean) => void;
  setPlayers: (players: Player[]) => void;
  setPhaseChoice: (phaseChoice: PhaseChoices) => void;
  setPhaseOrderChoice: (phaseOrderChoice: PhaseOrderChoices) => void;
  setPhases: (phases: Phase[]) => void;
};

const defaultData: Pick<
  DataContextType,
  "isStarted" | "isFinished" | "settings" | "rounds" | "standings"
> = {
  isStarted: false,
  isFinished: false,
  settings: {
    players: [
      { number: 1, name: "" },
      { number: 2, name: "" },
    ],
    phaseChoice: "default",
    phaseOrderChoice: "normal",
    phases: PHASES,
  },
  rounds: [],
  standings: [],
};

const dataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useLocalStorage("phase-10-data", defaultData, {
    initializeWithValue: false,
  });

  const updateData = useCallback(
    <K extends keyof DataContextType>(key: K, value: DataContextType[K]) => {
      setData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    },
    [setData],
  );

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
    [setData],
  );

  const startGame = useCallback(() => {
    updateData("isStarted", true);
    updateData(
      "standings",
      data.settings.players.map(({ number }) => ({
        player: number,
        currentPhase: 1,
        points: 0,
      })),
    );
    updateData("rounds", [
      {
        round: 1,
        distributorPlayer: 1,
        startingPlayer: 2,
        score: [],
      },
    ]);
  }, [updateData, data.settings.players]);

  const setIsFinished = useCallback(
    (isFinished: boolean) => {
      updateData("isFinished", isFinished);
    },
    [updateData],
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

      if (phaseChoice === "default") {
        updateSettings("phases", PHASES);
      } else if (phaseChoice === "short") {
        updateSettings("phases", PHASES_SHORT);
      } else {
        updateSettings("phases", []);
      }
    },
    [updateSettings],
  );

  const setPhaseOrderChoice = useCallback(
    (phaseOrderChoice: PhaseOrderChoices) => {
      updateSettings("phaseOrderChoice", phaseOrderChoice);

      if (phaseOrderChoice === "random") {
        const shuffledPhases = [...data.settings.phases].sort(
          () => Math.random() - 0.5,
        );
        updateSettings("phases", shuffledPhases);
      } else {
        const sortedPhases = [...data.settings.phases].sort(
          (a, b) => a.number - b.number,
        );
        updateSettings("phases", sortedPhases);
      }
    },
    [updateSettings, data.settings.phases],
  );

  const setPhases = useCallback(
    (phases: Phase[]) => {
      updateSettings("phases", phases);
    },
    [updateSettings],
  );

  const value = useMemo(
    () => ({
      ...data,
      startGame,
      setIsFinished,
      setPlayers,
      setPhaseChoice,
      setPhaseOrderChoice,
      setPhases,
    }),
    [
      data,
      startGame,
      setIsFinished,
      setPlayers,
      setPhaseChoice,
      setPhaseOrderChoice,
      setPhases,
    ],
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
