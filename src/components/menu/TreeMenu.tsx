import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FilePlus, FolderPlus } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function TreeMenu({
  children,
  type,
  from,
}: {
  children: React.ReactNode;
  type: "snippet" | "folder";
  from?: string;
}) {
  const router = useRouter();
  const handleSelectAction = (e: any) => {
    const key: "snippet" | "folder" = e.anchorKey;
    toast.success(key);
    if (key === "snippet") {
      router.push("/new?from=" + from?.toLocaleLowerCase());
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu
        aria-labelledby="basic-button"
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
