import ImageSkeleton from "@/components/Atoms/Skeletons/ImageSkeleton";
import LineSkeleton from "@/components/Atoms/Skeletons/LineSkeleton";
import TitleSkeleton from "@/components/Atoms/Skeletons/TitleSkeleton";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="sm:max-w-[300px] flex flex-col gap-4 w-full rounded p-2 shadow bg-neutral-200 shadow-neutral-800 animate-pulse">
      <TitleSkeleton />
      <ImageSkeleton />
      {Array.from({ length: 2 }).map((_, index) => (
        <LineSkeleton key={index} />
      ))}
    </div>
  );
};

export default CardSkeleton;
