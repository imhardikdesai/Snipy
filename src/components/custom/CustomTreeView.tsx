import React, { useEffect } from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Box from "@mui/material/Box";
import TreeMenu from "../menu/TreeMenu";
import { Pencil, PlusCircle, Trash } from "lucide-react";
import CollectionChip from "@/view/root-view/components/CollectionChip";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { SNIPPET } from "@/queries/query-keys";
import { fetchFoldersInsideTechStack } from "@/queries/post";
import { useAuth } from "@/hooks/useAuth";
import CustomTreeViewLoader from "../skeleton/CustomTreeView.loader";
import useQueryParams from "@/hooks/useQueryParams";
import { useDispatch } from "react-redux";
import {
  handleSetFolderModalData,
  handleUpdateFolderModal,
} from "@/redux/slices/folder";
import DeleteAlert from "../alert/DeleteAlert";

const CustomTreeItem = (props: any) => {
  const { label, nodeId, isParent, ...other } = props;
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const openFolderModal = () => {
    dispatch(handleSetFolderModalData({ name: label, id: nodeId }));
    dispatch(handleUpdateFolderModal(true));
  };
  return (
    <TreeItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      label={
        <div className="flex justify-between items-center">
          <FolderIcon />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: 1,
            }}
          >
            {label}
          </Box>
          {isHover && (
            <Box display="flex" gap={1}>
              <Pencil
                onClick={openFolderModal}
                className="cursor-pointer hover:text-yellow-400 transition-all duration-500"
                size={18}
              />
              <DeleteAlert
                dialogTitle={"Delete " + label}
                dialogContent="Are you sure you want to delete this Folder?"
                trigger={
                  <Trash
                    className="cursor-pointer hover:text-red-500 transition-all duration-500"
                    size={18}
                  />
                }
              />
              <TreeMenu from={nodeId} type="snippet">
                <PlusCircle
                  className="cursor-pointer hover:text-blue-500 transition-all duration-500"
                  size={20}
                />
              </TreeMenu>
            </Box>
          )}
        </div>
      }
      nodeId={nodeId}
      {...other}
    />
  );
};

export default function BarTreeView({ handleToggle, expanded }: any) {
  const folderQueryKey: QueryKey = [SNIPPET.FOLDER];
  const auth = useAuth();
  const tech = useQueryParams("active-tech");
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: folderQueryKey,
    queryFn: () => fetchFoldersInsideTechStack(auth.user, tech || ""),
  });

  useEffect(() => {
    refetch();
  }, [tech, refetch]);

  if (isLoading || isRefetching) {
    return <CustomTreeViewLoader />;
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <TreeView
        aria-label="icon expansion"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeToggle={handleToggle}
        expanded={expanded}
        sx={{ position: "relative" }}
      >
        {data?.map((item: any) => (
          <CustomTreeItem key={item.id} nodeId={item.id} label={item?.name}>
            {item?.posts?.map((post: any) => (
              <CollectionChip key={post?.id} post={post} />
            ))}
          </CustomTreeItem>
        ))}
      </TreeView>
    </Box>
  );
}
