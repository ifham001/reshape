"use client";

import { FC, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none",
        className
      )}
    />
  );
};

export default Textarea;
