"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { ChevronUp, HelpCircle, User2 } from "lucide-react";
import { IUser } from "@/interfaces/user";
import Link from "next/link";

const UserBtn = ({ user }: { user: IUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen((prev) => !prev)} variant="neutral">
        <div className="flex items-center gap-2">
          <h5>{user.name}</h5>
          {user.photo ? (
            <Image
              alt={user.name}
              src={
                `https://userphotoscatalogo.s3.us-east-2.amazonaws.com/` +
                user.photo
              }
              width={1920}
              height={1080}
              className="object-cover aspect-square rounded-full w-8 h-8"
            />
          ) : (
            <Image
              alt="Sem foto de perfil"
              width={1920}
              height={1080}
              className="object-cover aspect-square rounded-full w-8 h-8"
              src={"/no-profile.jpg"}
            />
          )}
          <ChevronUp
            className={`duration-200 ease-linear ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed w-full h-full bg-transparent inset-0 z-10"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <div className="bg-neutral-500 text-white absolute flex flex-col z-20 gap-1 w-full mt-3 rounded-md p-2">
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/profile">
              <Button style={{ width: "100%" }}>
                <div className="flex justify-between">
                  Perfil <User2 />
                </div>
              </Button>
            </Link>
            <Link
              onClick={() => setIsOpen((prev) => !prev)}
              href="https://api.whatsapp.com/send?phone=55022997979633"
              target="_blank"
            >
              <Button style={{ width: "100%" }}>
                <div className="flex justify-between">
                  Suporte <HelpCircle />
                </div>
              </Button>
            </Link>
            <hr />

            <Button
              onClick={() => setIsOpen((prev) => !prev)}
              variant="danger"
              style={{ width: "100%" }}
            >
              Sair
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserBtn;
