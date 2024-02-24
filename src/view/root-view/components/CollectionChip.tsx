import React from "react";
import Link from "next/link";
import { getRandomCollectionPillColor } from "@/constant/constant";
import { Badge, cn } from "@nextui-org/react";
import useQueryParams from "@/hooks/useQueryParams";

const CollectionChip = ({ post }: any) => {
  const activeTech = useQueryParams("active-tech");
  return (
    <React.Fragment>
      <Link href={"/post/" + post?.id + `?active-tech=${activeTech}`}>
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
          <h1>{post?.title}</h1>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default CollectionChip;
