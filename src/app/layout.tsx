import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/contexts/auth-context";
import ReactQueryProvider from "@/providers/react-query-provider";
import Navbar from "@/components/Molecules/Navbar";
import ReactToastProvider from "@/providers/react-toastfy-provider";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalogo JC",
  description: "Catalogo JC",
  creator: "Josué Carvalho",
  category: "Catalogo de Produtos",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "react-query",
    "josue",
    "carvalho",
    "jc solucoes",
    "JC Soluções",
    "Josué Carvalho",
    "Catalogo JC",
    "Estoque FST",
    "FST Serviços",
  ],
  applicationName: "Catalogo JC",
  authors: [{ name: "Josué Carvalho", url: "https://josuecarvalho.cloud" }],
  publisher: "Vercel",
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
            <ReactToastProvider>
              <Navbar />
              {children}
            </ReactToastProvider>
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
