"use client";
import { useAuth } from "@/contexts/auth-context";
import { redirect } from "next/navigation";
import React from "react";

const DashboardHome = () => {
  const { user } = useAuth();

  if (!user?.admin) {
    redirect("/catalogo");
  }
  return (
    <main className="w-full flex justify-center">
      <p>Pagina inicial da dashboard</p>
    </main>
  );
};

export default DashboardHome;
