import { Info } from "lucide-react";
import { AIRevenueChart } from "./ai-revenue-chart";
import { AIUsageChart } from "./ai-usage-chart";
import { PhoneChart } from "./phone-chart";
import { ScaleAIChart } from "./scale-ai-chart";

// Nice gradients for placeholders:
// bg-gradient-to-br from-blue-400 to-purple-500
// bg-gradient-to-br from-pink-400 to-red-500

export default function Charts() {
  return (
    <div
      className="
              grid
              gap-8
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
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

      <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
        <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
          Phones <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
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
  );
}
