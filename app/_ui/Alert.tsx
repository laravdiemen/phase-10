import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { type ReactNode } from "react";

type AlertProps = {
  className?: string;
  children: ReactNode;
  variant: "info" | "success" | "warning" | "error";
};

const variantClasses = {
  info: "bg-blue-50 text-blue-500",
  success: "bg-green-50 text-green-700",
  warning: "bg-yellow-50 text-yellow-800",
  error: "bg-red-50 text-red-600",
};

export default function Alert({
  className = "",
  children,
  variant,
  ...props
}: AlertProps) {
  const variantClass = variantClasses[variant];

  const Icon = () => {
    switch (variant) {
      case "info":
        return <InformationCircleIcon />;
      case "success":
        return <CheckCircleIcon />;
      case "warning":
        return <ExclamationTriangleIcon />;
      case "error":
        return <ExclamationCircleIcon />;
    }
  };

  return (
    <div
      {...props}
      className={`mb-4 flex items-center gap-4 rounded-xl px-6 py-4 [&_svg]:size-6 ${variantClass} ${className}`}
    >
      {Icon()}

      {children}
    </div>
  );
}
