"use client";

import { ArrowUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BoxSparkle } from "@/lib/custom-icons";

export function NavProjects() {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className="flex flex-col gap-2 mb-4 opacity-100 group-hover:opacity-100! h-fit text-nowrap whitespace-nowrap">
        <div className="opacity-0">.</div>
        <div className="flex w-full justify-between group-hover:opacity-100! group-hover:w-full! visible">
          <span className="text-[#09090b] text-thin text-[13px]">Projects</span>
          <span className="text-gray-400">2 of 3</span>
        </div>
        <Progress value={67} className="h-1" />
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem className="mx-2">
          <SidebarMenuButton
            variant="upgrade"
            asChild
            className="group/upgrade"
          >
            <a
              href="#"
              className="h-9! px-1! w-full group-data-[collapsible=icon]:px-1! bg-[#18181bea] hover:bg-[#18181b9f] text-white font-semibold rounded-sm group-hover:flex! group-hover:w-full! group-hover:h-9!"
            >
              {/* <Sparkles className="p-0.5 group-hover/upgrade:scale-75 transition-transform" /> */}
              <BoxSparkle
                // strokeWidth={1}
                className="group-hover/upgrade:scale-75 transition-transform"
              />
              <span className="group-hover:block!">Upgrade</span>
              <ArrowUpRight className="group-hover:block! p-[5px] mb-0 ml-0 group-hover/upgrade:mb-2 group-hover/upgrade:ml-2 transition-[margin-bottom,margin-left]" />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
