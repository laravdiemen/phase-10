import Link, { type LinkProps } from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type BaseButtonProps = {
  className?: string;
  children: ReactNode;
  variant?: "default" | "red" | "blue" | "green" | "yellow" | "outline";
  size?: "default" | "small";
};

type ButtonAsLinkProps = BaseButtonProps &
  LinkProps & {
    href: LinkProps["href"];
    onClick?: never;
  };

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
    onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClasses = {
  default: "hocus:bg-blue-900 shadow-xl shadow-blue-100 bg-blue-600 text-white",
  red: "hocus:bg-red-800 shadow-xl shadow-red-100 bg-red-600 text-white",
  blue: "hocus:bg-blue-900 shadow-xl shadow-blue-100 bg-blue-600 text-white",
  green:
    "hocus:bg-green-900 shadow-xl shadow-green-100 bg-green-600 text-white",
  yellow:
    "hocus:bg-yellow-600 shadow-xl shadow-yellow-100 bg-yellow-500 text-black",
  outline:
    "hocus:bg-stone-500 hocus:text-stone-50 text-stone-500 border border-dashed border-stone-500",
};

const sizeClasses = {
  default: "px-6 py-4",
  small: "px-5 py-3 text-sm",
};

export default function Button({
  className = "",
  children,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantClass = variantClasses[variant] || "";
  const sizeClass = sizeClasses[size] || "";
  const sharedClasses = `flex w-fit items-center justify-center cursor-pointer gap-2 rounded-xl font-bold uppercase transition-all duration-300 [&_svg]:size-6 [&_svg]:min-w-6 ${variantClass} ${sizeClass} ${className}`;

  if ("href" in props) {
    const linkProps = props as ButtonAsLinkProps;

    return (
      <Link {...linkProps} className={sharedClasses}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;

  return (
    <button {...buttonProps} className={sharedClasses}>
      {children}
    </button>
  );
}
