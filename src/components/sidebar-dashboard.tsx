"use client";

import * as React from "react";
import {
  Activity,
  ArrowLeftRight,
  AudioWaveform,
  Bell,
  BookOpen,
  Bot,
  Calculator,
  Calendar,
  ChartNoAxesColumnIncreasing,
  CircleQuestionMark,
  Command,
  CreditCard,
  Database,
  Frame,
  GalleryVerticalEnd,
  House,
  Image,
  Map,
  Palette,
  PieChart,
  Search,
  Settings,
  Settings2,
  Smile,
  Sparkles,
  SquarePen,
  SquareTerminal,
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
  SidebarTrigger,
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
import { useEffect } from "react";

const navItems = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
      name: "Notifications",
      url: "#",
      icon: Bell,
    },
    {
      name: "Help & More",
      url: "#",
      icon: CircleQuestionMark,
    },
    {
      name: "System Status",
      url: "#",
      icon: Activity,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchDialog, setSearchDialog] = React.useState(false);

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
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader className="flex flex-row justify-between mt-2 mb-4 pl-4">
          <NavLogo />
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <OrgSwitcher organizations={navItems.organization} />
          <NavMain
            items={navItems.navMain}
            openSearch={() => setSearchDialog(true)}
          />
        </SidebarContent>
        <SidebarFooter>
          <NavProjects projects={navItems.projects} />
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
