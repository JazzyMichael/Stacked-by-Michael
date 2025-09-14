import { Bell, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="w-full!">
            <a
              href={"#"}
              className="!w-full"
              style={{ width: "100% !important" }}
              onClick={() => console.log("popover")}
            >
              <Bell className="size-6 h-6 w-6 p-0.5 stroke-[1.5]" />
              <span className="font-medium whitespace-nowrap">
                Notifications
              </span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={16}
        collisionPadding={16}
        className="w-96 p-0!"
      >
        <div className="flex h-12 items-center justify-between border-b border-muted py-3 pl-4 pr-1.5 font-medium">
          <h3 className="leading-none">Notifications</h3>
        </div>

        <div className="flex h-80 flex-col items-center justify-center gap-5 overflow-hidden">
          <div className="relative mt-12 h-20 w-52">
            <div
              className="absolute h-16 min-h-16 w-52 min-w-52 text-gray-700"
              style={{ zIndex: 1, transform: "translate(-8%, -110%)" }}
            >
              <div className="duration-700 fill-mode-backwards animate-slide-in-from-bottom">
                <div
                  className="flex h-16 min-h-16 w-52 min-w-52 flex-col justify-center gap-2 rounded-xl border border-border bg-background p-3 shadow-xl"
                  style={{ transform: "rotate(-7deg)" }}
                >
                  <div className="h-4 w-44 rounded-md bg-gray-200"></div>
                  <div className="h-3 w-32 rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div
              className="absolute h-16 min-h-16 w-52 min-w-52 text-gray-700"
              style={{
                transform: "translate(8%, -55%)",
                zIndex: 2,
              }}
            >
              <div className="duration-700 fill-mode-backwards animate-slide-in-from-bottom delay-100">
                <div
                  className="flex h-16 min-h-16 w-52 min-w-52 flex-col justify-center gap-2 rounded-xl border border-border bg-background p-3 shadow-xl"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <div className="h-4 w-44 rounded-md bg-gray-200"></div>
                  <div className="h-3 w-32 rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div
              className="absolute h-16 min-h-16 w-52 min-w-52 text-gray-700"
              style={{ transform: "translate(-8%, 0%)", zIndex: 3 }}
            >
              <div className="duration-700 animate-slide-in-from-bottom delay-200 fill-mode-backwards">
                <div
                  className="flex h-16 min-h-16 w-52 min-w-52 flex-col justify-center gap-2 rounded-xl border border-border bg-background p-3 shadow-xl"
                  style={{ transform: "rotate(-7deg)" }}
                >
                  <div className="h-4 w-44 rounded-md bg-gray-200"></div>
                  <div className="h-3 w-32 rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>

          <span className="relative z-10 flex w-full flex-col items-center gap-1 bg-white text-center text-sm">
            <div className="absolute inset-x-0 bottom-full h-12 bg-gradient-to-t from-white to-transparent"></div>
            <h3 className="text-base font-medium">No notifications</h3>
            <h4 className="max-w-64 text-muted-foreground">
              No notifications found
            </h4>
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
