import { type ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-stone-50/90 p-8 shadow-2xl backdrop-blur-lg md:p-10 lg:p-12 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 ${className}`}
    >
      {children}
    </div>
  );
}
