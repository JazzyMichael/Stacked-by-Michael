import { DateRangeSelect } from "@/components/date-range-select";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Download, Info, Settings, Sparkles } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ScaleAIChart } from "@/components/charts/scale-ai-chart";
import { AIRevenueChart } from "@/components/charts/ai-revenue-chart";
import { AIUsageChart } from "@/components/charts/ai-usage-chart";
import { PhoneChart } from "@/components/charts/phone-chart";

const items = [
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "last-7-days" },
  { label: "Last 4 weeks", value: "last-4-weeks" },
  { label: "Last 3 months", value: "last-3-months" },
  { label: "Last 12 months", value: "last-12-months" },
  { label: "Month to date", value: "month-to-date" },
  { label: "Quarter to date", value: "quarter-to-date" },
  { label: "Year to date", value: "year-to-date" },
  { label: "All time", value: "all-time" },
];

export default function Page() {
  return (
    <div className="pb-40">
      <div className="p-4 flex justify-between">
        <div className="flex items-center gap-2">
          <Select defaultValue={items[1].value}>
            <SelectTrigger className="cursor-pointer bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <DateRangeSelect />
        </div>

        <div className="flex gap-2">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Sparkles className="size-4 mr-2" /> Flow Report
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="flex flex-col gap-2 items-start">
                  <span className="font-semibold">AI-Powered report</span>
                  <span>Download a PDF AI-powered report</span>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Download className="size-4 mr-2" /> Download Logs
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="flex flex-col gap-2 items-start">
                  <span className="font-semibold">CSV</span>
                  <span>Download logs as a .csv file</span>
                </MenubarItem>
                <MenubarItem className="flex flex-col gap-2 items-start">
                  <span className="font-semibold">JSON</span>
                  <span>Download logs as a .json file</span>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Button variant="outline" size="icon">
            <Settings />
          </Button>
        </div>
      </div>

      {/* Charts Grid */}
      <div
        className="
                  grid
                  gap-8
                  grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-4
                  p-8
                "
      >
        <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            AI Usage{" "}
            <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <AIUsageChart />
          </div>
        </div>

        <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            AI Revenue{" "}
            <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <AIRevenueChart />
          </div>
        </div>

        <div className="h-fit border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            Phones{" "}
            <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <PhoneChart />
          </div>
        </div>

        <div className="h-fit border-1 shadow-bot rounded-lg shadow-md">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            Scale AI{" "}
            <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <ScaleAIChart />
          </div>
        </div>
      </div>
    </div>
  );
}
