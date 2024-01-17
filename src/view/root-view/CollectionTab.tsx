"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { FolderClosed, Plus } from "lucide-react";
import CustomTreeView from "@/components/custom/CustomTreeView";
import TreeMenu from "@/components/menu/TreeMenu";

const CollectionTab = () => {
  return (
    <div className="bg-[#272a2b] text-gray-300 h-full w-[315px]">
      <div className="flex items-center justify-between gap-2 p-2 pt-4">
        <div className="flex items-center justify-start gap-2">
          <FolderClosed />
          <h1 className="uppercase text-sm font-semibold">Collections</h1>
        </div>
        <Button variant="ghost" size="sm" isIconOnly color="default">
          <TreeMenu type="folder">
            <Plus size={20} />
          </TreeMenu>
        </Button>
      </div>
      <hr className="border-gray-600 rounded-full mx-1" />
      <div className="w-full flex gap-2 flex-col items-start py-2 px-2">
        <CustomTreeView />
      </div>
    </div>
  );
};

export default CollectionTab;
