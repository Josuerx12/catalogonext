import Button from "@/components/Atoms/Button";
import Modal from "@/components/Molecules/Modal";
import { IItem } from "@/interfaces/items";
import { deleteItem } from "@/services/item-service";
import Image from "next/image";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: IItem;
};

const ConfirmProductDeletion = ({ isOpen, item, onClose }: Props) => {
  const query = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(
    ["deleteProduct"],
    deleteItem,
    {
      onSuccess: (res) =>
        Promise.all([
          toast.success(res),
          query.invalidateQueries("items"),
          onClose(),
        ]),
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Deletar Produto">
      <div className="flex flex-col gap-4 items-center text-xl">
        <h2>Deseja excluir esse produto?</h2>
        <Image
          src={`https://catalogo-product-pic.s3.us-east-2.amazonaws.com/${item?.photos[0]?.photo}`}
          width={1920}
          height={1080}
          className="aspect-square w-96 h-96 object-cover rounded-md"
          alt={"Foto do produto" + item.name}
        />
        <p>{item.name}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800"
          >
            Cancelar
          </button>
          <Button
            onClick={async () => {
              await mutateAsync(item._id);
              onClose();
            }}
            disabled={isLoading}
            variant="danger"
          >
            Excluir
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmProductDeletion;
