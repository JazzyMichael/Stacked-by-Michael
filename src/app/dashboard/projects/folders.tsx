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
    <div className="bg-white border-r-1 overflow-y-auto p-3">
      <Button
        disabled={folders.length > 5}
        variant="outline"
        className="w-full mb-2 justify-start bg-white"
        onClick={() => addFolder("Food")}
      >
        <Plus className="size-5 stroke-gray-600" /> New Folder
      </Button>

      <div className="flex gap-2">
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

      <div id="list" className="flex flex-col gap-2 pt-3">
        {folders
          .filter(
            (f) => f.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
          .map((folder) => (
            <div
              className="flex items-center gap-3 text-[15px] hover:bg-gray-200 px-3 py-1 rounded-sm cursor-pointer"
              onClick={() => toast.success("Choose one of the projects :)")}
            >
              <folder.icon className="size-5" strokeWidth={1.5} />{" "}
              {folder.label}
            </div>
          ))}
      </div>
    </div>
  );
}
