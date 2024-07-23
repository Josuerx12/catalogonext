import React, { useState } from "react";
import Button from "../Atoms/Button";
import { IItem } from "@/interfaces/items";
import { Pen, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EditProductModal from "@/app/dashboard/produtos/_components/EditProductModal";
import ConfirmProductDeletion from "@/app/dashboard/produtos/_components/ConfirmProductDeletion";
const ItemCardDashboard = ({ product }: { product: IItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <EditProductModal
        isOpen={isEditing}
        item={product}
        onClose={() => setIsEditing((prev) => !prev)}
      />
      <ConfirmProductDeletion
        isOpen={isDeleting}
        item={product}
        onClose={() => setIsDeleting((prev) => !prev)}
      />
      <div className="border group relative flex flex-wrap sm:flex-nowrap p-4 md:hover:pt-10 duration-200 rounded-md w-full  sm:w-96 gap-2">
        <Image
          src={
            "https://catalogo-product-pic.s3.us-east-2.amazonaws.com/" +
            product?.photos[0]?.photo
          }
          width={1920}
          height={1080}
          className="md:w-32 w-full md:h-32 aspect-square mx-auto object-cover"
          alt={"Foto do material" + product.name}
        />
        <div className="flex flex-col gap-2">
          <div className="md:absolute md:opacity-0 duration-300 ease-in-out md:group-hover:opacity-100 flex justify-end gap-1 top-2 right-2">
            <Button
              onClick={() => setIsDeleting((prev) => !prev)}
              title={"Deletar produto: " + product.name}
              variant="danger"
            >
              <Trash size={15} />
            </Button>
            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              title={"Editar produto: " + product.name}
              variant="primary"
            >
              <Pen size={15} />
            </Button>
          </div>
          <h2 className="text-xl font-semibold line-clamp-1 h-7 ">
            {product.name}
          </h2>
          <h2 className="text-sm text-gray-600">
            Estoque: {product.stock} {product.unit}
          </h2>
          <p className="text-sm text-gray-600">
            Descrição: {product.description?.slice(0, 100)}...
          </p>
          <Link
            href={"/produto/" + product._id}
            className="text-gray-600 hover:text-gray-900 font-semibold w-fit duration-200 mt-auto"
          >
            Mais detalhes
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCardDashboard;
