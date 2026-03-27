import { type ReactNode } from "react";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
};

const defaultClasses = {
  h1: "font-russo-one text-7xl md:text-8xl -skew-x-12 mb-2",
  h2: "text-3xl text-stone-500 font-bold mb-2",
  h3: "text-2xl font-medium mb-4",
  h4: "text-xl font-medium mb-2",
  h5: "text-lg font-medium mb-2",
  h6: "text-base font-medium mb-2",
};

export default function Heading({
  as,
  className = "",
  children,
}: HeadingProps) {
  const HeadingTag = as;
  const defaultClass = defaultClasses[HeadingTag] || "";

  return (
    <HeadingTag
      className={`${defaultClass} ${className} has-[.icon-square]:flex has-[.icon-square]:items-center has-[.icon-square]:gap-3`}
    >
      {children}
    </HeadingTag>
  );
}
