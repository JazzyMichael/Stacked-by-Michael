"use client";

import {
  Activity,
  ArrowLeftRight,
  AudioWaveform,
  Bell,
  BookOpen,
  Bot,
  ChartNoAxesColumnIncreasing,
  CircleQuestionMark,
  CircleX,
  Command,
  Database,
  Frame,
  GalleryVerticalEnd,
  House,
  Image,
  Map,
  Palette,
  PieChart,
  PinOff,
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLogo } from "./nav-logo";
import { Input } from "./ui/input";
import { useState } from "react";
import { Nav } from "react-day-picker";
import { NavCollapsible } from "./nav-collapsible";
import { nodeNavItems } from "./nodes/data";

const nodeCategories: string[] = [
  "Inputs",
  "Outputs",
  "LLMs",
  "KnowledgeBases",
  "Apps",
  "Document Readers",
  "Logic",
  "Utils",
];

const nav = nodeCategories.map((category) => ({
  title: category,
  url: "#",
  icon:
    category === "Inputs"
      ? Command
      : category === "Outputs"
      ? Frame
      : category === "LLMs"
      ? Bot
      : category === "KnowledgeBases"
      ? BookOpen
      : category === "Apps"
      ? GalleryVerticalEnd
      : category === "Document Readers"
      ? Image
      : category === "Logic"
      ? PieChart
      : category === "Utils"
      ? Settings2
      : CircleQuestionMark,
}));

const bottomNav = [
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
];

export function WorkflowSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [searchTerm, setSearchTerm] = useState("");
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      style={
        {
          height: "calc(100% - 53px)",
          overflow: "hidden",
          // "--sidebar-width": "275px",
        } as React.CSSProperties
      }
      className="top-[53px] p-0 bg-white shadow-xl hover:w-[275px] [group-data-[collapsible=icon], hover]:w-(--sidebar-width-icon)] transition-all"
      {...props}
    >
      <SidebarHeader className="flex flex-row justify-between items-center px-4 py-1.5 border-b-1">
        {!searchTerm ? (
          <Search stroke="gray" />
        ) : (
          <CircleX
            size={28}
            stroke="gray"
            className="cursor-pointer hover:stroke-black transition duration-300 ease-in-out hover:rotate-180"
            onClick={() => setSearchTerm("")}
          />
        )}
        <Input
          placeholder="Search nodes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm((e.target.value ?? "").trim())}
          className="font-medium border-none shadow-none focus-visible:border-none focus-visible:ring-0 focus:outline-none"
        />

        <PinOff
          stroke="gray"
          className="cursor-pointer hover:stroke-black"
          onClick={() => toggleSidebar()}
        />
      </SidebarHeader>

      <SidebarContent className="scrollbar-hidden">
        <NavCollapsible items={nodeNavItems} />
      </SidebarContent>

      <SidebarFooter className="pb-3 px-0">
        <NavMain items={bottomNav} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
