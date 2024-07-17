"use client";
import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      className="border-none bg-neutral-200 placeholder:text-black active:border-2 active:border-neutral-400 max-w-sm rounded outline-none block w-full p-2"
      {...props}
    />
  );
};

export default Input;
