"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Atoms/Button";
import { useMutation, useQueryClient } from "react-query";
import { deletePhotoOfItem } from "@/services/item-service";

const CardToDeletePhoto = ({
  photo,
  productId,
}: {
  photo: { _id: string; photo: string };
  productId: string;
}) => {
  const query = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(
    ["deletePhoto"],
    deletePhotoOfItem,
    {
      onSuccess: () => query.invalidateQueries("items"),
    }
  );
  return (
    <div className="flex flex-col gap-3 border p-3 rounded w-fit">
      <Image
        className="rounded shadow bg-neutral-400 w-36 h-36 aspect-square object-cover"
        width={400}
        height={400}
        src={`https://catalogo-product-pic.s3.us-east-2.amazonaws.com/${photo.photo}`}
        alt={photo.photo}
      />
      <Button
        type="button"
        onClick={async () =>
          await mutateAsync({ photoId: photo._id, productId })
        }
        variant="danger"
        disabled={isLoading}
      >
        {isLoading ? "Deletando" : "Deletar"}
      </Button>
    </div>
  );
};

export default CardToDeletePhoto;
