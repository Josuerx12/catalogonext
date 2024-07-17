"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { ComponentProps, useState } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

const InputPassword = (props: InputProps) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="relative bg-neutral-200 p-2 max-w-sm rounded flex items-center">
      <input
        className="border-none relative bg-neutral-200 placeholder:text-black active:border-2 active:border-neutral-400 max-w-sm rounded outline-none block w-full h-full"
        type={isShowing ? "text" : "password"}
        {...props}
      />
      {isShowing ? (
        <Eye
          onClick={() => setIsShowing((prev) => !prev)}
          className="block cursor-pointer"
        />
      ) : (
        <EyeOff
          onClick={() => setIsShowing((prev) => !prev)}
          className="block cursor-pointer"
        />
      )}
    </div>
  );
};

export default InputPassword;
