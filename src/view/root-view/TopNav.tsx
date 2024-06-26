"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Info, SearchIcon } from "lucide-react";
import AppInfo from "@/components/modal/AppInfo";

const TopNavigation = () => {
  return (
    <div className=" text-white w-full flex bg-[#272a2b] items-center border-b border-b-gray-600 rounded-none">
      <Input
        isClearable
        radius="lg"
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
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "",
          ],
        }}
        placeholder="Find by collection, tag, code..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/35 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      {/* <Button
        color="primary"
        variant="shadow"
        isIconOnly
        size="sm"
        className="me-2 rounded-md !bg-[#1365DB]"
        onClick={() => router.push("/new")}
      >
        <PlusCircle size={20} />
      </Button> */}
      <AppInfo
        trigger={
          <Button
            color="secondary"
            variant="shadow"
            isIconOnly
            size="sm"
            className="me-2 rounded-full absolute bottom-5 right-1 !bg-[#864DC1] z-40"
          >
            <Info size={20} />
          </Button>
        }
      />
    </div>
  );
};

export default TopNavigation;
