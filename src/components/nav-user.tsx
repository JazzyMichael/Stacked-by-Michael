"use client";

import { Axe, Gavel, Hammer, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="mx-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="group-hover:w-full! data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground py-2 px-1.5">
              <Avatar className="h-6 w-6 rounded-md">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                {/* <span className="truncate text-xs">{user.email}</span> */}
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "top"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">M</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-sm text-gray-500">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {/* <DropdownMenuItem className="group/gavel">
                <Axe className="group-hover/gavel:rotate-45 -rotate-90 transition-transform duration-500" />
                Github
              </DropdownMenuItem> */}

              <DropdownMenuItem
                className="group/axe"
                onClick={() =>
                  redirect("/Michael_Mancini_Senior_Frontend_Engineer.pdf")
                }
              >
                <Gavel className="group-hover/axe:rotate-45 -rotate-90 transition-transform duration-500" />
                Resume
              </DropdownMenuItem>

              <DropdownMenuItem
                className="group/hammer"
                onClick={() => redirect("/")}
              >
                <Hammer className="group-hover/hammer:rotate-45 -rotate-90 transition-transform duration-500" />
                Home Page
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => redirect("/")}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
