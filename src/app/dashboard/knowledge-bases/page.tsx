"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "./DataTable";
import { tabledata } from "./data";
import { toast } from "sonner";

export default function Page() {
  return (
    <>
      <header className="flex h-12 shrink-0 items-center justify-between px-4 bg-white border-b-1 border-gray-200">
        <h1 className="text-sm font-semibold">Knowledge Bases</h1>
        <Button
          size="sm"
          onClick={() =>
            toast.error("Only Michael can update the Knowledge Bases", {
              description: "After all, it is his knowledge.",
            })
          }
        >
          <Plus /> Create a Knowledge Base
        </Button>
      </header>

      <main className="p-4">
        <DataTable data={tabledata} />
      </main>
    </>
  );
}
