"use client";
import React from "react";
import { Badge, Button, cn } from "@nextui-org/react";
import { FolderClosed, Plus } from "lucide-react";

const CollectionTab = () => {
  return (
    <div className="bg-[#272a2b] text-gray-300 h-full w-[315px]">
      <div className="flex items-center justify-between gap-2 p-2 pt-4">
        <div className="flex items-center justify-start gap-2">
          <FolderClosed />
          <h1 className="uppercase text-base font-semibold">Collections</h1>
        </div>
        <Button variant="ghost" size="sm" isIconOnly color="default">
          <Plus size={20} />
        </Button>
      </div>
      <hr className="border-gray-600 rounded-full p-1 mx-1" />
      <div className="w-full flex gap-2 flex-col items-start py-2 px-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => (
          <React.Fragment key={ele}>
            <div className="flex items-center gap-3 cursor-pointer transition-all duration-500 hover:bg-[#141415c2] w-full rounded-md ps-4 py-[5px]">
              <Badge
                size="sm"
                content=""
                color="success"
                className={cn("border-0 min-w-2 min-h-2 w-2 h-2", "bg-red-500")}
                shape="circle"
                placement="top-left"
              >
                <span></span>
              </Badge>
              <h1>Title {ele}</h1>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CollectionTab;
