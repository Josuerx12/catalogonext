import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/contexts/auth-context";
import ReactQueryProvider from "@/providers/react-query-provider";
import Image from "next/image";
import Sidebar from "@/components/Molecules/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalogo JC - ADMIN Dashboard",
  description: "Catalogo JC - ADMIN Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
