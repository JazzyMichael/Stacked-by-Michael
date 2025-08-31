import { Info } from "lucide-react";
import { DateRangeSelect } from "@/components/date-range-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { PhoneChart } from "../../../components/charts/phone-chart";
import { ScaleAIChart } from "@/components/charts/scale-ai-chart";
import { AIRevenueChart } from "@/components/charts/ai-revenue-chart";
import { AIUsageChart } from "@/components/charts/ai-usage-chart";

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
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b-1 border-gray-200">
        <h1 className="font-semibold">Project Analytics</h1>

        <div className="flex items-center gap-2">
          <Select defaultValue={items[0].value}>
            <SelectTrigger className="cursor-pointer">
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
      </header>

      <main className="px-8 py-4">
        <h2 className="mb-4 text-lg">Overview</h2>

        <br />

        <div
          className="
              grid
              gap-8
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
        >
          {/* <div className="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500" /> */}
          {/* <div className="h-40 rounded-lg bg-gradient-to-br from-pink-400 to-red-500" /> */}

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

          <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
            <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
              Phones{" "}
              <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
            </div>

            <div className="min-h-[180px] bg-white rounded-b-lg">
              <PhoneChart />
            </div>
          </div>

          <div className="grow border-1 shadow-bot rounded-lg shadow-md">
            <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
              Scale AI{" "}
              <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
            </div>

            <div className="min-h-[180px] bg-white rounded-b-lg">
              <ScaleAIChart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
