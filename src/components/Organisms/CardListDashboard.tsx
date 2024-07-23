"use client";
import { getItems, GetItemsPayload } from "@/services/item-service";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import CardSkeletonList from "./Skeletons/CardSkeletonList";
import ItemCardDashboard from "../Molecules/ItemCardDashboard";
import Pagination from "./Pagination";

const CardListDashboard = ({ items }: { items: GetItemsPayload }) => {
  const params = useSearchParams();

  const currentPage = params.get("page") as string | undefined;
  const searchByName = params.get("name") as string | undefined;

  const { data, isLoading, refetch, isRefetching } = useQuery(
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
  return isRefetching ? (
    <CardSkeletonList />
  ) : (
    <section className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-between gap-4">
        {data?.products.map((product) => (
          <ItemCardDashboard product={product} key={product._id} />
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
