import { type ReactNode } from "react";

type GameLayoutProps = {
  children: ReactNode;
};

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <>
      <h1>Phase 10</h1>
      {children}
    </>
  );
}
