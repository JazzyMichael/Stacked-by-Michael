"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Filter,
  CircleUser,
  ScrollText,
  Hamburger,
  Apple,
  Pizza,
  Cookie,
  Archive,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProjectFolders() {
  const [folders, setFolders] = useState([
    { label: "My Projects", icon: CircleUser },
    { label: "All General", icon: ScrollText },
  ]);
  const [query, setQuery] = useState("");

  const icons = [Hamburger, Apple, Pizza, Cookie];

  const addFolder = (label: string) => {
    setFolders((prev) => [...prev, { label, icon: icons[prev.length - 2] }]);
  };

  const resetFolders = () => {
    setFolders([
      { label: "My Projects", icon: CircleUser },
      { label: "All General", icon: ScrollText },
    ]);
  };

  return (
    <div className="bg-white border-r-1 h-full flex flex-col">
      <div className="p-3">
        <Button
          disabled={folders.length > 5}
          variant="outline"
          className="w-full mb-2 justify-start bg-white select-none"
          onClick={() => addFolder("Food")}
        >
          <Plus className="size-5 stroke-gray-600" /> New Folder
        </Button>

        <div className="flex gap-2">
          {/* search icon */}
          <Input
            placeholder="Search folders"
            value={query}
            onChange={(e) => setQuery(e.target.value?.trim() ?? "")}
          />

          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => {
              toast.info(`Only ${folders.length} folders, no filtering.`, {
                description:
                  folders.length > 2
                    ? "They have been reset ;)"
                    : "You can add some though!",
              });
              resetFolders();
            }}
          >
            <Filter className="size-4" />
          </Button>
        </div>
      </div>

      <div id="list" className="flex flex-col gap-2 px-3">
        {folders
          .filter(
            (f) => f.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
          .map((folder, i) => (
            <div
              key={`${folder.label}-${i}`}
              className="flex items-center gap-3 text-[15px] hover:bg-gray-200 px-3 py-1 rounded-sm cursor-pointer"
              onClick={() => toast.success("Choose one of the projects :)")}
            >
              <folder.icon className="size-5" strokeWidth={1.5} />{" "}
              {folder.label}
            </div>
          ))}
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center border-y-1 text-muted-foreground text-[15px] font-medium p-2">
          <Button
            size={"icon"}
            variant={"outline"}
            className="h-fit w-fit p-1 bg-white"
          >
            <ChevronLeft className="size-3.5" />
          </Button>
          <span>Page 1</span>
          <Button
            size={"icon"}
            variant={"outline"}
            className="h-fit w-fit p-1 bg-white"
          >
            <ChevronRight className="size-3.5" />
          </Button>
        </div>

        <div className="pl-5 py-3.5 flex items-center gap-2.5 text-sm text-accent-foreground">
          <Archive className="size-3.5" /> Archives
        </div>
      </div>
    </div>
  );
}
