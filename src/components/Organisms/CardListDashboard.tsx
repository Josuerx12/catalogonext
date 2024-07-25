"use client";
import { getItems, GetItemsPayload } from "@/services/item-service";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import CardSkeletonList from "./Skeletons/CardSkeletonList";
import Pagination from "./Pagination";
import { useAuth } from "@/contexts/auth-context";
import ItemCard from "../Molecules/ItemCard";

const CardListDashboard = ({ items }: { items: GetItemsPayload }) => {
  const { user } = useAuth();
  if (!user?.admin) {
    redirect("/catalogo");
  }
  const params = useSearchParams();

  const currentPage = params.get("page") as string | undefined;
  const searchByName = params.get("name") as string | undefined;

  const { data, isLoading, refetch, isFetching } = useQuery(
    ["items"],
    () => getItems({ page: currentPage, name: searchByName, limit: "20" }),
    { initialData: items }
  );

  useEffect(() => {
    refetch();
  }, [currentPage, searchByName]);

  if (isLoading) {
    return <CardSkeletonList />;
  }
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-between gap-4">
        {data?.products.map((product) => (
          <ItemCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <Pagination
          page={data?.currentPage}
          totalPages={data?.totalPages}
          searchByName={searchByName}
        />
      </div>
    </section>
  );
};

export default CardListDashboard;
