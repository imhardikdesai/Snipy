import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Badge, Tooltip } from "@nextui-org/react";
import { Pencil } from "lucide-react";
import React from "react";

const TechStackAvatar = ({
  color,
  withBadge = false,
  icon,
  name,
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
  icon: string;
  onClick?: () => void;
  name: string;
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
      <Tooltip placement="right" color="warning" content={name} size="sm">
        {/* <Icon icon="logos:javascript" /> */}
        <Avatar
          isBordered
          radius="md"
          // src={imgUrl}
          icon={<Icon icon={icon} fontSize={40} />}
          className="cursor-pointer"
          color={color}
          {...props}
        />
      </Tooltip>
    </Badge>
  ) : (
    <Tooltip placement="right" color="warning" content={name} size="sm">
      <Avatar
        isBordered
        radius="md"
        // src={imgUrl}
        icon={<Icon icon={icon} fontSize={40} />}
        className="cursor-pointer"
        color={color}
        {...props}
      />
    </Tooltip>
  );
};

export default TechStackAvatar;
