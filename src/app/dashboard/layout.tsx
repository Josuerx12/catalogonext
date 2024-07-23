import DashboardNav from "@/components/Molecules/DashboardNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogo JC - ADMIN Dashboard",
  description: "Catalogo JC - ADMIN Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl mt-2 font-bold text-center text-neutral-800">
        Dashboards
      </h2>
      <DashboardNav />
      <main>{children}</main>
    </div>
  );
}
