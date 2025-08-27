"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import {
  EllipsisVertical,
  LayoutGrid,
  Plus,
  Search,
  Settings2,
  TableProperties,
} from "lucide-react";
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
            toast.error("Permission Denied", {
              description:
                "This represents Michaels knowledge so only he (me) has the ability to make changes.",
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
