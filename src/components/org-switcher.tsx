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
            <SidebarMenuButton className="group-hover:w-full! group-hover:h-fit! data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-hover:px-1! px-1! group-hover:py-2! h-fit">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-7 items-center justify-center rounded-lg">
                <activeOrg.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-[13px] font-medium">
                  Your Organization
                  {/* {activeOrg.label} */}
                </span>
                <span className="truncate text-xs text-gray-600">Free</span>
              </div>
              <ChevronsUpDown className="size-5! ml-auto stroke-gray-500" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
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
