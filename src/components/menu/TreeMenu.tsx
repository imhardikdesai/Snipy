import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FilePlus, FolderPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { handleUpdateFolderModal } from "@/redux/slices/folder";
import { useDispatch } from "react-redux";
import useQueryParams from "@/hooks/useQueryParams";

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
  const dispatch = useDispatch();
  const activeTech = useQueryParams("active-tech");
  const handleSelectAction = (e: any) => {
    const key: "snippet" | "folder" = e.anchorKey;
    if (key === "snippet") {
      router.push("/new?from=" + from + `&active-tech=${activeTech}`);
    }
  };
  const openAddFolder = () => dispatch(handleUpdateFolderModal(true));

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
          <DropdownItem
            // onClick={openAddSnippet}
            startContent={<FilePlus />}
            key="snippet"
          >
            New Snippet
          </DropdownItem>
        ) : (
          <DropdownItem
            onClick={openAddFolder}
            startContent={<FolderPlus />}
            key="folder"
          >
            New Folder
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
