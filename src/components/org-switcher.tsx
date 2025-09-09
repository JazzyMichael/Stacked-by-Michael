"use client";

import { Fragment, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function OrgSwitcher({
  organizations,
}: {
  organizations: {
    label: string;
    logo: React.ElementType;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeOrg, setActiveOrg] = useState(organizations[0]);

  if (!activeOrg) {
    return <></>;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem className="px-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="group-hover:w-full! h-10! group-hover:h-10! group-hover:px-1! px-1! py-2! group-hover:py-2!">
              <div className="bg-accent border-1 text-sidebar-primary-foreground flex aspect-square size-6 items-center justify-center rounded-sm">
                <activeOrg.logo className="size-4! stroke-sidebar-primary" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-[13px] font-medium whitespace-nowrap">
                  Your Organization
                </span>
                <span className="truncate text-xs text-gray-600 whitespace-nowrap text-nowrap">
                  Free
                </span>
              </div>
              <ChevronsUpDown className="size-5! ml-auto stroke-gray-500" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "top"}
            sideOffset={4}
          >
            {organizations.map((org, i) => (
              <Fragment key={org.label}>
                <DropdownMenuItem
                  onClick={() => setActiveOrg(org)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <org.logo className="size-3.5 shrink-0" />
                  </div>
                  {org.label}
                </DropdownMenuItem>
                {i < organizations.length - 1 && <DropdownMenuSeparator />}
              </Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
