import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FilePlus, FolderPlus } from "lucide-react";
import { toast } from "react-toastify";

export default function TreeMenu({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "snippet" | "folder";
}) {
  const handleSelectAction = (e: any) => {
    const key = e.anchorKey;
    console.log(key);
    toast.success(key);
  };

  return (
    <Dropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        onSelectionChange={handleSelectAction}
      >
        {type === "snippet" ? (
          <DropdownItem startContent={<FilePlus />} key="snippet">
            New Snippet
          </DropdownItem>
        ) : (
          <DropdownItem startContent={<FolderPlus />} key="folder">
            New Folder
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
