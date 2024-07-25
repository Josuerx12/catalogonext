"use client";
import React, { useState } from "react";
import SearchItemForm from "./SearchItemForm";
import Button from "../Atoms/Button";
import { Plus, RefreshCcw } from "lucide-react";
import { useQueryClient } from "react-query";
import CreateProductModal from "@/app/dashboard/produtos/_components/CreateProductModal";

const ButtonActionsDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const query = useQueryClient();
  return (
    <>
      <CreateProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
      />
      <div className="flex gap-2 flex-wrap md:flex-nowrap ml-auto py-4 w-full">
        <SearchItemForm />
        <Button
          onClick={() => query.resetQueries("items")}
          title="Atualizar lista de produtos"
        >
          <RefreshCcw
            className="group-hover:rotate-180 duration-300"
            size={20}
          />
        </Button>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          title="Adicionar novo produto"
          variant="primary"
        >
          <div className="flex gap-2 items-center flex-grow">
            <span className="text-nowrap">Novo Produto</span>
            <Plus size={20} />
          </div>
        </Button>
      </div>
    </>
  );
};

export default ButtonActionsDashboard;
