import { Activity, CheckCircle } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SystemStatusPopover() {
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
              <div className="relative">
                <Activity className="size-6 h-6 w-6 p-0.5 stroke-[1.5]" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-background bg-green-500"></span>
              </div>
              <span className="font-medium whitespace-nowrap">
                System Status
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
          <h3 className="leading-none">System Status</h3>
        </div>

        <div className="p-4">
          <div className="mb-4 rounded-lg border border-border bg-gray-50 px-2 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle
                  strokeWidth={2}
                  className="h-5 w-5 stroke-green-500"
                />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check-big h-5 w-5 text-green-500"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg> */}
                <div>
                  <p className="text-base font-medium">
                    All Systems Operational
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Last updated 12:50:24 PM
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                Operational
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Web Application</span>
              </div>
              <span className="text-xs text-muted-foreground">Operational</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">API</span>
              </div>
              <span className="text-xs text-muted-foreground">Operational</span>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <a
              href="https://status.stack-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              View full status page →
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
