"use client";

import { redirect, usePathname } from "next/navigation";
import { NavLogo } from "./nav-logo";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Folder, Play } from "lucide-react";
import { Switch } from "./ui/switch";
import { toast } from "sonner";
import Link from "next/link";

export function ProjectHeader() {
  const path = usePathname().trim().split("/");
  const current = path.pop() ?? "workflow";
  const id = path.pop();
  const formatted = id
    ?.toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <nav className="flex justify-between items-center px-4 h-[52.5px] border-b border-black/[0.1] bg-white sticky top-0">
      <div className="flex items-center gap-3">
        {/* <NavLogo /> */}

        <Tabs defaultValue={current}>
          <TabsList>
            <TabsTrigger value="workflow" asChild>
              <Link href={`/project/${id}/workflow`}>Workflow</Link>
            </TabsTrigger>
            <TabsTrigger value="export" asChild>
              <Link href={`/project/${id}/export`}>Export</Link>
            </TabsTrigger>
            <TabsTrigger value="analytics" asChild>
              <Link href={`/project/${id}/analytics`}>Analytics</Link>
            </TabsTrigger>
            <TabsTrigger value="manager" asChild>
              <Link href={`/project/${id}/manager`}>Manager</Link>
            </TabsTrigger>
            {/* <TabsTrigger value="evaluator">Evaluator</TabsTrigger> */}
          </TabsList>
        </Tabs>
      </div>

      <div className="items-end gap-4 text-[13.5px] font-medium hidden lg:flex">
        <Link href={"/dashboard/projects"}>
          <Folder className="size-[18px] stroke-gray-500 cursor-pointer" />
        </Link>
        {formatted} <Switch />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <Button
          variant="outline"
          className="w-20 justify-center gap-2 bg-white"
          onClick={() =>
            toast.info("Successfully clicked a button!", {
              description: "(nothing will happen)",
            })
          }
        >
          <Play fill="black" />
          Run
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.success("Successfully clicked a button!", {
              description: "(nothing will be saved)",
            })
          }
        >
          Save
        </Button>
        <Button
          variant="default"
          className="px-4 font-semibold"
          onClick={() =>
            toast.error("Successfully clicked a button!", {
              description: "(nothing will be published)",
            })
          }
        >
          Publish
        </Button>
      </div>
    </nav>
  );
}
