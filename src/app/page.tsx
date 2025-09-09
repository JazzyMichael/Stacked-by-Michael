"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { CalendarClock, CheckCircle, Cloud, Lock, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { asciiLogo } from "@/lib/ascii-art";
import { Fragment } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const placeholderImage =
  "https://framerusercontent.com/images/CXQ0y8QtXsQfoTEbe9iuOSDLJE.svg";

interface NavItem {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const navItems: {
  product: NavItem[];
  industries: NavItem[];
  "explore stackai": NavItem[];
  "stay connected": NavItem[];
} = {
  product: [
    {
      title: "Workflow Builder",
      href: "#",
      description: "Build AI automations",
      image:
        "https://framerusercontent.com/images/CXQ0y8QtXsQfoTEbe9iuOSDLJE.svg",
    },
    {
      title: "Interfaces",
      href: "#",
      description: "Deploy user-facing agents",
      image:
        "https://framerusercontent.com/images/WNQZY7RHl99uHSQgSKAechACD0.svg",
    },
    {
      title: "Knowledge Bases",
      href: "#",
      description: "Power smart data retrieval",
      image:
        "https://framerusercontent.com/images/WNQZY7RHl99uHSQgSKAechACD0.svg",
    },
    {
      title: "Integrations",
      href: "#",
      description: "Connect your tools",
      image:
        "https://framerusercontent.com/images/kaU2BceNJfm5SuadSJcrReiSc.svg",
    },
  ],
  industries: [
    {
      title: "Finance",
      href: "#",
      description: "For banks and financial teams",
      image:
        "https://framerusercontent.com/images/w2oaM2VChIf6YRuw1W74gXgCJM.svg",
    },
    {
      title: "Insurance",
      href: "#",
      description: "For insurers and brokers",
      image:
        "https://framerusercontent.com/images/ofOyoPyWBPrKpF92g7Ggmxszvr4.svg",
    },
    {
      title: "Industrials",
      href: "#",
      description: "For manufacturing and logistics",
      image:
        "https://framerusercontent.com/images/Ps50deaCjs6dZo88VdiAwwpKM1Q.svg",
    },
    {
      title: "Education",
      href: "#",
      description: "For schools and universities",
      image:
        "https://framerusercontent.com/images/0onlniPVT5Dfg9F2RAqSVgAYgNY.svg",
    },
    {
      title: "Government",
      href: "#",
      description: "For public sector teams",
      image:
        "https://framerusercontent.com/images/w2oaM2VChIf6YRuw1W74gXgCJM.svg",
    },
  ],
  "explore stackai": [
    {
      title: "Academy",
      href: "#",
      description: "Learn with videos & real use cases",
      image:
        "https://framerusercontent.com/images/Iir0VEg1uOG1zEVo46QpsQa5k.svg",
    },
    {
      title: "Docs",
      href: "#",
      description: "How to use StackAI",
      image:
        "https://framerusercontent.com/images/yXQNOJkXJU9fQb5oKBtrlbNZsE.svg",
    },
    {
      title: "Integrations",
      href: "#",
      description: "Connect with your tools",
      image:
        "https://framerusercontent.com/images/kaU2BceNJfm5SuadSJcrReiSc.svg",
    },
    {
      title: "Security",
      href: "#",
      description: "Built for compliance",
      image:
        "https://framerusercontent.com/images/VvR1jnCrxViKxhDT4TIQNbdTvk.svg",
    },
    {
      title: "LLM Leaderboard",
      href: "#",
      description: "Compare AI models",
      image:
        "https://framerusercontent.com/images/hISivjKiXLp1dShP4ZWOskpsVs.svg",
    },
  ],
  "stay connected": [
    {
      title: "Blog",
      href: "#",
      description: "Read the latest news from us",
      image:
        "https://framerusercontent.com/images/eJ8pl9rPCBSTc4iiat5CBRBYQH0.svg",
    },
    {
      title: "Changelog",
      href: "#",
      description: "Latest updates",
      image:
        "https://framerusercontent.com/images/mJpy1p0OOTBZqaO3x4u79InnHR4.svg",
    },
    {
      title: "Discord",
      href: "#",
      description: "Join our community on Discord",
      image:
        "https://framerusercontent.com/images/hOTlAEnNI3yvgGImiEBfKD5vlU.svg",
    },
    {
      title: "Careers",
      href: "#",
      description: "Join our team",
      image:
        "https://framerusercontent.com/images/RRGgumwSmm29dKmxbv0K0Ga81M.svg",
    },
  ],
};

export default function Page() {
  console.log(asciiLogo);
  return (
    <>
      <NavigationMenu
        viewport={false}
        className="justify-between w-full max-w-none py-3 px-5 bg-white! z-40 sticky top-0 border-b-1"
      >
        <Logo />

        <NavItemList />

        <Buttons />
      </NavigationMenu>

      <HeroSection />

      <AboutSection />

      <NotableFeatures />

      <TechStack />

      <DarkSection />

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 mb-20">
      {/* aesthetics */}
      <div className="absolute top-0 lg:left-1/2 lg:translate-x-[-50%] lg:border-x-1 border-gray-300 w-full max-w-6xl mx-auto h-[700px]">
        <Image
          src="/stack-ai-shape-1.webp"
          alt="Shape"
          width={1011}
          height={1024}
          className="absolute left-[-120px] top-6 z-40 w-48 h-48 hidden lg:block animate-spin animation-duration-30000 hover:scale-125 transition-transform duration-500"
        />
        <div className="border-b-1 border-gray-300 w-full max-w-6xl h-[140px]"></div>
        <Image
          src="/stack-ai-shape-2.avif"
          alt="Shape"
          width={512}
          height={467}
          className="absolute top-[520px] left-[1050px] z-40 w-48 h-48 hidden lg:block animate-bounce animation-duration-1500 hover:scale-125 transition-transform duration-500"
        />
      </div>

      {/* aesthetic line */}
      <div className="absolute top-[700px] -z-10 left-0 border-t-1 border-gray-300 w-full h-1">
        <HorizontalLogoScroll />
      </div>

      {/* aesthetic faded gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-40">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
            A clone of Stack-AI built by Michael Mancini.{" "}
            <a
              href="https://stack-ai.com/dashboard"
              target="_blank"
              className="font-semibold text-indigo-600 dark:text-indigo-400"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Compare with the original <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            The best kind of job application ...
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
            ... is one that demonstrates skills, passion, values, and genuine
            desire to team up. Let me show you why I'm a perfect fit to join you
            in bringing Agent Orchestration to the world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 z-50"
            >
              Get started
            </a>
            <span
              className="text-sm/6 font-semibold text-gray-900 dark:text-white cursor-pointer z-50"
              onClick={() => {
                document
                  .getElementById("learn-more")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn more <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* aesthetic gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}

function HorizontalLogoScroll() {
  return (
    <div className="overflow-hidden hidden md:block border-b-1 border-gray-300 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div className="flex items-center gap-8 py-8 w-full animate-scroll opacity-60">
        {new Array(20).fill(true).map((_, i) => (
          <Fragment key={`scroll-${i}`}>
            <Image
              src="/stack-ai-logo-image.svg"
              alt="StackAI Logo"
              width={107}
              height={109}
              className="h-6"
            />
            <Image
              src="/stack-ai-logo-text.svg"
              alt="StackAI Logo"
              width={325}
              height={73}
              className="h-6"
            />
            <Image
              src="/colored-logo.svg"
              alt="StackAI Logo"
              width={107}
              height={109}
              className="h-6"
            />
            <Image
              src="/stack-ai-logo-text.svg"
              alt="StackAI Logo"
              width={325}
              height={73}
              className="h-6"
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function NotableFeatures() {
  const features = [
    {
      name: "Fancy Sidebar",
      description:
        "The sidebar on the dashboard and project workflow pages is really cool. I used shadcn and Tailwind CSS 'group' feature to dynamically change the width and overlay effects. This functionality provides a convenient way to select navigation items and adds a unique feel to the website.",
      icon: Cloud,
    },
    {
      name: "Flowchart Canvas",
      description:
        "This is a core part of the platform, so it is important to get this right. I used the same library as StackAI to build the flowchart components and created different types of nodes and templates that can be used, and set up a few sample projects to display an outline of my work experience and a showcase of all the node templates.",
      icon: Lock,
    },
    {
      name: "Scaffolding & Creativity",
      description:
        "Built each page to match the UI design on the StackAI platform and incorporated personal details as a fun way to share my work experience, skills, motivations, and personality. This project is set up to scale and uses the same route structure and underlying patterns as the offical site.",
      icon: Server,
    },
  ];

  return (
    <div className="overflow-hidden border-y-8 border-t-indigo-300 border-b-indigo-500 py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                StackAI+
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
                More than just a clone
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                This is a custom job application and also a fun project. I added
                my own personal touch to various aspects of the platform, and
                now I'm ready to stop working on this and start working with the
                actual company 😂. These are some of the features I built:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Flowchart Screenshot"
            src="/flowchart-screenshot.png"
            width={1216}
            height={721}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a
      href="/projects"
      className="flex flex-row items-center justify-start gap-2 z-50"
    >
      <img
        src="/stack-ai-logo-image.svg"
        alt="Logo"
        className="h-7 flex-shrink-0"
      />

      <img src="/stack-ai-logo-text.svg" alt="Logo" className="h-[18px]" />
    </a>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 z-50">
      <Button
        variant="secondary"
        className="bg-gray-200 hover:bg-gray-300 hidden sm:flex"
        asChild
      >
        <a href="/auth/login">Login</a>
      </Button>
      <Button
        onClick={() => {
          document
            .getElementById("get-in-touch")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get a demo
      </Button>
    </div>
  );
}

function ListItem({
  title,
  description,
  href = "#",
  image = placeholderImage,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href?: string;
  description?: string;
  image?: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-row gap-2 items-start py-2"
          onClick={() => {
            toast.info("Usually this would navigate to a marketing page", {
              duration: 2000,
              action: (
                <Button
                  variant={"outline"}
                  onClick={() => redirect("/dashboard/projects")}
                >
                  Go to Dashboard
                </Button>
              ),
            });
          }}
        >
          <Image
            aria-hidden
            src={image}
            alt="Navigation Menu Item"
            width={40}
            height={40}
          />
          <div>
            <div className="text-sm leading-none font-medium mb-1">{title}</div>
            {description && (
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {description}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavItemList() {
  return (
    <NavigationMenuList className="hidden md:flex">
      <NavigationMenuItem className="z-40">
        <NavigationMenuTrigger onClick={(e) => e.preventDefault()}>
          Solutions
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50 flex">
          <div>
            <div className="text-xs text-gray-400 font-bold p-2">PRODUCT</div>
            <ul className="grid gap-2 w-[300px] lg:grid-cols-[1fr]">
              {navItems.product.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  description={component.description}
                  image={component.image}
                ></ListItem>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-gray-400 font-bold p-2">
              INDUSTRIES
            </div>
            <ul className="grid gap-2 w-[300px] lg:grid-cols-[1fr]">
              {navItems.industries.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  description={component.description}
                  image={component.image}
                ></ListItem>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem className="z-40 hidden lg:list-item hover:bg-white">
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Templates</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="z-40 hidden lg:list-item">
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Customers</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="z-40 hidden lg:list-item bg-white">
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Pricing</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="z-40 bg-white">
        <NavigationMenuTrigger
          onClick={(e) => e.preventDefault()}
          className="bg-white!"
        >
          Resources
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50 flex -left-40">
          <div>
            <div className="text-xs text-gray-400 font-bold p-2">
              EXPLORE STACKAI
            </div>
            <ul className="grid gap-2 w-[300px]">
              {navItems["explore stackai"].map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href ?? ""}
                  description={component.description}
                ></ListItem>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-gray-400 font-bold p-2">
              STAY CONNECTED
            </div>
            <ul className="grid gap-2 w-[300px]">
              {navItems["stay connected"].map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href ?? ""}
                  description={component.description}
                ></ListItem>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem className="z-40 hidden lg:list-item bg-white">
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Talk to Us</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

function DarkSection() {
  return (
    <div id="get-in-touch" className="mx-auto my-20 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Schedule an intro call
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
          or shoot me an email{" "}
          <a
            href="mailto:thejazzymichael@gmail.com"
            className="text-indigo-300 hover:text-indigo-200"
          >
            thejazzymichael@gmail.com
          </a>
        </p>
        <Button
          asChild
          className="mx-auto mt-6 rounded-md bg-white hover:bg-indigo-200 text-indigo-800 px-3.5 py-2.5 flex w-56"
        >
          <a
            href="https://calendar.app.google/YjQ8RY92xmaFi1ek9"
            target="_blank"
          >
            <CalendarClock />
            Google Calendar Scheduler
          </a>
        </Button>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              r={1}
              cx={0}
              cy={0}
              id="759c1415-0410-454c-8f7c-9a820de03641"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col gap-2 items-center my-10 text-[10px] font-medium text-gray-500">
      <span>&copy; 2025 Stacked-By-Michael. All rights reserved.</span>
      <span>Made with ❤️ by Michael Mancini</span>
      <div className="border-1 border-gray-300 text-black text-xs rounded-4xl py-1 px-3 my-1 flex gap-3 items-center">
        <div className="relative flex size-2 items-center justify-center">
          <span className="animate-ping animation-duration-1500 absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex size-1 rounded-full bg-green-500"></span>
        </div>{" "}
        All Systems Operational
      </div>
    </div>
  );
}

const featuredTestimonial = {
  // body: "Stack AI is creating an AI Agent Stack, providing an intuitive no-code interface for users and enterprises to configure automated AI processes using custom stacks of tools and features to create perfect agents designed to do anything you want.",
  body: "The tech stack is the heart of a software system; the culmination of compnents and tools that provide the best possible experience to the user to accomplish any task. This includes everything from a beautiful design to efficient data requests, developed in a way to iteratively expand the functionality frequently and predictably.",
  author: {
    name: "Michael Mancini",
    handle: "Senior Frontend & Fullstack Software Engineer",
    imageUrl: "/cat-avatar.jpg",
    logoUrl:
      "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
  },
};

const testimonials = [
  [
    [
      {
        body: "The best framework for building complex applications with a highly optimized client-server integration for peak performance and maintainability. Server actions, API endpoints, ORM integrations, React, Typescript, accessible developer relations - this is the cutting edge of web development.",
        author: {
          name: "Next.js & Vercel",
          handle: "lesliealexander",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1024px-Nextjs-logo.svg.png",
        },
      },
      {
        body: "Hooks, server components, state managment patterns (reducer-context, zustand, tanstack, ...), efficient data loading and caching, rendering strategies, streaming, community engagement - all of this makes for a fun and optimized way to build web & hybrid applications.",
        author: {
          name: "",
          handle: "",
          imageUrl:
            "https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png",
        },
      },
    ],
    [
      {
        body: "Library for building interactive flow charts, used on the project workflow page. Custom node templates, connections, animations; everything you could ever want in a flowchart.",
        author: {
          name: "React Flow",
          handle: "lindsaywalton",
          imageUrl:
            "https://www.drupal.org/files/project-images/99999999999999999_1_2a116db3f4.png",
        },
      },
    ],
  ],
  [
    [
      {
        body: "UI design using the best tools in the industry - Tailwind, Shadcn, RadixUI, HeadlessUI, Motion (Framer), and a strong foundational understanding of CSS, design systems, and optimized rendering & styling in the browser.",
        author: {
          name: "Shadcn, Radix, Tailwind, Motion",
          handle: "tomcook",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
        },
      },
    ],
    [
      {
        body: "Database, Storage, Auth, Web Sockets - Supabase is the leading serverless provider and a great Firebase successor. Combined with Replicate to run, fine-tune, and deploy the latest LLMs sets the tone for the modern full-stack landscape.",
        author: {
          name: "Supabase & Replicate",
          handle: "leonardkrasner",
          imageUrl:
            "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj2lzckut9q9mdcptril2.png",
        },
      },
      {
        body: "Embracing code generation using prompt engineering & IDE-based-AI-auto-complete can be leveraged to increase productivity more than your wildest dreams. 10x developers are becoming 100x developers.",
        author: {
          name: "Copilot & AI-assisted coding",
          handle: "floydmiles",
          imageUrl:
            "https://images.icon-icons.com/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png",
        },
      },
    ],
  ],
];

function TechStack() {
  return (
    <div className="relative isolate bg-gradient-to-b from-white to-transparent py-40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Tech Stack
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            Latest & greatest tools for modern Web Development
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 dark:text-gray-100">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8 dark:text-white">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap dark:border-white/10">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50 dark:bg-gray-700"
              />
              <div className="flex-auto">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{`${featuredTestimonial.author.handle}`}</div>
              </div>
              {/* <img
                alt=""
                src={featuredTestimonial.author.logoUrl}
                className="h-10 w-auto flex-none dark:hidden"
              />
              <img
                alt=""
                src={featuredTestimonial.author.logoUrl.replace(
                  "-gray-900",
                  "-gray-100"
                )}
                className="h-10 w-auto flex-none not-dark:hidden"
              /> */}
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10"
                    >
                      <blockquote className="text-gray-900 dark:text-white">
                        <p>{`${testimonial.body}`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="bg-gray-50 dark:bg-gray-700"
                        />
                        {/* <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                        </div> */}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  const listItems = [
    "Skills -> Knowledge Bases",
    "Work Experience -> Project Workflow",
    "Motivation -> Project Manager",
    "Candidate Assesment -> Project Evaluator",
  ];
  return (
    <div id="learn-more" className="pt-8 pb-40">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 pr-6 p-4 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20 xl:pr-20">
            <Image
              src="/file-structure.png"
              alt="File Structure Screenshot"
              width={253}
              height={824}
              className=" flex-none rounded-lg object-contain shadow-none lg:h-auto lg:max-w-sm"
            />
            <div className="w-full h-full mt-auto flex-auto flex flex-col gap-1 pb-4">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl dark:text-white pt-10">
                What is this?
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
                There are many cool YC companies and job listings - however this
                company is exactly what I'm looking for and I believe I am the{" "}
                {""}
                <span className="font-semibold">best possible fit</span> for the
                open Software Engineering roles. The goal of this project is to
                demonstrate my interest in Stack AI specifically, which warrants
                a special job application to make it clear that I am not
                treating this like a regular job, rather an opportunity to join
                a community of people working hard to change the landscape of
                no-code software development by leveraging the latest
                innovations in tech & AI to provide value and liberation at a
                massive scale, while enjoying every step of the process.
              </p>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2 dark:text-gray-200"
              >
                {listItems.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckCircle
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-indigo-500 dark:text-gray-200"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-between">
                <a
                  href="/dashboard/projects"
                  className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  See the Dashboard
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="/project/career/workflow"
                  className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  See the Workflow Editor
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <p className="mt-6 text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
                I used the same structure as Stack AI to build 5 pages in the{" "}
                <span className="text-slate-900">/dashboard/*</span> route
                group, 5 pages in the{" "}
                <span className="text-slate-900">/project/[id]/*</span> routes,
                a replica of your{" "}
                <span className="text-slate-900">/auth/login</span> page
                including the fancy 3D hover effect and branding assets, and
                this lavish landing page. I added some fun elements throughout
                the site, and{" "}
                <span className="font-semibold">
                  I encourage you to check out all of them,
                </span>{" "}
                but if you&apos;re in a hurry you can see my skills in the{" "}
                <Link href="/dashboard/knowledge-bases" className="underline">
                  Knowledge Bases page
                </Link>
                , my work experience in the{" "}
                <Link href="/project/career/workflow" className="underline">
                  Workflow page
                </Link>
                , my inspiration in the{" "}
                <Link href="/project/career/manager" className="underline">
                  Manager page
                </Link>
                , and an complete evaluation of everything in the{" "}
                <Link href="/project/career/evaluator" className="underline">
                  Evaluator page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#8680fd] opacity-50 dark:from-[#80caff] dark:to-[#4f46e5] dark:opacity-20"
          />
        </div>
      </div>
    </div>
  );
}
