"use client";
import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

const Input = (props: InputProps) => {
  return (
    <input
      className="border-none bg-neutral-200 placeholder:text-black max-w-sm rounded outline-none block w-full p-2"
      {...props}
    />
  );
};

export default Input;
