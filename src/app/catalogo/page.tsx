import SearchItemForm from "@/components/Molecules/SearchItemForm";
import CardList from "@/components/Organisms/CardList";
import { getItems } from "@/services/item-service";
import React from "react";

const CatalogoPage = async ({ searchParams }: { searchParams: any }) => {
  const { name, page = 1 } = searchParams;

  const items = await getItems({ name, page, limit: "20" });

  return (
    <div className="flex gap-4 p-2 flex-col max-w-screen-2xl mx-auto">
      <h3 className="text-center text-2xl font-semibold capitalize pt-6">
        Items disponíveis em estoque
      </h3>
      <SearchItemForm />
      <CardList items={items} />
    </div>
  );
};

export default CatalogoPage;
