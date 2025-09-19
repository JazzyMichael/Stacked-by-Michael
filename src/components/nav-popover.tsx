"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import NotificationsPopover from "./notifications-popover";
import SystemStatusPopover from "./system-status-popover";
import HelpAndMorePopover from "./help-and-more-popover";

export function NavPopover({
  notifications = true,
  help = true,
  status = true,
}: {
  notifications?: boolean;
  help?: boolean;
  status?: boolean;
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {notifications && <NotificationsPopover />}
        {help && <HelpAndMorePopover />}
        {status && <SystemStatusPopover />}
      </SidebarMenu>
    </SidebarGroup>
  );
}
