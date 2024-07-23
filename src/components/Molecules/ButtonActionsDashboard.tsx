"use client";
import React, { useState } from "react";
import SearchItemForm from "./SearchItemForm";
import Button from "../Atoms/Button";
import { Plus, RefreshCcw } from "lucide-react";
import { useQueryClient } from "react-query";
import Modal from "./Modal";
import CreateProductModal from "@/app/dashboard/produtos/_components/CreateProductModal";

const ButtonActionsDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const query = useQueryClient();
  return (
    <div className="flex gap-2 flex-wrap ml-auto py-4">
      <CreateProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
      />
      <SearchItemForm />
      <Button
        onClick={() => query.refetchQueries("items")}
        title="Atualizar lista de produtos"
      >
        <RefreshCcw className="group-hover:rotate-180 duration-300" size={20} />
      </Button>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        title="Adicionar novo produto"
        variant="primary"
      >
        <div className="flex gap-2 items-center">
          <span>Novo Produto</span>
          <Plus size={20} />
        </div>
      </Button>
    </div>
  );
};

export default ButtonActionsDashboard;
