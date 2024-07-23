"use client";
import { useAuth } from "@/contexts/auth-context";
import {
  Home,
  LogIn,
  Menu,
  MonitorCog,
  Store,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import UserBtn from "../Atoms/UserBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <header className=" w-full bg-neutral-900 text-white h-24 px-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Catalogo JC</h2>

        <nav className="hidden sm:flex gap-5 items-center">
          <Link className="flex gap-2 items-center" href="/">
            <Home size={15} /> Página Incial
          </Link>

          <Link className="flex gap-2 items-center" href="/catalogo">
            <Store size={15} />
            Catálogo
          </Link>
          {user?.admin && (
            <Link className="flex gap-2 items-center" href="/dashboard">
              <MonitorCog size={15} />
              Dashboard
            </Link>
          )}

          {!user ? (
            <div className="gap-4 flex ">
              <Link
                className="flex gap-2 items-center bg-neutral-200 hover:bg-opacity-70 duration-200 font-semibold text-neutral-900 p-1 rounded-md"
                href="/auth/login"
              >
                Login <LogIn size={15} />
              </Link>

              <Link
                className="flex gap-2 items-center bg-neutral-500 font-semibold hover:bg-opacity-70 duration-200 text-white p-1 rounded-md"
                href="/auth/register"
              >
                Cadastre-se <UserPlus size={15} />
              </Link>
            </div>
          ) : (
            <UserBtn user={user} />
          )}
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="sm:hidden z-50 bg-neutral-700 p-2 rounded-full duration-300"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
      <nav
        className={`fixed h-screen w-full z-40 flex flex-col justify-center align-center ease-linear duration-300 bg-black text-white ${
          isOpen ? "top-0" : "-top-[110%] "
        }`}
      >
        <div className="flex flex-col w-11/12 mx-auto gap-2 items-center">
          <Link
            className="flex gap-2 items-center"
            onClick={() => setIsOpen((prev) => !prev)}
            href="/"
          >
            <Home size={15} /> Página Inicial
          </Link>

          <Link
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center"
            href="/catalogo"
          >
            <Store size={15} />
            Catálogo
          </Link>
          {user?.admin && (
            <Link className="flex gap-2 items-center" href="/dashboard">
              <MonitorCog size={15} />
              Dashboard
            </Link>
          )}

          {!user ? (
            <>
              <Link
                className="flex gap-2 items-center bg-neutral-200 hover:bg-opacity-70 duration-200 font-semibold text-neutral-900 p-1 rounded-md"
                onClick={() => setIsOpen((prev) => !prev)}
                href="/auth/login"
              >
                Login
              </Link>

              <Link
                className="flex gap-2 items-center bg-neutral-500 font-semibold hover:bg-opacity-70 duration-200 text-white p-1 rounded-md"
                onClick={() => setIsOpen((prev) => !prev)}
                href="/auth/register"
              >
                Cadastre-se
              </Link>
            </>
          ) : (
            <UserBtn user={user} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
