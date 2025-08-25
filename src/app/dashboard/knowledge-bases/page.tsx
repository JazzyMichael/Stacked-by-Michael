import { AppSidebar } from "@/components/sidebar-dashboard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  EllipsisVertical,
  LayoutGrid,
  Plus,
  Search,
  Settings2,
  TableProperties,
} from "lucide-react";

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b-1 border-gray-200">
        <h1 className="font-semibold">Knowledge Bases</h1>
        <Button className="cursor-pointer">
          <Plus /> Create a Knowledge Base
        </Button>
      </header>

      <main className="p-4">
        {/* top row: search input, view tabs, filter dialog */}
        <div className="flex gap-2">
          {/* Search Input */}
          <div className="relative w-full">
            <Input placeholder="Search knowledge bases..." className="pl-8" />
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
            {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent> */}
          </Tabs>

          {/* Filter */}
          <Button variant={"outline"} className="cursor-pointer">
            <Settings2 /> Filter
          </Button>
        </div>

        <br />

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox className="cursor-pointer" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Total Size</TableHead>
              <TableHead>Connections</TableHead>
              <TableHead>Health</TableHead>
              <TableHead>Visible To</TableHead>
              <TableHead>General Access</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox className="cursor-pointer" />
              </TableCell>
              <TableCell>michael's knowledge</TableCell>
              <TableCell>219 KB</TableCell>
              <TableCell>No connection</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Michael Mancini</TableCell>
              <TableCell>Private</TableCell>
              <TableCell>15 days ago</TableCell>
              <TableCell>8 days ago</TableCell>
              <TableCell>
                <EllipsisVertical />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </>
  );
}
