"use client";
import { L_ELLIPISIS, R_ELLIPISIS } from "@/constants/ellipisis";
import { usePagination } from "@/hooks/usePagination";
import React from "react";
import Button from "../Atoms/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  page?: number;
  totalPages?: number;
  searchByName?: string;
};

const Pagination = ({ page, totalPages, searchByName }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { avaiablePages, isCurrentPage } = usePagination({
    page,
    totalPages,
  });
  return (
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
              router.replace(
                `${pathname}?page=${page}&name=${
                  searchByName ? searchByName : ""
                }`,
                { scroll: true }
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
  );
};

export default Pagination;
