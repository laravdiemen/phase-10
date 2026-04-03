import { type Metadata } from "next";

import Game from "@/app/(game)/game/_components/Game";
import ProtectedRouteIsStarted from "@/app/_components/ProtectedRouteIsStarted";

export const metadata: Metadata = {
  title: "Het spel",
};

export default function GamePage() {
  return (
    <ProtectedRouteIsStarted>
      <Game />
    </ProtectedRouteIsStarted>
  );
}
