"use client";

import { useData } from "@/app/_contexts/DataContext";
import Heading from "@/app/_ui/Heading";

export default function FinishHeading() {
  const { winner } = useData();

  if (winner.length === 0) {
    return null;
  }

  return (
    <Heading as="h2" className="text-center">
      {winner.length > 1
        ? "We hebben een gelijkspel!"
        : `${winner[0].name} heeft gewonnen!`}
    </Heading>
  );
}
