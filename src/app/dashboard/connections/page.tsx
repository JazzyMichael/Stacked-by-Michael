import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <h1 className="font-semibold">Connections</h1>
        <Button className="cursor-pointer">
          <Plus /> New Connection
        </Button>
      </header>

      <main className="p-4"></main>
    </>
  );
}
