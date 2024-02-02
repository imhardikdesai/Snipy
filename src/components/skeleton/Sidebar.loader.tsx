"use client";
import React from "react";
import { Skeleton } from "@nextui-org/react";

const SideBarLoader = () => {
  return (
    <div className="bg-[#1E2021] text-white fixed h-full w-[75px]">
      <div className="w-full flex gap-6 flex-col items-center justify-between h-full py-6">
        <div className="flex gap-6 flex-col justify-center items-center">
          <Skeleton className="flex rounded-full w-12 h-12" />
          <Skeleton className="flex rounded-full w-12 h-12" />
          <Skeleton className="flex rounded-full w-12 h-12" />
          <Skeleton className="flex rounded-full w-12 h-12" />
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default SideBarLoader;
