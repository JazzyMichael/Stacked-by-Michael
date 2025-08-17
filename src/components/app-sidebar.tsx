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

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { OrgSwitcher } from "./org-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavLogo } from "./nav-logo";

// This is sample data.
const data = {
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
      url: "/projects",
      icon: House,
      isActive: true,
    },
    {
      title: "Knowledge Bases",
      url: "/knowledge-bases",
      icon: Database,
    },
    {
      title: "Connections",
      url: "/connections",
      icon: ArrowLeftRight,
    },
    {
      title: "Prompt Library",
      url: "/prompts",
      icon: SquarePen,
    },
    {
      title: "Project Analytics",
      url: "/analytics",
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
      <SidebarHeader>
        <NavLogo />
      </SidebarHeader>
      <SidebarContent>
        <OrgSwitcher organizations={data.organization} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavProjects projects={data.projects} />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
