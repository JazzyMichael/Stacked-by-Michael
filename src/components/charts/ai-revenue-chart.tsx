"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { aiRevenueData } from "./data";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  openai: {
    label: "Open AI",
    color: "var(--openai)",
  },
  anthropic: {
    label: "Anthropic",
    color: "var(--anthropic)",
  },
  gemini: {
    label: "Google Gemini",
    color: "var(--gemini)",
  },
  xai: {
    label: "Xai",
    color: "var(--xai)",
  },
} satisfies ChartConfig;

export function AIRevenueChart() {
  return (
    <Card className="p-2 rounded-none rounded-b-md border-none shadow-none">
      {/* <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>AI Revenue</CardTitle>
          <CardDescription>
            Estimated revenue in the big 4 AI companies
          </CardDescription>
        </div>
      </CardHeader> */}
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={aiRevenueData}>
            <defs>
              <linearGradient id="fillOpenAI" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-openai)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-openai)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAnthropic" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-anthropic)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-anthropic)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGemini" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gemini)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gemini)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillXai" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-xai)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-xai)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="openai"
              type="natural"
              fill="url(#fillOpenAI)"
              stroke="var(--color-openai)"
              stackId="a"
            />
            <Area
              dataKey="anthropic"
              type="natural"
              fill="url(#fillAnthropic)"
              stroke="var(--color-anthropic)"
              stackId="b"
            />
            <Area
              dataKey="gemini"
              type="natural"
              fill="url(#fillGemini)"
              stroke="var(--color-gemini)"
              stackId="c"
            />
            <Area
              dataKey="xai"
              type="natural"
              fill="url(#fillXai)"
              stroke="var(--color-xai)"
              stackId="d"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
