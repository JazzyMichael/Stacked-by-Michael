"use client";

import {
  ChevronDown,
  ChevronRight,
  Icon,
  Menu,
  type LucideIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useDragDrop } from "@/hooks/DragDrop";

export function NavCollapsible({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
      brandImage?: string;
    }[];
  }[];
}) {
  const [_, setNodeData] = useDragDrop();

  const iconColors = [
    "group-hover/nodecategory:stroke-emerald-500",
    "group-hover/nodecategory:stroke-teal-500",
    "group-hover/nodecategory:stroke-cyan-500",
    "group-hover/nodecategory:stroke-sky-500",
    "group-hover/nodecategory:stroke-blue-500",
    "group-hover/nodecategory:stroke-indigo-500",
    "group-hover/nodecategory:stroke-purple-500",
    "group-hover/nodecategory:stroke-violet-500",
    "group-hover/nodecategory:stroke-fuchsia-500",
  ];

  const textColors = [
    "group-hover/nodecategory:text-emerald-800",
    "group-hover/nodecategory:text-teal-800",
    "group-hover/nodecategory:text-cyan-800",
    "group-hover/nodecategory:text-sky-800",
    "group-hover/nodecategory:text-blue-800",
    "group-hover/nodecategory:text-indigo-800",
    "group-hover/nodecategory:text-purple-800",
    "group-hover/nodecategory:text-violet-800",
    "group-hover/nodecategory:text-fuchsia-800",
  ];

  const borderColors = [
    "hover:border-emerald-600",
    "hover:border-teal-600",
    "hover:border-cyan-600",
    "hover:border-sky-600",
    "hover:border-blue-600",
    "hover:border-indigo-600",
    "hover:border-purple-600",
    "hover:border-violet-600",
    "hover:border-fuchsia-600",
  ];

  const onDragStart = (event: React.DragEvent, nodeData: any) => {
    setNodeData && setNodeData(nodeData);
    event.dataTransfer.effectAllowed = "move";
  };

  const getNodeType = (category: string, item: string) => {
    // Handle duplicate names
    if (category === "Outputs" && item === "Audio") return "AudioOutput";
    if (category === "Outputs" && item === "Image") return "ImageOutput";

    // Handle custom names
    if (category === "Apps") return "CatPictures";

    // Default
    if (category !== "Inputs" && category !== "Outputs") return "Base";

    return item;
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="pt-1.5">
        {items.map((item, i) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  asChild
                  className="group/nodecategory mb-0 !w-full overflow-visible"
                >
                  <a
                    href="#"
                    className={`!w-full hover:bg-white! border-1 border-transparent ${borderColors[i]} box-border`}
                    style={{ width: "100% !important" }}
                    draggable="false"
                  >
                    {item.icon && (
                      <item.icon
                        strokeWidth={2}
                        className={`size-[1.2rem]! group-hover/nodecategory:scale-[65%] group-hover/nodecategory:rotate-[360deg] transition-transform duration-500 stroke-gray-700 ${iconColors[i]}`}
                      />
                    )}
                    <span
                      className={`font-medium whitespace-nowrap ml-2 ${textColors[i]}`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`size-4! stroke-gray-500 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 ${iconColors[i]}`}
                    />
                  </a>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="border-none ml-2 mr-0 my-1.5 pr-1 pt-1 gap-2">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        draggable
                        onDragStart={(event) =>
                          onDragStart(event, {
                            ...subItem,
                            type: getNodeType(item.title, subItem.title),
                            category: item.title,
                          })
                        }
                      >
                        <div className="group/nodeitem active:scale-105 active:-rotate-2 transition-transform flex justify-between border-1 cursor-pointer shadow-sm">
                          {subItem.icon && (
                            <subItem.icon className="group-hover/nodeitem:rotate-[360deg] group-hover/nodeitem:scale-125 transition-transform duration-500 mr-1" />
                          )}
                          <span className="grow">{subItem.title}</span>
                          <Menu />
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
