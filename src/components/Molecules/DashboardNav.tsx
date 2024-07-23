"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2 justify-center my-3">
        <li>
          <Link
            href={"/dashboard"}
            className={`font-semibold ${
              pathname === "/dashboard" && "text-blue-600"
            }`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className={`font-semibold ${
              pathname === "/dashboard/produtos" && "text-blue-600"
            }`}
            href={"/dashboard/produtos"}
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            className={`font-semibold ${
              pathname === "/dashboard/usuarios" && "text-blue-600"
            }`}
            href={"/dashboard/usuarios"}
          >
            Usuários
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
