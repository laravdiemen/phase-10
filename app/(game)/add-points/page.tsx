import { type Metadata } from "next";

import AddPoints from "@/app/(game)/add-points/_components/AddPoints";

export const metadata: Metadata = {
  title: "Punten toevoegen",
};

export default function AddPointsPage() {
  return <AddPoints />;
}
