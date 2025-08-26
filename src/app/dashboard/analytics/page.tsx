import { DateRangeSelect } from "@/components/date-range-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

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

        <div
          className="
              grid
              gap-4
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
        >
          <div className="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500" />
          <div className="h-40 rounded-lg bg-gradient-to-br from-green-400 to-teal-500" />
          <div className="h-40 rounded-lg bg-gradient-to-br from-pink-400 to-red-500" />
          <div className="h-40 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500" />
        </div>
      </main>
    </>
  );
}
