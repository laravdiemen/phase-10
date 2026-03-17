import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
};

export default function ButtonLink({
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`hocus:bg-blue-900 w-fit rounded-sm bg-blue-600 px-4 py-3 font-bold text-white transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
