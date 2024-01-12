"use client";
import React, { useEffect } from "react";
import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import { LogOut, Plus, Settings } from "lucide-react";
import TechStackModal from "@/components/modal/TechStackModal";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const SideBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const auth = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [current, setCurrent] = React.useState<any>(null);

  useEffect(() => {
    setCurrent(searchParams.get("active-tech") || 0);
  }, [searchParams]);

  return (
    <div className="bg-[#1E2021] text-white fixed h-full w-[75px]">
      <div className="w-full flex gap-6 flex-col items-center justify-between h-full py-6">
        <div className="flex gap-6 flex-col justify-center items-center">
          {[0, 1, 2, 3].map((ele) => (
            <React.Fragment key={ele}>
              <Avatar
                onClick={() => router.push(`/?active-tech=${ele}`)}
                isBordered
                radius="md"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="cursor-pointer"
                color={ele == current ? "warning" : "default"}
              />
            </React.Fragment>
          ))}
          <Button onClick={onOpen} isIconOnly color="warning" variant="faded">
            <Plus />
          </Button>
          <TechStackModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
        <div className="flex gap-4 flex-col justify-center items-center">
          <div>
            <Button variant="ghost" size="sm" isIconOnly color="default">
              <Settings size={20} />
            </Button>
          </div>
          <Avatar
            className="cursor-pointer"
            src={
              auth?.user?.photoURL ||
              "https://i.pravatar.cc/150?u=a042581f4e29026704d"
            }
            size="md"
          />
          <Button
            onClick={auth.logout}
            variant="faded"
            size="sm"
            isIconOnly
            color="danger"
          >
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
