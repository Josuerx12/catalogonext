import { IItem } from "@/interfaces/items";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ item }: { item: IItem }) => {
  return (
    <Link
      href={`/produto/${item._id}`}
      className="max-w-[300px] w-full rounded p-2 shadow shadow-neutral-800  hover:bg-neutral-800 duration-200 group"
    >
      <h2 className="py-2 text-center font-semibold line-clamp-1 group-hover:text-white duration-200">
        {item.name}
      </h2>
      <Image
        className="aspect-square  max-w-[300px] w-full object-cover"
        src={
          "https://catalogo-product-pic.s3.us-east-2.amazonaws.com/" +
          item.photos[0].photo
        }
        alt={item.name}
        width={1920}
        height={1080}
      />
      <p className="pt-2 group-hover:text-white duration-200">
        <span className="font-semibold">Categoria: </span>
        <span className="capitalize">{item.category}</span>
      </p>

      <p className=" group-hover:text-white duration-200">
        <span className="font-semibold">Total disponivel: </span> {item.stock}
        <span className="text-sm lowercase">{item.unit}</span>
      </p>

      <p className="opacity-0 py-2 mx-auto text-sm text-center duration-200 font-semibold text-neutral-50 group-hover:opacity-100">
        Clique para mais detalhes
      </p>
    </Link>
  );
};

export default ItemCard;
