import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-full">
      <div className="w-[250px]">
        <div className="flex items-center justify-between py-2 px-3">
          <span className="text-xl font-semibold text-gray-500">
            Conversations
          </span>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-muted-foreground/20 hover:stroke-black"
          >
            <Search strokeWidth={2} className="size-[22px] stroke-gray-500" />
          </Button>
        </div>

        {/* <Input placeholder="Search" /> */}
      </div>
      <div className="bg-white grow text-lg flex items-center justify-center">
        <p className="text-gray-500 text-xl font-medium mb-20">
          No conversation selected
        </p>
      </div>
    </div>
  );
}
