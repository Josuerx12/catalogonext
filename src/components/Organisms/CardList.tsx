"use client";

import { getItems, GetItemsPayload } from "@/services/item-service";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import ItemCard from "../Molecules/ItemCard";
import { usePagination } from "@/hooks/usePagination";
import { L_ELLIPISIS, R_ELLIPISIS } from "@/constants/ellipisis";
import Button from "../Atoms/Button";
import CardSkeletonList from "./Skeletons/CardSkeletonList";

const CardList = ({ items }: { items: GetItemsPayload }) => {
  const params = useSearchParams();

  const pathname = usePathname();

  const router = useRouter();

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

  const { avaiablePages, isCurrentPage } = usePagination({
    page: data?.currentPage,
    totalPages: data?.totalPages,
  });

  if (isLoading) {
    return <CardSkeletonList />;
  }

  return isFetching ? (
    <CardSkeletonList />
  ) : (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-wrap gap-4 justify-between flex-1 mx-auto">
        {data &&
          data?.products.map((item) => <ItemCard item={item} key={item._id} />)}
      </div>
      <div className="flex gap-2">
        {avaiablePages.map((page) => {
          if (page === R_ELLIPISIS || page === L_ELLIPISIS) {
            return (
              <Button
                style={{ width: "2.4rem", height: "2.4rem" }}
                disabled
                variant="neutral"
                key={page}
              >
                ...
              </Button>
            );
          }

          return (
            <Button
              onClick={() =>
                router.push(
                  `${pathname}?page=${page}&name=${
                    searchByName ? searchByName : ""
                  }`
                )
              }
              style={{ width: "2.4rem", height: "2.4rem" }}
              disabled={isCurrentPage(page)}
              variant={!isCurrentPage(page) ? "neutral" : "primary"}
              key={page}
            >
              {page}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
