import CardSkeleton from "@/components/Molecules/Skeletons/CardSkeleton";
import React from "react";

const CardSkeletonList = () => {
  return (
    <div className="flex w-full flex-wrap gap-4 justify-between flex-1 mx-auto">
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CardSkeletonList;
