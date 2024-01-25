"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { CopyMinus, Expand, FolderClosed, Plus, Trash2 } from "lucide-react";
import CustomTreeView from "@/components/custom/CustomTreeView";
import TreeMenu from "@/components/menu/TreeMenu";
import useTreeExpansion from "@/hooks/useTreeExpansion";
import DeleteAlert from "@/components/alert/DeleteAlert";

const CollectionTab = () => {
  const { expanded, handleToggle, handleExpandAll } = useTreeExpansion([]);

  return (
    <div className="bg-[#272a2b] text-gray-300 h-full w-[315px]">
      <div className="flex items-center justify-between gap-2 p-2 pt-4">
        <div className="flex items-center justify-start gap-2">
          <FolderClosed />
          <h1 className="uppercase text-sm font-semibold">Collections</h1>
        </div>
        <div className="flex gap-1">
          <DeleteAlert
            dialogContent="Are you sure you want to delete this TechStack?"
            dialogTitle="Delete TechStack"
            trigger={
              <Button
                size="sm"
                variant="shadow"
                className="!bg-red-500"
                isIconOnly
                color="danger"
              >
                <Trash2 size={18} />
              </Button>
            }
          />
          <TreeMenu type="folder">
            <Button variant="ghost" size="sm" isIconOnly color="default">
              <Plus size={15} />
            </Button>
          </TreeMenu>
          <Button
            onClick={handleExpandAll}
            variant="ghost"
            size="sm"
            isIconOnly
            color="default"
          >
            <CopyMinus size={15} />
          </Button>
        </div>
      </div>
      <hr className="border-gray-600 rounded-full mx-1" />
      <div className="w-full flex gap-2 flex-col items-start py-2 px-2">
        <CustomTreeView expanded={expanded} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default CollectionTab;
