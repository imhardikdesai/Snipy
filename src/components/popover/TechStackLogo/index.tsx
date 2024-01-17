import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Input,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import { TECH_STACK_ICONS } from "@/constant/constant";
import { SearchIcon } from "lucide-react";
import CustomRadio from "@/components/custom/CustomRadio";

export default function TechStackLogo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchValue, setSearchValue] = useState("");
  const [newSelectedIcon, setNewSelectedIcon] = useState<string | null>(null);

  const filteredIcons = TECH_STACK_ICONS.filter((icon) =>
    icon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const content = (
    <PopoverContent className="max-w-[350px] flex border border-gray-500">
      <Input
        isClearable
        onClear={() => setSearchValue("")}
        radius="md"
        size="sm"
        classNames={{
          label: "text-black/50 dark:text-white/35",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-transparent",
            "dark:bg-transparent",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-transparent",
            "dark:hover:bg-transparent",
            "group-data-[focused=true]:bg-transparent",
            "dark:group-data-[focused=true]:bg-transparent",
            "!cursor-text",
            "my-2",
          ],
        }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/35 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <ScrollShadow
        orientation="vertical"
        offset={100}
        hideScrollBar
        className="max-h-[250px] min-w-[300px]"
      >
        <RadioGroup
          // defaultValue="javascript"
          onChange={(e) => setNewSelectedIcon(e.target.value)}
          className="flex techstack-radio justify-start item-center w-full"
        >
          {filteredIcons.length > 0 ? (
            filteredIcons.map((ele) => (
              <CustomRadio key={ele.icon} icon={ele.icon} value={ele.value}>
                {ele.name}
              </CustomRadio>
            ))
          ) : (
            <div className="text-center w-full">No icons found</div>
          )}
        </RadioGroup>
      </ScrollShadow>
      <Button
        isDisabled={newSelectedIcon === null}
        className="mt-2"
        color="primary"
        variant="ghost"
      >
        Update
      </Button>
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
      <Popover
        onClose={() => {
          setNewSelectedIcon(null);
          setSearchValue("");
        }}
        showArrow
        offset={10}
        placement="right"
        backdrop={"blur"}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        {content}
      </Popover>
    </div>
  );
}
