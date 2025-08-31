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
  return (
    <>
      <NavigationMenu
        viewport={false}
        className="justify-between w-full max-w-none py-3 px-5 bg-white"
      >
        <Logo />

        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem className="z-40">
            <NavigationMenuTrigger onClick={(e) => e.preventDefault()}>
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50">
              {/* <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                description="Re-usable components built using Radix UI and Tailwind CSS."
              ></ListItem>
              <ListItem
                href="/docs/installation"
                title="Installation"
                description="How to install dependencies and structure your app."
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Typography"
                description="Styles for headings, paragraphs, lists...etc"
              ></ListItem>
            </ul> */}
              <div className="text-xs text-gray-400 font-bold p-2">PRODUCT</div>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {navItems.product.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    description={component.description}
                    image={component.image}
                  ></ListItem>
                ))}
              </ul>

              <div className="text-xs text-gray-400 font-bold p-2">
                INDUSTRIES
              </div>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {navItems.industries.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    description={component.description}
                    image={component.image}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="z-40 hidden lg:list-item">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Templates</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="z-40 hidden lg:list-item">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Customers</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="z-40 hidden lg:list-item">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="z-40">
            <NavigationMenuTrigger onClick={(e) => e.preventDefault()}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50">
              <div className="text-xs text-gray-400 font-bold p-2">
                EXPLORE STACKAI
              </div>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navItems["explore stackai"].map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href ?? ""}
                    description={component.description}
                  ></ListItem>
                ))}
              </ul>

              <div className="text-xs text-gray-400 font-bold p-2">
                STAY CONNECTED
              </div>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navItems["stay connected"].map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href ?? ""}
                    description={component.description}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="z-40 hidden lg:list-item">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Talk to Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <Buttons />
      </NavigationMenu>

      <div className="relative isolate px-6 pt-14 lg:px-8 mb-40">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
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

      <DarkSection />

      <Footer />
    </>
  );
}
// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }

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
    <div className="hidden md:flex gap-2 z-50">
      <Button
        variant="secondary"
        className="bg-gray-200 hover:bg-gray-300"
        asChild
      >
        <a href="/auth/login">Login</a>
      </Button>
      <Button>Get a demo</Button>
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
        <Link href={href} className="flex flex-row gap-2 items-start py-2">
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

// export default function App() {
//   return (
//     <>
//       <nav className="hidden md:flex justify-between items-center py-3 px-5 border-b-1 bg-white">
//         <a
//           href="/projects"
//           className="flex flex-row items-center justify-start gap-2"
//         >
//           <img
//             src="/stack-ai-logo-image.svg"
//             alt="Logo"
//             className="h-7 flex-shrink-0"
//           />

//           <img src="/stack-ai-logo-text.svg" alt="Logo" className="h-[18px]" />
//         </a>

//         <NavigationMenu viewport={false}>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
//               <NavigationMenuContent className="flex gap-2 p-2 md:w-[540px]">
//                 <div>
//                   <p className="text-[11px] text-gray-400 font-semibold p-2">
//                     PRODUCT
//                   </p>
//                   <ul>
//                     {navItems.product.map((component) => (
//                       <ListItem
//                         key={component.title}
//                         title={component.title}
//                         description={component.description}
//                         image={component.image}
//                       ></ListItem>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="text-[11px] text-gray-400 font-semibold p-2">
//                     INDUSTRIES
//                   </p>
//                   <ul>
//                     {navItems.industries.map((component) => (
//                       <ListItem
//                         key={component.title}
//                         title={component.title}
//                         description={component.description}
//                         image={component.image}
//                       ></ListItem>
//                     ))}
//                   </ul>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink
//                 asChild
//                 className={navigationMenuTriggerStyle()}
//               >
//                 <Link href="#">Templates</Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink
//                 asChild
//                 className={navigationMenuTriggerStyle()}
//               >
//                 <Link href="#">Customers</Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink
//                 asChild
//                 className={navigationMenuTriggerStyle()}
//               >
//                 <Link href="#">Pricing</Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
//               <NavigationMenuContent className="flex gap-4 md:w-[600px] -left-40 md:-left-40">
//                 <div>
//                   <p className="text-[11px] text-gray-400 font-semibold p-2">
//                     EXPLORE STACKAI
//                   </p>
//                   <ul>
//                     {navItems["explore stackai"].map((component) => (
//                       <ListItem
//                         key={component.title}
//                         title={component.title}
//                         description={component.description}
//                         image={component.image}
//                       ></ListItem>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="text-[11px] text-gray-400 font-semibold p-2">
//                     STAY CONNECTED
//                   </p>
//                   <ul>
//                     {navItems["stay connected"].map((component) => (
//                       <ListItem
//                         key={component.title}
//                         title={component.title}
//                         description={component.description}
//                         image={component.image}
//                       ></ListItem>
//                     ))}
//                   </ul>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink
//                 asChild
//                 className={navigationMenuTriggerStyle()}
//               >
//                 <Link href="#">Talk to Us</Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         <div className="flex gap-2">
//           <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300">
//             Login
//           </Button>
//           <Button>Get a demo</Button>
//         </div>
//       </nav>

//     </>
//   );
// }

// function ListItem({
//   title,
//   description,
//   href = "#",
//   image = placeholderImage,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & {
//   href?: string;
//   description: string;
//   image: string;
// }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href} className="flex flex-row gap-2 items-start py-2">
//           <Image
//             aria-hidden
//             src={image}
//             alt="Navigation Menu Item"
//             width={40}
//             height={40}
//           />
//           <div>
//             <div className="text-sm leading-none font-medium mb-1">{title}</div>
//             <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//               {description}
//             </p>
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }

function DarkSection() {
  return (
    <div className="mx-auto my-20 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Get notified when we’re launching
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
          Reprehenderit ad esse et non officia in nulla. Id proident tempor
          incididunt nostrud nulla et culpa.
        </p>
        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
          >
            Notify me
          </button>
        </form>
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
      <span>&copy; 2025 Stacked-By-Michael. All rights reserved</span>
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
