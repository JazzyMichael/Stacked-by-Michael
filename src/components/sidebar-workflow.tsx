"use client";

import {
  Activity,
  CircleQuestionMark,
  CircleX,
  Pin,
  PinOff,
  Search,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { Input } from "./ui/input";
import { useState } from "react";
import { NavCollapsible } from "./nav-collapsible";
import { nodeNavItems } from "./nodes/data";
import { Button } from "./ui/button";

const bottomNav = [
  {
    title: "Help & More",
    url: "#",
    icon: CircleQuestionMark,
  },
  {
    title: "System Status",
    url: "#",
    icon: Activity,
  },
];

export function WorkflowSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [searchTerm, setSearchTerm] = useState("");
  const { toggleSidebar, state } = useSidebar();

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      style={
        {
          height: "calc(100% - 53px)",
          overflow: "hidden",
          // "--sidebar-width": "275px",
        } as React.CSSProperties
      }
      className="top-[53px] p-0 bg-white shadow-xl hover:w-[275px] transition-[width]"
      {...props}
    >
      <SidebarHeader className="flex flex-row justify-between items-center pl-3 pr-0.5 py-1.5 border-b-1">
        <div>
          {!searchTerm ? (
            <Search stroke="gray" className="size-5" />
          ) : (
            <CircleX
              size={24}
              stroke="gray"
              className="cursor-pointer hover:stroke-black transition duration-300 ease-in-out hover:rotate-180"
              onClick={() => setSearchTerm("")}
            />
          )}
        </div>

        <Input
          placeholder="Search nodes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm((e.target.value ?? "").trim())}
          className="font-medium border-none shadow-none focus-visible:border-none focus-visible:ring-0 focus:outline-none"
        />

        {state === "collapsed" ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => toggleSidebar()}
            className="group/pin"
          >
            <Pin className="stroke-gray-500 group-hover/pin:stroke-black" />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => toggleSidebar()}
            className="group/pin"
          >
            <PinOff
              stroke="gray"
              className="stroke-gray-500 group-hover/pin:stroke-black"
            />
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent className="scrollbar-hidden overflow-y-auto pb-4">
        <NavCollapsible
          items={nodeNavItems
            .filter((item) => {
              // filter based on subItem title not including item title
              return item.items.some((subItem) => {
                return subItem.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              });
            })
            .map((item) => {
              // remove subitems that do not match query
              const items = item.items.filter((subItem) =>
                subItem.title.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return { ...item, items };
            })}
        />
      </SidebarContent>

      <SidebarFooter className="pb-3 px-0">
        <NavMain items={bottomNav} />
      </SidebarFooter>
    </Sidebar>
  );
}
