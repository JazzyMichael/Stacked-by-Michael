"use client";

import * as React from "react";
import {
  Activity,
  ArrowLeftRight,
  AudioWaveform,
  Bell,
  BookOpen,
  Bot,
  ChartNoAxesColumnIncreasing,
  CircleQuestionMark,
  Command,
  Database,
  Frame,
  GalleryVerticalEnd,
  House,
  Image,
  Map,
  Palette,
  PieChart,
  Search,
  Settings2,
  Sparkles,
  SquarePen,
  SquareTerminal,
  Type,
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
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { NavLogo } from "./nav-logo";
import { OrgSwitcher } from "./org-switcher";

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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row justify-between mt-2 mb-4 pl-4">
        <NavLogo />
        <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <OrgSwitcher organizations={navItems.organization} />
        <NavMain items={navItems.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavProjects projects={navItems.projects} />
        <NavUser user={navItems.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
