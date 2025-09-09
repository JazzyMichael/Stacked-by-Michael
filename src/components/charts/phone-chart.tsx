"use client";

import { LabelList, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { phoneData } from "./data";

const chartConfig = {
  share: {
    label: "Market Share ",
  },
  iphone: {
    label: "iPhone",
    color: "var(--iphone)",
  },
  android: {
    label: "Android",
    color: "var(--android)",
  },
} satisfies ChartConfig;

export function PhoneChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="share" hideLabel />}
        />
        <Pie data={phoneData} dataKey="share">
          <LabelList
            dataKey="phone"
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
