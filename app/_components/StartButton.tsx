"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

import { useData } from "@/app/_contexts/DataContext";
import Button from "@/app/_ui/Button";

type StartButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "red" | "blue" | "green" | "yellow";
};

export default function StartButton({
  children,
  className,
  variant,
}: StartButtonProps) {
  const { resetData } = useData();
  const router = useRouter();

  const handleOnClickStartGame = () => {
    resetData();
    router.push("/setup");
  };

  return (
    <Button
      onClick={handleOnClickStartGame}
      className={className}
      variant={variant}
    >
      <PlayIcon />
      {children}
    </Button>
  );
}
