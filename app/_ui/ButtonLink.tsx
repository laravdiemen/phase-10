import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
  variant?: "default" | "red" | "blue" | "green" | "yellow";
};

const variantClasses = {
  default: "hocus:bg-blue-900 bg-blue-600 text-white",
  red: "hocus:bg-red-900 bg-red-600 text-white",
  blue: "hocus:bg-blue-900 bg-blue-600 text-white",
  green: "hocus:bg-green-900 bg-green-600 text-white",
  yellow: "hocus:bg-yellow-600 bg-yellow-500 text-black",
};

export default function ButtonLink({
  className = "",
  children,
  variant = "default",
  ...props
}: ButtonLinkProps) {
  const variantClass = variantClasses[variant] || "";

  return (
    <Link
      {...props}
      className={`w-fit rounded-xl px-6 py-4 font-bold transition-all duration-300 ${variantClass} ${className}`}
    >
      {children}
    </Link>
  );
}
