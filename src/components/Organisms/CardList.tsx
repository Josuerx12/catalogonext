"use client";

import { getItems, GetItemsPayload } from "@/services/item-service";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import ItemCard from "../Molecules/ItemCard";

import CardSkeletonList from "./Skeletons/CardSkeletonList";
import Pagination from "./Pagination";

const CardList = ({ items }: { items: GetItemsPayload }) => {
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
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-wrap gap-4 justify-between flex-1 mx-auto">
        {data &&
          data?.products.map((item) => <ItemCard item={item} key={item._id} />)}
      </div>
      <Pagination
        page={data?.currentPage}
        totalPages={data?.totalPages}
        searchByName={searchByName}
      />
    </div>
  );
};

export default CardList;
