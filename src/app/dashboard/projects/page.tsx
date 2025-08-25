import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  LayoutGrid,
  Plus,
  Search,
  Settings2,
  TableProperties,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

const sortOptions = [
  { label: "Last Viewed", value: "last-viewed" },
  { label: "Alphabetically", value: "alphabetically" },
];

const publishedOptions = [
  { label: "All", value: "all" },
  { label: "Published", value: "published" },
  { label: "Unpublished", value: "unpublished" },
];

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b-1 border-gray-200">
        <h1 className="text-sm font-medium">My Projects</h1>

        <div>
          <Button size="sm" className="rounded-r-none text-xs">
            <Plus /> New Project
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="rounded-l-none border-l-1 border-gray-600"
              >
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Import Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="px-8 py-4">
        {/* top row: search input, view tabs, filter dialog */}
        <div className="flex gap-2">
          {/* Search Input */}
          <div className="relative w-full">
            <Input placeholder="Search" className="pl-8 bg-white" />
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          </div>

          {/* Grid & List Tabs */}
          <Tabs defaultValue="list">
            <TabsList>
              <TabsTrigger value="grid" className="cursor-pointer">
                <LayoutGrid />
              </TabsTrigger>
              <TabsTrigger value="list" className="cursor-pointer">
                <TableProperties />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Time Period Select */}
          <Select defaultValue={sortOptions[0].value}>
            <SelectTrigger className="cursor-pointer min-w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Published Select */}
          <Select defaultValue={publishedOptions[0].value}>
            <SelectTrigger className="cursor-pointer min-w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {publishedOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Filter */}
          <Button variant="outline" className="cursor-pointer">
            <Settings2 />
          </Button>
        </div>

        <Button asChild className="mt-5">
          <a href="/project/123">View Project</a>
        </Button>
      </main>
    </>
  );
}
