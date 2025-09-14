"use client";

import { type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
export function NavMain({
  items,
  openSearch,
}: {
  openSearch?: Function;
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    badge?: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild className="w-full!">
              <a
                href={item.url}
                className="!w-full"
                style={{ width: "100% !important" }}
                onClick={() =>
                  item.title === "Global Search" && openSearch && openSearch()
                }
              >
                <item.icon className="size-6 h-6 w-6 p-0.5 stroke-[1.5]" />
                <span className="font-medium whitespace-nowrap">
                  {item.title}
                </span>
                {item.badge && (
                  <Badge
                    variant={"secondary"}
                    className="ml-auto text-gray-500 px-[3px] py-0.5 text-[11px]"
                  >
                    {item.badge}
                  </Badge>
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
