import { Avatar, Badge, Tooltip } from "@nextui-org/react";
import { Pencil } from "lucide-react";
import React from "react";

const TechStackAvatar = ({
  color,
  withBadge = false,
  imgUrl,
  ...props
}: {
  color:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | undefined;
  withBadge?: boolean;
  imgUrl: string;
  onClick?: () => void;
}) => {
  return withBadge ? (
    <Badge
      isOneChar
      content={<Pencil size={8} />}
      color="warning"
      shape="circle"
      size="sm"
      placement="top-right"
      className="cursor-pointer"
    >
      <Tooltip placement="right" color="warning" content="Javascript" size="sm">
        <Avatar
          isBordered
          radius="md"
          src={imgUrl}
          className="cursor-pointer"
          color={color}
          {...props}
        />
      </Tooltip>
    </Badge>
  ) : (
    <Tooltip placement="right" color="warning" content="Javascript" size="sm">
      <Avatar
        isBordered
        radius="md"
        src={imgUrl}
        className="cursor-pointer"
        color={color}
        {...props}
      />
    </Tooltip>
  );
};

export default TechStackAvatar;
