"use client";
import { X } from "lucide-react";
import React from "react";
import Button from "../Atoms/Button";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ title, children, isOpen, onClose }: ModalProps) => {
  return (
    <section
      className={`fixed inset-0 m-2 flex flex-col items-center duration-300 justify-start mt-10 md:mt-28  ${
        isOpen ? " opacity-100 z-50" : "opacity-0 -z-50"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 w-screen h-screen backdrop-blur "
      />
      <main className="max-w-screen-lg overflow-auto w-11/12 sm:w-full p-6 bg-neutral-400 text-neutral-50 rounded-md shadow-md z-50">
        <header className="flex gap-2 justify-between border-b pb-4 items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Button
            title="Fechar modal"
            style={{ borderRadius: "100%", height: "fit-content" }}
            onClick={onClose}
          >
            <X size={15} />
          </Button>
        </header>

        {children}
      </main>
    </section>
  );
};

export default Modal;
