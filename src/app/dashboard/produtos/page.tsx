import ButtonActionsDashboard from "@/components/Molecules/ButtonActionsDashboard";
import CardListDashboard from "@/components/Organisms/CardListDashboard";
import { getItems } from "@/services/item-service";
import React from "react";

const DashboardProducts = async ({
  searchParams,
}: {
  searchParams: { name: string; page: string };
}) => {
  const { name, page } = searchParams;

  const products = await getItems({ name, page, limit: "20" });

  return (
    <main className="w-11/12 border mx-auto p-2 rounded-md flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Dashboard de Produtos</h1>
      <ButtonActionsDashboard />

      <CardListDashboard items={products} />
    </main>
  );
};

export default DashboardProducts;
