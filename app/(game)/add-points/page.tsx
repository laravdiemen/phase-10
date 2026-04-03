import { type Metadata } from "next";

import AddPoints from "@/app/(game)/add-points/_components/AddPoints";
import ProtectedRouteIsStarted from "@/app/_components/ProtectedRouteIsStarted";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return (
    <ProtectedRouteIsStarted>
      <AddPoints />
    </ProtectedRouteIsStarted>
  );
}
