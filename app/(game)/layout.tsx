import Link from "next/link";
import { type ReactNode } from "react";

import Heading from "@/app/_ui/Heading";

type GameLayoutProps = {
  children: ReactNode;
};

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <div className="w-full py-10">
      <Heading as="h1" className="text-center">
        <Link
          href="/"
          className="hocus:text-blue-600"
          aria-label="Terug naar home phase 10"
        >
          Phase 10
        </Link>
      </Heading>
      {children}
    </div>
  );
}
