import * as React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Box from "@mui/material/Box";
import TreeMenu from "../menu/TreeMenu";
import { PlusCircle } from "lucide-react";
import CollectionChip from "@/view/root-view/components/CollectionChip";

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
          {isHover && (
            <TreeMenu from={label} type="snippet">
              <PlusCircle className="cursor-pointer" size={20} />
            </TreeMenu>
          )}
        </div>
      }
      nodeId={nodeId}
      {...other}
    />
  );
};

export default function BarTreeView({ handleToggle, expanded }: any) {
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
        <CustomTreeItem nodeId="1" label="Applications">
          <CollectionChip id={1} />
        </CustomTreeItem>
        <CustomTreeItem nodeId="5" label="Documents">
          <CollectionChip id={2} />
          <CollectionChip id={3} />
          <CollectionChip id={4} />
        </CustomTreeItem>
      </TreeView>
    </Box>
  );
}
