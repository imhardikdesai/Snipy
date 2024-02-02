"use client";
import React, { useEffect } from "react";
import { Avatar, Button } from "@nextui-org/react";
import { LogOut, Plus, Settings } from "lucide-react";
import TechStackModal from "@/components/modal/TechStackModal";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import TechStackAvatar from "./components/TechStackAvatar";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { SNIPPET } from "@/queries/query-keys";
import { fetchTechStack } from "@/queries/post";
import SidebarLoader from "@/components/skeleton/Sidebar.loader";
import useQueryParams from "@/hooks/useQueryParams";

const techStackQueryKey: QueryKey = [SNIPPET.TECH_STACK];

const SideBar = () => {
  const auth = useAuth();
  const tech = useQueryParams("active-tech");
  const router = useRouter();
  const [current, setCurrent] = React.useState<any>(0);
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: techStackQueryKey,
    queryFn: () => fetchTechStack(auth.user),
  });
  useEffect(() => {
    setCurrent(tech || "");
  }, [tech]);

  // useEffect(() => {
  //   if (!tech) {
  //     data &&
  //       (data?.length === 0
  //         ? router.push(`/`)
  //         : router.push(`/?active-tech=${data[0]?.id}`));
  //   }
  // }, [tech, data, router]);

  if (isLoading || isRefetching) {
    return <SidebarLoader />;
  }

  return (
    <div className="bg-[#1E2021] text-white fixed h-full w-[75px]">
      <div className="w-full flex gap-6 flex-col items-center justify-between h-full py-6">
        <div className="flex gap-6 flex-col justify-center items-center">
          {data?.map((ele) => (
            <React.Fragment key={ele.id}>
              {ele?.id == current ? (
                <TechStackModal
                  modalData={ele}
                  trigger={
                    <TechStackAvatar
                      onClick={() => router.push(`/?active-tech=${ele?.id}`)}
                      color={ele?.id == current ? "warning" : "default"}
                      icon={ele?.icon}
                      name={ele?.name}
                      withBadge
                    />
                  }
                />
              ) : (
                <TechStackAvatar
                  onClick={() => router.push(`/?active-tech=${ele?.id}`)}
                  color={ele?.id == current ? "warning" : "default"}
                  icon={ele?.icon}
                  name={ele?.name}
                />
              )}
            </React.Fragment>
          ))}
          <TechStackModal
            trigger={
              <Button isIconOnly color="warning" variant="faded">
                <Plus />
              </Button>
            }
          />
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
