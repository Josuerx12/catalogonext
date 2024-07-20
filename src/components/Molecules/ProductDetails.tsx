import { IItem } from "@/interfaces/items";
import React from "react";
import Image from "next/image";
import GoBackButton from "../Atoms/GoBackButton";
import Slider from "./Slider";

const ProductDetails = ({ item }: { item: IItem }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <GoBackButton />
      </div>
      <h1 className="capitalize font-semibold text-center text-3xl">
        {item.name}
      </h1>

      <Slider imgs={item.photos} />
      <p>
        <b>Categoria:</b>
        {item.category}
      </p>
      <p>
        <b>Descrição:</b> {item.description}
      </p>
    </div>
  );
};

export default ProductDetails;
