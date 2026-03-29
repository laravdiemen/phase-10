import { type Metadata } from "next";

import Game from "@/app/(game)/game/_components/Game";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return <Game />;
}
