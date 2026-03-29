import Link, { type LinkProps } from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type BaseButtonLinkProps = {
  className?: string;
  children: ReactNode;
  variant?: "default" | "red" | "blue" | "green" | "yellow";
};

type ButtonLinkAsLinkProps = BaseButtonLinkProps &
  LinkProps & {
    href: LinkProps["href"];
    onClick?: never;
  };

type ButtonLinkAsButtonProps = BaseButtonLinkProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
    onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
  };

type ButtonLinkProps = ButtonLinkAsLinkProps | ButtonLinkAsButtonProps;

const variantClasses = {
  default: "hocus:bg-blue-900 shadow-blue-100 bg-blue-600 text-white",
  red: "hocus:bg-red-800 shadow-red-100 bg-red-600 text-white",
  blue: "hocus:bg-blue-900 shadow-blue-100 bg-blue-600 text-white",
  green: "hocus:bg-green-900 shadow-green-100 bg-green-600 text-white",
  yellow: "hocus:bg-yellow-600 shadow-yellow-100 bg-yellow-500 text-black",
};

export default function ButtonLink({
  className = "",
  children,
  variant = "default",
  ...props
}: ButtonLinkProps) {
  const variantClass = variantClasses[variant] || "";
  const sharedClasses = `flex w-fit items-center gap-2 rounded-xl px-6 py-4 font-bold uppercase shadow-xl transition-all duration-300 [&_svg]:size-6 ${variantClass} ${className}`;

  if ("href" in props) {
    const linkProps = props as ButtonLinkAsLinkProps;

    return (
      <Link {...linkProps} className={sharedClasses}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonLinkAsButtonProps;

  return (
    <button {...buttonProps} className={sharedClasses}>
      {children}
    </button>
  );
}
