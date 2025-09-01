import { Info } from "lucide-react";
import { AIRevenueChart } from "./ai-revenue-chart";
import { AIUsageChart } from "./ai-usage-chart";
import { PhoneChart } from "./phone-chart";
import { StackAIChart } from "./stack-ai-chart";
import { usageSources, revenueSources } from "./data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Charts() {
  return (
    <>
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
            AI Usage
            <Tooltip>
              <TooltipTrigger>
                <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium p-0.5">
                  Relative usage index based on monthly & daily active users
                  according to SimilarWeb
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <AIUsageChart />
          </div>
        </div>

        <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            AI Revenue
            <Tooltip>
              <TooltipTrigger>
                <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium p-0.5">
                  Estimated revenue run-rate index based on company-specific
                  baseline; (not USD)
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="min-h-[180px] bg-white rounded-b-lg">
            <AIRevenueChart />
          </div>
        </div>

        <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            Phones
            <Tooltip>
              <TooltipTrigger>
                <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium p-0.5">
                  iPhone or Android? Android.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="min-h-[220px] bg-white rounded-b-lg">
            <PhoneChart />
          </div>
        </div>

        <div className="grow border-1 shadow-bot rounded-lg shadow-md bg-white">
          <div className="bg-[#fafafa] h-9 text-sm border-b-1 rounded-t-lg flex items-center justify-start px-4 gap-2 text-gray-700 font-medium">
            Stack AI
            <Tooltip>
              <TooltipTrigger>
                <Info className="stroke-gray-400 size-[14px] cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium p-0.5">
                  Arbitrary units representing the impact of my work.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="min-h-[220px] bg-white rounded-b-lg">
            <StackAIChart />
          </div>
        </div>
      </div>

      <div className="my-20 mx-auto max-w-[700px]">
        <p className="mb-8">
          Instead of charts displaying project metrics for runs, users, tokens,
          and errors; I built these charts to display interesting datasets
          unrelated to the projects in this application.
        </p>
        <p className="mb-8">
          ChatGPT pulled together datasets spanning 24 months (2023-09 →
          2025-08) using public signals to estimate data for the big AI
          companies.
        </p>
        <p>
          Because the companies don&apos;t publish clean month-by-month usage or
          revenue, normalized indices anchored to reputable datapoints are used
          instead of hard numbers to represent users and revenue figures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <Card>
          <CardHeader>
            <CardTitle>Usage Estimates</CardTitle>
            <CardDescription>
              A value of 100 ≈ a recent peak month per company; some exceed 100
              when the next month ticks up.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <span className="font-semibold pr-2">OpenAI:</span>Similarweb
              shows +117% YoY and +6% MoM for ChatGPT’s traffic in July 2025 (≈
              5.72B monthly visits). This let me set ~46 for July 2024 and 100
              for July 2025, then interpolate.
            </div>

            <div>
              <span className="font-semibold pr-2">Claud/Anthropic:</span>
              Similarweb comparisons show claude.ai ~125.2M visits vs
              chatgpt.com 5.7B (July 2025), with ~10.47% MoM growth for Claude
              in July. I used Nov 2024 (~87.6M) and Jul 2025 (~125.2M) as
              anchors.
            </div>

            <div>
              <span className="font-semibold pr-2">Gemini:</span>Reports
              indicate ~284M visits in Feb 2025 and ~700M in July 2025; Business
              of Apps pegs ~47M active users (2025); We Are Social notes
              &gt;100M unique visitors to the standalone site in May 2025. Those
              shape the Gemini curve.
            </div>

            <div>
              <span className="font-semibold pr-2">xAI/Grok:</span>Exploding
              Topics reports ~30.1M MAU (Aug 2025); DemandSage listed ~6.7M DAU
              (Mar 2025). I set Mar 2025 ≈ 50 and Aug 2025 = 100.
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 items-start overflow-x-hidden">
            <h3 className="font-semibold">Sources:</h3>
            {usageSources.map((value) => (
              <a
                key={value}
                href={value}
                target="_blank"
                className="hover:underline hover:text-indigo-600 text-nowrap text-sm"
              >
                {value.length > 80 ? value.slice(0, 80) + "..." : value}
              </a>
            ))}
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Estimates</CardTitle>
            <CardDescription>
              Company-specific baseline anchored to widely reported ARR/run-rate
              points, then linearly interpolated month-to-month.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p>
              <span className="font-semibold pr-2">OpenAI:</span>Multiple
              reports cite ~$10B ARR (Jun 2025) and ~$12B+ by Jul 2025. I set
              July 2025 = 100 and backcast, so a value of 100 ≈ ~$12B ARR around
              2025-07.
            </p>

            <p>
              <span className="font-semibold pr-2">Anthropic:</span>Reported $1B
              ARR (Dec 2024) → $3B run-rate by May 2025 → ~$4–5B by July 2025
              (various outlets incl. Yahoo Finance/Bloomberg recap and The
              Information). A value of 100 ≈ ~$3B ARR around 2025-05 (later
              reports suggest ~$4-5B by July, thus &gt;100 thereafter)
            </p>

            <p>
              <span className="font-semibold pr-2">Gemini & xAI:</span>Neither
              breaks out clean revenue and public figures are sparse. Proxy
              indices are used and derived from subscription/API signals and
              adoption momentum to give you a sensible chartable trend (not
              dollars).
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 items-start overflow-x-hidden">
            <h3 className="font-semibold">Sources:</h3>
            {revenueSources.map((value) => (
              <a
                key={value}
                href={value}
                target="_blank"
                className="hover:underline hover:text-sky-500 text-nowrap text-sm"
              >
                {value.length > 80 ? value.slice(0, 80) + "..." : value}
              </a>
            ))}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
