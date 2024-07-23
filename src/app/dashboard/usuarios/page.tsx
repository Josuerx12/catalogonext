"use client";
import { useAuth } from "@/contexts/auth-context";
import { redirect } from "next/navigation";
import React from "react";

const DasboardUsers = () => {
  const { user } = useAuth();

  if (!user?.admin) {
    redirect("/catalogo");
  }
  return <div>DasboardUsers</div>;
};

export default DasboardUsers;
