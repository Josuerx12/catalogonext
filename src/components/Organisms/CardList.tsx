"use client";

import { GetItemPayload, getItems } from "@/services/item-service";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import ItemCard from "../Molecules/ItemCard";

const CardList = ({ items }: { items: GetItemPayload }) => {
  const params = useSearchParams();

  const currentPage = params.get("page") as string | undefined;
  const searchByName = params.get("name") as string | undefined;

  const { data, isLoading, refetch } = useQuery(
    ["items"],
    () => getItems({ page: currentPage, name: searchByName, limit: "20" }),
    { initialData: items }
  );

  useEffect(() => {
    refetch();
  }, [currentPage, searchByName]);

  if (isLoading) {
    return <p>Carregando items...</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-between flex-1 mx-auto">
      {data &&
        data?.products.map((item) => <ItemCard item={item} key={item._id} />)}
    </div>
  );
};

export default CardList;
