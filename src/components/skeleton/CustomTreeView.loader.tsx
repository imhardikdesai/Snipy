import React from "react";
import { Box } from "@mui/material";
import { TreeView } from "@mui/x-tree-view/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Skeleton } from "@nextui-org/react";
const CustomTreeItem = (props: any) => {
  const { label, nodeId, isParent, ...other } = props;
  const [isHover, setIsHover] = React.useState<boolean>(false);
  return (
    <TreeItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      label={
        <div className="flex justify-between items-center">
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
        </div>
      }
      nodeId={nodeId}
      {...other}
    />
  );
};

const CustomTreeViewLoader = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <TreeView
        aria-label="icon expansion"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
        <Skeleton className="h-5 bg-slate-400 w-full rounded-lg" />
      </TreeView>
    </Box>
  );
};

export default CustomTreeViewLoader;
