"use client";

import { redirect, usePathname } from "next/navigation";
import { NavLogo } from "./nav-logo";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Folder, Play } from "lucide-react";
import { Switch } from "./ui/switch";
import { toast } from "sonner";

export function ProjectHeader() {
  const path = usePathname().trim().split("/");
  const current = path.pop() ?? "workflow";
  const baseURL = path.join("/");

  return (
    <nav className="flex justify-between items-center px-4 h-[52.5px] border-b border-black/[0.1] bg-white">
      <div className="flex items-center gap-3">
        <NavLogo />

        <Tabs
          defaultValue={current}
          onValueChange={(value) => redirect(`${baseURL}/${value}`)}
        >
          <TabsList>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="manager">Manager</TabsTrigger>
            <TabsTrigger value="evaluator">Evaluator</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-end gap-4 text-[13.5px] font-medium">
        <Folder className="size-[18px] stroke-gray-500 cursor-pointer" />{" "}
        project name / directory <Switch />
      </div>

      <div className="flex items-center gap-2">
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
              description: "(nothing will happen)",
            })
          }
        >
          Save
        </Button>
        <Button
          variant="default"
          className="px-4 font-semibold"
          onClick={() =>
            toast.info("Successfully clicked a button!", {
              description: "(nothing will happen)",
            })
          }
        >
          Publish
        </Button>
      </div>
    </nav>
  );
}
