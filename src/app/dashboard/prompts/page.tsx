import { AppSidebar } from "@/components/sidebar-dashboard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  ClipboardCopy,
  EllipsisVertical,
  LayoutGrid,
  Plus,
  Search,
  Settings2,
  SquarePen,
  TableProperties,
  Trash2,
} from "lucide-react";

const mockPrompts = [
  {
    id: "1",
    title: "Prompt One",
    description: "This is the first prompt.",
    content:
      "Suggest domain names for the following project: {project details}",
    createdAt: "2023-10-01",
  },
  {
    id: "2",
    title: "Prompt Two",
    description: "This is the second prompt.",
    content: "Generate a marketing strategy for {product name}.",
    createdAt: "2023-10-02",
  },
  {
    id: "3",
    title: "Prompt Three",
    description: "This is the third prompt.",
    content: "Write a blog post about {topic}.",
    createdAt: "2023-10-03",
  },
  {
    id: "4",
    title: "Prompt Four",
    description: "This is the fourth prompt.",
    content: "Create a social media calendar for {brand}.",
    createdAt: "2023-10-04",
  },
  {
    id: "5",
    title: "Prompt Five",
    description: "This is the fifth prompt.",
    content: "Draft an email campaign for {event}.",
    createdAt: "2023-10-05",
  },
];

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b-1 border-gray-200">
        <h1 className="font-semibold">Prompt Library</h1>
        <Button className="cursor-pointer">
          <Plus /> Create Prompt
        </Button>
      </header>

      <main className="p-6 flex flex-wrap">
        {mockPrompts.map((prompt) => (
          <div key={prompt.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between border rounded-lg p-3 min-h-[180px] max-h-[214px] max-w-[346px] shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-sm font-medium text-[#09090b] truncate mb-1">
                    {prompt.title}
                  </h2>
                  <p className="text-xs text-[#71717A] line-clamp-2">
                    {prompt.description}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="h-7 w-7 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus:outline-none focus:ring-0 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                    <EllipsisVertical className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="end">
                    <DropdownMenuItem>
                      <SquarePen /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <Trash2 /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sm text-[#71717A] line-clamp-3 whitespace-pre-wrap text-pretty">
                {prompt.content}
              </p>

              <div className="flex items-end justify-between">
                <ClipboardCopy className="h-4 w-4" />
                <p className="text-xs text-[#71717a] mt-1">
                  Last updated: {prompt.createdAt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
