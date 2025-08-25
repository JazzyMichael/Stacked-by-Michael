"use client";

import { ChevronRight, Menu, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
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
    }[];
  }[];
}) {
  const [_, setType] = useDragDrop();

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType && setType(nodeType);
    event.dataTransfer.effectAllowed = "move";

    // if (event.dataTransfer) {
    //   event.dataTransfer.effectAllowed = "move";
    // } else {
    //   console.log("No DragEvent dataTransfer :(");
    // }
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="pt-1.5">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="group/nodecategory mb-0">
                  {item.icon && (
                    <item.icon
                      strokeWidth={2}
                      className="size-[1.1rem]! group-hover/nodecategory:scale-[65%] group-hover/nodecategory:rotate-[360deg] transition-transform duration-500"
                    />
                  )}
                  <span>{item.title}</span>
                  <ChevronRight className="size-4! stroke-gray-500 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="border-none ml-2 mr-0 my-1.5 pr-1 pt-1">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        draggable
                        onDragStart={(event) => onDragStart(event, "default")}
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
