import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`hover:bg-opacity-80 disabled:opacity-80 duration-300 px-2 py-2 shadow  rounded ${
        props.variant === "primary"
          ? "bg-blue-600 text-white"
          : props.variant === "danger"
          ? "bg-red-700 text-white"
          : props.variant === "neutral"
          ? "bg-neutral-600 text-white"
          : "bg-neutral-900 text-white"
      } `}
    >
      {props.children}
    </button>
  );
};

export default Button;
