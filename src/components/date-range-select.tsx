"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarRange } from "lucide-react";
import { useState } from "react";
import { type DateRange } from "react-day-picker";

export function DateRangeSelect() {
  const [open, setOpen] = useState(false);

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 7, 17),
    to: new Date(2025, 8, 15),
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex justify-between bg-white">
          <CalendarRange />
          {`${dateRange?.from?.toLocaleDateString()} - ${dateRange?.to?.toLocaleDateString()}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="end">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </PopoverContent>
    </Popover>
  );
}
