"use client";

import {
  Activity,
  ArrowLeftRight,
  Bell,
  ChartNoAxesColumnIncreasing,
  CircleQuestionMark,
  Database,
  Hamburger,
  House,
  Palette,
  PanelLeftOpen,
  PanelRightOpen,
  Search,
  SquarePen,
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
} from "@/components/ui/command";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { NavLogo } from "./nav-logo";
import { OrgSwitcher } from "./org-switcher";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { searchData } from "@/lib/search-data";
import { redirect } from "next/navigation";
import { NavPopover } from "./nav-popover";

const navItems = {
  user: {
    name: "Michael Mancini",
    email: "thejazzymichael@gmail.com",
    avatar: "/cat-avatar.jpg",
  },
  organization: [
    { label: "Missing Name", logo: Hamburger },
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
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [searchResultsMap, setSearchResultsMap] = useState(new Map());
  const { toggleSidebar, state } = useSidebar();

  // Listen for keyboard shortcut
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

  // Listen for search query changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Perform action on debounced query changes
  useEffect(() => {
    if (!searchResultsMap.get(debouncedQuery)) {
      const matches = searchData.filter(({ content }) => {
        return content.some((str) => str.includes(debouncedQuery));
      });

      setSearchResultsMap((prevMap) => {
        const newMap = new Map(prevMap);
        newMap.set(debouncedQuery, matches);
        return newMap;
      });
    }
  }, [debouncedQuery]);

  return (
    <>
      <Sidebar
        collapsible="icon"
        className="hover:w-[256px] transition-[width]"
        {...props}
      >
        <SidebarHeader className="flex flex-row justify-between items-center mt-2 mb-2 pl-[14px]">
          <NavLogo />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => toggleSidebar()}
            className="outline-0! ring-0!"
          >
            {state === "collapsed" ? (
              <PanelLeftOpen className="size-4! group-data-[collapsible=icon]:hidden group-hover:inline-flex!" />
            ) : (
              <PanelRightOpen className="size-4! group-data-[collapsible=icon]:hidden group-hover:inline-flex!" />
            )}
          </Button>
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
          {/* <NavMain items={navItems.projects} /> */}
          <NavPopover />
          <NavUser user={navItems.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <CommandDialog
        shouldFilter={false}
        open={searchDialog}
        onOpenChange={setSearchDialog}
      >
        <CommandInput
          placeholder="Search keywords across the entire site..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {debouncedQuery &&
              (searchResultsMap.get(debouncedQuery) ?? []).map(
                (item: any, i: number) => (
                  <CommandItem
                    key={i}
                    onSelect={() => {
                      setSearchDialog(false);
                      redirect(item.url);
                    }}
                  >
                    <item.icon />
                    {item.page}
                  </CommandItem>
                )
              )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
