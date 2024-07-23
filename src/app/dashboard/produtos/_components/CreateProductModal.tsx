import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import Modal from "@/components/Molecules/Modal";
import { addItem } from "@/services/item-service";
import { Ban, Blocks, RefreshCcw, Save } from "lucide-react";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const avaiableUnits = ["UN", "KG", "TON", "M"];

const CreateProductModal = ({ onClose, isOpen }: Props) => {
  const query = useQueryClient();
  const { mutateAsync, isLoading, isError, reset } = useMutation(
    ["addProduct"],
    addItem,
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

    await mutateAsync(credentials);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      title="Adicionar Novo Produto"
    >
      <h4 className="text-center mt-4 text-neutral-800 font-semibold">
        Preencha o formulario abaixo!
      </h4>
      <form
        onSubmit={onSubmit}
        className="flex flex-col  items-center gap-4 py-2"
      >
        <Input
          style={{ maxWidth: "100%" }}
          placeholder="Nome do produto"
          name="name"
          type="text"
        />
        <Input
          style={{ maxWidth: "100%" }}
          placeholder="Categoria"
          name="category"
          type="text"
        />
        <Input
          type="number"
          style={{ maxWidth: "100%" }}
          placeholder="Quatidade"
          name="stock"
        />
        <select
          className="border-none bg-neutral-200 text-black rounded outline-none block w-full p-2"
          name="unit"
        >
          <option>Selecione uma unidade de medida</option>
          {avaiableUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <textarea
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
          <Button disabled={isLoading} onClick={onClose} variant="danger">
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

export default CreateProductModal;
