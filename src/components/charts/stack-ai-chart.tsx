"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { stackAIData } from "./data";

const chartConfig = {
  desktop: {
    label: "without Michael ",
    color: "var(--stackai)",
  },
  mobile: {
    label: "with Michael",
    color: "var(--stackmichael)",
  },
} satisfies ChartConfig;

export function StackAIChart() {
  return (
    <Card className="shadow-none border-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={stackAIData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
