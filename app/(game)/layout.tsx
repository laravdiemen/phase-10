import { type ReactNode } from "react";

import Heading from "@/app/_ui/Heading";

type GameLayoutProps = {
  children: ReactNode;
};

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <>
      <Heading as="h1" className="text-center">
        Phase 10
      </Heading>
      {children}
    </>
  );
}
