"use client";

import {
  Activity,
  ArrowLeftRight,
  Bell,
  Calculator,
  Calendar,
  ChartNoAxesColumnIncreasing,
  CircleQuestionMark,
  CreditCard,
  Database,
  House,
  Palette,
  PanelLeftOpen,
  PanelRightOpen,
  Search,
  Settings,
  Smile,
  SquarePen,
  Type,
  User,
  UsersRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { NavLogo } from "./nav-logo";
import { OrgSwitcher } from "./org-switcher";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navItems = {
  user: {
    name: "Michael Mancini",
    email: "thejazzymichael@gmail.com",
    avatar: "/cat-avatar.jpg",
  },
  organization: [
    { label: "Missing Name", logo: Type },
    { label: "Organization Members", logo: UsersRound },
    { label: "Upload Logo", logo: Palette },
  ],
  navMain: [
    {
      title: "Global Search",
      url: "#",
      icon: Search,
      badge: "⌘K",
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: House,
      isActive: true,
    },
    {
      title: "Knowledge Bases",
      url: "/dashboard/knowledge-bases",
      icon: Database,
    },
    {
      title: "Connections",
      url: "/dashboard/connections",
      icon: ArrowLeftRight,
    },
    {
      title: "Prompt Library",
      url: "/dashboard/prompts",
      icon: SquarePen,
    },
    {
      title: "Project Analytics",
      url: "/dashboard/analytics",
      icon: ChartNoAxesColumnIncreasing,
    },
  ],
  projects: [
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
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
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchDialog, setSearchDialog] = useState(false);
  const { toggleSidebar, state } = useSidebar();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchDialog((x) => !x);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Sidebar
        collapsible="icon"
        className="hover:w-[256px] transition-[width]"
        {...props}
      >
        <SidebarHeader className="flex flex-row justify-between items-center mt-2 mb-2 pl-[14px]">
          <NavLogo />
          {/* <SidebarTrigger  /> */}
          {state === "collapsed" ? (
            <Button size="icon" variant="ghost" onClick={() => toggleSidebar()}>
              <PanelLeftOpen className="size-4! group-data-[collapsible=icon]:hidden group-hover:inline-flex!" />
            </Button>
          ) : (
            <Button size="icon" variant="ghost" onClick={() => toggleSidebar()}>
              <PanelRightOpen className="size-4! group-data-[collapsible=icon]:hidden group-hover:inline-flex!" />
            </Button>
          )}
        </SidebarHeader>
        <SidebarContent>
          <OrgSwitcher organizations={navItems.organization} />
          <NavMain
            items={navItems.navMain}
            openSearch={() => setSearchDialog(true)}
          />
        </SidebarContent>
        <SidebarFooter className="pb-3 px-0">
          <NavProjects />
          <NavMain items={navItems.projects} />
          <NavUser user={navItems.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <CommandDialog open={searchDialog} onOpenChange={setSearchDialog}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
