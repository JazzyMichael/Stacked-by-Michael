"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import NotificationsPopover from "./notifications-popover";
import SystemStatusPopover from "./system-status-popover";
import HelpAndMorePopover from "./help-and-more-popover";

export function NavPopover() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <NotificationsPopover />
        <HelpAndMorePopover />
        <SystemStatusPopover />
      </SidebarMenu>
    </SidebarGroup>
  );
}
