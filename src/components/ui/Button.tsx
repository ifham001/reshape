"use client";

import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ className, variant = "primary", ...props }) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-purple-800 text-white hover:bg-purple-900",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    />
  );
};

export default Button;
