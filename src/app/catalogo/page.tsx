import SearchItemForm from "@/components/Molecules/SearchItemForm";
import CardList from "@/components/Organisms/CardList";
import { getItems } from "@/services/item-service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Catalogo JC",
  description: "Catalogo JC",
};

const CatalogoPage = async ({
  searchParams,
}: {
  searchParams: { name: string; page: string };
}) => {
  const { name, page = "1" } = searchParams;

  const items = await getItems({ name, page, limit: "20" });

  return (
    <div className="flex gap-4 p-2 flex-col w-11/12 mx-auto">
      <h3 className="text-center text-2xl font-semibold capitalize pt-6">
        Items disponíveis em estoque
      </h3>
      <SearchItemForm />
      <CardList items={items} />
    </div>
  );
};

export default CatalogoPage;
