import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { basicFit, greatFit, exceptionalFit } from "./data";
import { ChevronDownIcon } from "lucide-react";

const colors = [
  "text-emerald-900",
  "text-teal-900",
  "text-cyan-900",
  "text-sky-900",
  "text-blue-900",
  "text-indigo-900",
  "text-purple-900",
  "text-violet-900",
  "text-fuchsia-900",
];

const bgColors = [
  "hover:bg-emerald-100",
  "hover:bg-teal-100",
  "hover:bg-cyan-100",
  "hover:bg-sky-100",
  "hover:bg-blue-100",
  "hover:bg-indigo-100",
  "hover:bg-purple-100",
  "hover:bg-violet-100",
  "hover:bg-fuchsia-100",
];

export default async function Page() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto my-6">
      <Tabs defaultValue="platform">
        <TabsList className="mx-auto mb-20">
          <TabsTrigger value="platform">Platform Evaluation</TabsTrigger>
          <TabsTrigger value="basic">Basic Duties</TabsTrigger>
          <TabsTrigger value="great">Great-Fit Requirements</TabsTrigger>
          <TabsTrigger value="exceptional">
            Exceptional-Fit Qualifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="platform" className="mx-auto mb-20">
          <PlatformEvaluation />
        </TabsContent>

        <TabsContent value="basic" className="mx-auto mb-20">
          <BasicSection />
        </TabsContent>

        <TabsContent value="great" className="mx-auto mb-20">
          <GreatSection />
        </TabsContent>

        <TabsContent value="exceptional" className="mx-auto mb-20">
          <ExceptionalSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function BasicSection() {
  return (
    <>
      <p className="text-lg text-center font-semibold mb-10 p-6 border-2 border-slate-300">
        An evaluation of each item from the{" "}
        <a
          target="_blank"
          href="https://www.ycombinator.com/companies/stackai/jobs/C1rOopy-senior-frontend-engineer"
          className="underline hover:text-blue-800"
        >
          Senior Frontend Engineer Job Listing
        </a>
        .
      </p>

      <Accordion type="multiple" className="max-w-3xl">
        {basicFit.map(({ skill, experience }, i) => (
          <AccordionItem
            key={`exceptional-${i + 1}`}
            value={`exceptional-${i + 1}`}
          >
            <AccordionTrigger className={`${colors[i + 1]} text-md`}>
              {skill}
              <ChevronDownIcon
                className={`${colors[i]} pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200`}
              />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{experience}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

function GreatSection() {
  return (
    <>
      <p className="text-lg text-center font-semibold mb-10 p-6 border-2 border-slate-300">
        An evaluation of each item from the{" "}
        <a
          target="_blank"
          href="https://www.ycombinator.com/companies/stackai/jobs/C1rOopy-senior-frontend-engineer"
          className="underline hover:text-blue-800"
        >
          Senior Frontend Engineer Job Listing
        </a>
        .
      </p>

      <Accordion type="multiple" className="max-w-3xl">
        {greatFit.map(({ skill, experience }, i) => (
          <AccordionItem
            key={`exceptional-${i + 1}`}
            value={`exceptional-${i + 1}`}
          >
            <AccordionTrigger className={`${colors[i + 1]} text-md`}>
              {skill}
              <ChevronDownIcon
                className={`${colors[i]} pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200`}
              />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{experience}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

function ExceptionalSection() {
  return (
    <>
      <p className="text-lg text-center font-semibold mb-10 p-6 border-2 border-slate-300">
        An evaluation of each item from the{" "}
        <a
          target="_blank"
          href="https://www.ycombinator.com/companies/stackai/jobs/C1rOopy-senior-frontend-engineer"
          className="underline hover:text-blue-800"
        >
          Senior Frontend Engineer Job Listing
        </a>
        .
      </p>

      <Accordion type="multiple" className="max-w-3xl">
        {exceptionalFit.map(({ skill, experience }, i) => (
          <AccordionItem
            key={`exceptional-${i + 1}`}
            value={`exceptional-${i + 1}`}
          >
            <AccordionTrigger
              className={`${colors[i + 1]} ${bgColors[i + 1]} text-md px-4`}
            >
              {skill}
              <ChevronDownIcon
                className={`${colors[i]} pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200`}
              />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance pt-2 pb-4 px-8">
              <p>{experience}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

function PlatformEvaluation() {
  return (
    <div className="max-w-3xl">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          Evaluation of the Stack AI Platform
        </h3>
        <p className="mt-1 max-w-3xl text-sm/6 text-gray-500 dark:text-gray-400">
          Some ideas I had while building this project.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-white/5">
        <dl className="divide-y divide-gray-100 dark:divide-white/5">
          <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Application Cover Letter
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              The job application form on jobs.ashbyhq.com/stack-ai only has
              fields for name, email, and resume. Adding a cover letter field
              will provide applicants like myself the opportunity to describe
              interest in StackAI specifically and mention details about startup
              experience and motivation.
            </dd>
          </div>

          <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Emphasize "Agent Stacks"
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Similar to "Tech Stacks" and "Supplement Stacks", we have the
              potential to create a new concept called "Agent Stacks" and create
              an entire subculture around this concept.
            </dd>
          </div>

          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Rapid Template Generation
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Provide an interface for text prompts that can be used to quickly
              structure workflows using Natural Language Processing and
              fine-tuned or large context models to turn a text prompt into a
              workflow outline. New browser APIs already exist in Chrome for
              running client-side LLMs, with many more in origin trials and in
              development for support across all browsers. Adopting these new
              technologies can not only add value to the product, but foster
              relationships with browser maintainers that could lead to
              partnerships, publicity, and influence in the development of these
              new cutting-edge features.
            </dd>
          </div>

          <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-900">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Flowchart Node Groupings
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Within a project workflow, we can create sections of nodes that
              can be arranged and shared as a group of nodes.
            </dd>
          </div>

          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-900">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Project Folders & Selection
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              The current Stack AI projects view does not provide a way to
              search all projects, only to search projects in the selected
              folder. It's unclear if this is intentional, however adding this
              functionality can significantly increase user productivity. This
              is something I personally found annoying while playing with the
              platform, and it's seemingly a small change.
            </dd>
          </div>

          <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              404 Redirects
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              Many route paths display a 404/Not-Found page, however many routes
              can "fallback" to the dashboard or workflow pages if the url does
              not match a specific route. I implemented this in my project, it
              can be tested by navigating to{" "}
              <a
                target="_blank"
                href="https://www.stack-ai.com/dashboard/potatoes"
              >
                stack-ai.com/dashboard/potatoes
              </a>
              , compared to{" "}
              <a target="_blank" href="/dashboard/potatoes">
                stacked-by-michael.vercel.app/dashboard/potatoes
              </a>
            </dd>
          </div>

          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 dark:bg-gray-800/25">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Color!
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
              There is a lot of black and white in the color scheme, adding just
              a hint of colors that correspond to different aspects of the
              platform can be more visually appealing.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
