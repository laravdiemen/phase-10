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

type Result = Standings[number] & { name: string; place: number };

type DataContextType = {
  isStarted: boolean;
  isFinished: boolean;
  settings: Settings;
  rounds: Round[];
  currentRound: number;
  standings: Standings;
  result: Result[];
  winner: Result[];
  startGame: () => void;
  setIsFinished: (isFinished: boolean) => void;
  setPlayers: (players: Player[]) => void;
  setPhaseChoice: (phaseChoice: PhaseChoices) => void;
  setPhaseOrderChoice: (phaseOrderChoice: PhaseOrderChoices) => void;
  setPhases: (phases: Phase[]) => void;
  addRoundScore: (score: Score) => void;
  nextRound: () => void;
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

  const currentRound =
    data.rounds.length > 0 ? data.rounds[data.rounds.length - 1].round : 0;

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
    updateSettings(
      "phases",
      data.settings.phases.map((phase, index) => ({
        ...phase,
        number: index + 1,
      })),
    );
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
  }, [updateData, updateSettings, data.settings]);

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

  const setPhases = useCallback(
    (phases: Phase[]) => {
      updateSettings("phases", phases);
    },
    [updateSettings],
  );

  const updatePhases = useCallback(
    (phaseChoice: PhaseChoices, phaseOrderChoice: PhaseOrderChoices) => {
      let phases: Phase[] = data.settings.phases;

      if (phaseChoice === "default") {
        phases = PHASES;
      } else if (phaseChoice === "short") {
        phases = PHASES_SHORT;
      }

      const orderedPhases =
        phaseOrderChoice === "random"
          ? [...phases].sort(() => Math.random() - 0.5)
          : [...phases].sort((a, b) => a.number - b.number);

      setPhases(orderedPhases);
    },
    [data.settings.phases, setPhases],
  );

  const setPhaseChoice = useCallback(
    (phaseChoice: PhaseChoices) => {
      updateSettings("phaseChoice", phaseChoice);
      updatePhases(phaseChoice, data.settings.phaseOrderChoice);
    },
    [updateSettings, updatePhases, data.settings.phaseOrderChoice],
  );

  const setPhaseOrderChoice = useCallback(
    (phaseOrderChoice: PhaseOrderChoices) => {
      updateSettings("phaseOrderChoice", phaseOrderChoice);
      updatePhases(data.settings.phaseChoice, phaseOrderChoice);
    },
    [updateSettings, updatePhases, data.settings.phaseChoice],
  );

  const addRoundScore = useCallback(
    (score: Score) => {
      const updatedRounds = [...data.rounds];
      const currentRoundIndex = updatedRounds.findIndex(
        (r) => r.round === currentRound,
      );

      if (currentRoundIndex !== -1) {
        const existingScoreIndex = updatedRounds[
          currentRoundIndex
        ].score.findIndex((s) => s.player === score.player);

        if (existingScoreIndex !== -1) {
          updatedRounds[currentRoundIndex].score[existingScoreIndex] = score;
        } else {
          updatedRounds[currentRoundIndex].score.push(score);
        }
        updateData("rounds", updatedRounds);
      }
    },
    [updateData, data.rounds, currentRound],
  );

  const updateStandings = useCallback(() => {
    const newStandings = data.standings.map((standing) => {
      const playerScores = data.rounds.flatMap((round) =>
        round.score.filter((score) => score.player === standing.player),
      );

      const totalPoints = playerScores.reduce(
        (total, score) => total + score.points,
        0,
      );

      const currentPhase =
        data.settings.phases[
          Math.max(
            0,
            ...playerScores
              .filter((score) => score.phaseCompleted)
              .map((score) => score.phase),
          )
        ]?.number || 1;

      return {
        ...standing,
        points: totalPoints,
        currentPhase,
      };
    });

    updateData("standings", newStandings);
  }, [updateData, data.standings, data.rounds, data.settings.phases]);

  const nextRound = useCallback(() => {
    // TODO: Check if there is a winner, if so, set the game as finished and do not create a new round

    const nextRoundNumber = currentRound + 1;
    const nextDistributorPlayer =
      (data.rounds[currentRound - 1].distributorPlayer %
        data.settings.players.length) +
      1;
    const nextStartingPlayer =
      (data.rounds[currentRound - 1].startingPlayer %
        data.settings.players.length) +
      1;

    const newRound: Round = {
      round: nextRoundNumber,
      distributorPlayer: nextDistributorPlayer,
      startingPlayer: nextStartingPlayer,
      score: [],
    };

    updateData("rounds", [...data.rounds, newRound]);
    updateStandings();
  }, [
    updateData,
    updateStandings,
    data.rounds,
    currentRound,
    data.settings.players.length,
  ]);

  const result = useMemo(() => {
    const sortedStandings = [...data.standings].sort((a, b) => {
      if (b.currentPhase === a.currentPhase) {
        return a.points - b.points;
      }
      return b.currentPhase - a.currentPhase;
    });

    const enrichedStandings = sortedStandings.map((standing) => {
      const playerInfo = data.settings.players.find(
        (p) => p.number === standing.player,
      );
      return {
        ...standing,
        name: playerInfo?.name || "",
      };
    });

    return enrichedStandings.map((standing, index) => {
      const previousStanding = enrichedStandings[index - 1];
      const place =
        previousStanding &&
        previousStanding.currentPhase === standing.currentPhase &&
        previousStanding.points === standing.points
          ? index
          : index + 1;

      return {
        ...standing,
        place,
      };
    });
  }, [data.standings, data.settings.players]);

  const winner = useMemo(() => {
    return result.filter((r) => r.place === 1);
  }, [result]);

  const value = useMemo(
    () => ({
      ...data,
      currentRound,
      startGame,
      setIsFinished,
      setPlayers,
      setPhaseChoice,
      setPhaseOrderChoice,
      setPhases,
      addRoundScore,
      nextRound,
      result,
      winner,
    }),
    [
      data,
      currentRound,
      startGame,
      setIsFinished,
      setPlayers,
      setPhaseChoice,
      setPhaseOrderChoice,
      setPhases,
      addRoundScore,
      nextRound,
      result,
      winner,
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
