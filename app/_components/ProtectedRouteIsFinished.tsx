"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";

import { useData } from "@/app/_contexts/DataContext";

type ProtectedRouteIsFinishedProps = {
  children: ReactNode;
};

export default function ProtectedRouteIsFinished({
  children,
}: ProtectedRouteIsFinishedProps) {
  const { isFinished } = useData();
  const router = useRouter();

  useEffect(() => {
    if (!isFinished) {
      router.push("/");
    }
  }, [isFinished, router]);

  if (!isFinished) return null;

  return children;
}
