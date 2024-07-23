"use client";
import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import Modal from "@/components/Molecules/Modal";
import { IItem } from "@/interfaces/items";
import { editItem } from "@/services/item-service";
import { Ban, RefreshCcw, Save } from "lucide-react";

import React, { FormEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import CardToDeletePhoto from "./CardToDeletePhoto";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: IItem;
};

const avaiableUnits = ["UN", "KG", "TON", "M"];

const EditProductModal = ({ onClose, isOpen, item }: Props) => {
  const query = useQueryClient();
  const { mutateAsync, isLoading, isError, reset } = useMutation(
    ["editProduct"],
    editItem,
    {
      onSuccess: (message) =>
        Promise.all([
          toast.success(message),
          onClose(),
          query.invalidateQueries("items"),
        ]),
      onError: () => {
        toast.error(
          "Verifique as credenciais do produto e tente novamente, caso persista entre em contato com o suporte!"
        );
      },
    }
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const credentials = new FormData(e.currentTarget);

    await mutateAsync({ id: item._id, credentials });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      title="Editando produto"
    >
      <h4 className="text-center mt-4 text-neutral-800 font-semibold">
        Preencha o formulario abaixo!
      </h4>
      <div className="flex gap-2 overflow-auto">
        {item && item.photos.length > 0 ? (
          item.photos.map((photo) => (
            <CardToDeletePhoto
              photo={photo}
              productId={item._id}
              key={item._id}
            />
          ))
        ) : (
          <p className="text-danger">Produto sem foto</p>
        )}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col  items-center gap-4 py-2"
      >
        <Input
          style={{ maxWidth: "100%" }}
          placeholder="Nome do produto"
          name="name"
          type="text"
          defaultValue={item.name}
        />
        <Input
          style={{ maxWidth: "100%" }}
          placeholder="Categoria"
          name="category"
          type="text"
          defaultValue={item.category}
        />
        <Input
          type="number"
          style={{ maxWidth: "100%" }}
          placeholder="Quatidade"
          name="stock"
          defaultValue={item.stock}
        />
        <select
          className="border-none bg-neutral-200 text-black rounded outline-none block w-full p-2"
          name="unit"
          defaultValue={item.unit}
        >
          <option>Selecione uma unidade de medida</option>
          {avaiableUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <textarea
          defaultValue={item.description}
          name="description"
          className="border-none bg-neutral-200 placeholder:text-black text-black rounded outline-none block w-full h-32 p-2"
          placeholder="Descrição do produto"
        />

        <input
          className="border-none bg-neutral-200 placeholder:text-black text-black rounded outline-none block w-full p-2"
          name="product-pics"
          type="file"
          multiple={true}
          accept="image/*"
        />

        {isError && (
          <p className="text-red-500 bg-neutral-200 p-2 rounded w-full">
            <span className="text-red-800 font-semibold">Error:</span> Verifique
            as credenciais do produto e tente novamente, caso persista entre em
            contato com o suporte!
          </p>
        )}

        <div className="flex justify-center sm:justify-end gap-2 w-full">
          <Button
            type="button"
            disabled={isLoading}
            onClick={() => {
              onClose();
              reset();
            }}
            variant="danger"
          >
            <div className="flex gap-2">
              <span>Cancelar</span> <Ban />
            </div>
          </Button>
          <Button disabled={isLoading} variant="primary">
            {isLoading ? (
              <div className="flex gap-2">
                <span>Salvando</span> <RefreshCcw className="animate-spin" />
              </div>
            ) : (
              <div className="flex gap-2">
                <span>Salvar</span> <Save />
              </div>
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProductModal;
