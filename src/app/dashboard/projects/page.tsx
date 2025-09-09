import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { publishedOptions, sortOptions, projects, tabledata } from "./data";
import { DataTable } from "./data-table";
import ProjectFolders from "./folders";

export default function Page() {
  return (
    <div className="grid h-screen grid-cols-[248px_1fr] grid-rows-[48px_1fr]">
      {/* left header */}
      <div className="flex justify-start items-center pl-5 font-semibold border-b-1 border-r-1 bg-white">
        <p>Folders</p>
      </div>

      {/* right header */}
      <div className="px-6 text-[15px] font-medium border-b-1 flex justify-between items-center bg-white">
        <p>My Projects</p>

        <div>
          <Button size="sm" className="rounded-r-none text-xs" asChild>
            <a href="/project/blank">
              <Plus /> New Project
            </a>
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
      </div>

      {/* left content */}
      <ProjectFolders />

      {/* right content */}
      <div className="px-8 py-4">
        <Tabs defaultValue="grid">
          {/* top row: search input, view tabs, filter dialog */}
          <div className="flex gap-2">
            {/* Search Input */}
            <div className="relative w-full">
              <Input placeholder="Search" className="pl-8 bg-white" />
              <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
            </div>

            {/* View Select */}
            <TabsList>
              <TabsTrigger value="grid" className="cursor-pointer">
                <LayoutGrid />
              </TabsTrigger>
              <TabsTrigger
                disabled={true}
                value="list"
                className="cursor-pointer"
              >
                <TableProperties />
              </TabsTrigger>
            </TabsList>

            {/* Time Period Select */}
            <Select defaultValue={sortOptions[0].value}>
              <SelectTrigger className="cursor-pointer bg-white min-w-36">
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
              <SelectTrigger className="cursor-pointer bg-white min-w-36">
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
            <Button variant="outline" className="bg-white">
              <Settings2 />
            </Button>
          </div>

          {/* Main Content */}
          <TabsContent value="grid">
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="w-full h-36 bg-white rounded-sm border-1 hover:border-gray-400 flex flex-col justify-between p-4 cursor-pointer"
                >
                  <p className="text-sm font-semibold">{project.label}</p>
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/leerob.png"
                        alt="@leerob"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/leerob.png"
                        alt="@leerob"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar className="bg-white flex items-center justify-center text-xs border-1">
                      {project.avatarNumber}
                    </Avatar>
                  </div>
                </a>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list">
            <DataTable data={tabledata} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
