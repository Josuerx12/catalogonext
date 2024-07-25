import React, { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className="border-none bg-neutral-200 text-black  placeholder:text-black max-w-sm rounded outline-none block w-full p-2"
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
