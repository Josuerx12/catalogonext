"use client";
import { Undo2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={router.back}>
      <div className="flex gap-2">
        Voltar <Undo2 />
      </div>
    </Button>
  );
};

export default GoBackButton;
