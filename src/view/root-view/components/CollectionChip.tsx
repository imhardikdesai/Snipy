import { getRandomCollectionPillColor } from "@/constant/constant";
import { Badge, cn } from "@nextui-org/react";
import React from "react";

const CollectionChip = ({ id }: any) => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-3 cursor-pointer transition-all duration-500 hover:bg-[#141415c2] w-full rounded-md ps-4 py-[5px] my-[6px]">
        <Badge
          size="sm"
          content=""
          color="success"
          style={{ backgroundColor: getRandomCollectionPillColor() }}
          className={cn("border-0 min-w-2 min-h-2 w-2 h-2 scale-75")}
          shape="circle"
          placement="top-left"
        >
          <span></span>
        </Badge>
        <h1>Title Lorem ipsum dolor sit amet consectetur. {id}</h1>
      </div>
    </React.Fragment>
  );
};

export default CollectionChip;
