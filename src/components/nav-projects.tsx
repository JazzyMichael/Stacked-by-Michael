"use client";

import {
  ArrowUpRight,
  Folder,
  Forward,
  Sparkles,
  Trash2,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className="flex flex-col gap-2 mb-4">
        <span className="flex w-full justify-between">
          <span className="text-[#09090b] text-thin font-[13px]">Projects</span>
          <span className="text-gray-400">1 of 2</span>
        </span>
        <Progress value={50} className="h-1" />
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem className="mb-1">
          <SidebarMenuButton
            variant="upgrade"
            asChild
            className="group/upgrade rounded-sm"
          >
            <a
              href="#"
              className="h-9 bg-[#18181bea] hover:bg-[#18181b9f] text-white font-semibold"
            >
              <Sparkles className="p-1 mr-1" />
              Upgrade
              <ArrowUpRight className="p-[5px] mb-0 ml-0 group-hover/upgrade:mb-2 group-hover/upgrade:ml-2 transition-[margin-bottom,margin-left]" />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name} className="mb-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon className="size-6 h-6 w-6 p-0.5 mr-1 stroke-[1.5]" />
                    <span className="text-black">{item.name}</span>
                  </a>
                </SidebarMenuButton>
                {/* <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
