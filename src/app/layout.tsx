import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/contexts/auth-context";
import ReactQueryProvider from "@/providers/react-query-provider";
import Navbar from "@/components/Organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalogo JC",
  description: "Catalogo JC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthContextProvider>
          <ReactQueryProvider>
            <Navbar />
            {children}
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
