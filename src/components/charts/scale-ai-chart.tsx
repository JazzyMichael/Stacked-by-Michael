"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { stackAIData } from "./data";

export const description = "A multiple bar chart";

const chartConfig = {
  desktop: {
    label: "without Michael ",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "with Michael",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ScaleAIChart() {
  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        {/* <CardTitle>Scale AI</CardTitle> */}
        {/* <CardDescription>Company Growth and Employee Happiness</CardDescription> */}
      </CardHeader>
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
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          These arbitrary numbers show a massive increase in "units" when
          Michael stops working on his clone of StackAI and begins working with
          the actual company.
        </div>
      </CardFooter> */}
    </Card>
  );
}
