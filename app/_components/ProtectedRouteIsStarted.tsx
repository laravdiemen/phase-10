"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";

import { useData } from "@/app/_contexts/DataContext";

type ProtectedRouteIsStartedProps = {
  children: ReactNode;
};

export default function ProtectedRouteIsStarted({
  children,
}: ProtectedRouteIsStartedProps) {
  const { isStarted } = useData();
  const router = useRouter();

  useEffect(() => {
    if (!isStarted) {
      router.push("/");
    }
  }, [isStarted, router]);

  if (!isStarted) return null;

  return children;
}
