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

export default function App() {
  return (
    <nav className="hidden md:flex justify-between items-center py-3 px-5 border-b-1">
      <a
        href="/projects"
        className="flex flex-row items-center justify-start gap-2"
      >
        <img
          src="/stack-ai-logo-image.svg"
          alt="Logo"
          className="h-7 flex-shrink-0"
        />

        <img src="/stack-ai-logo-text.svg" alt="Logo" className="h-[18px]" />
      </a>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent className="flex gap-2 p-2 md:w-[540px]">
              <div>
                <p className="text-[11px] text-gray-400 font-semibold p-2">
                  PRODUCT
                </p>
                <ul>
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
                <p className="text-[11px] text-gray-400 font-semibold p-2">
                  INDUSTRIES
                </p>
                <ul>
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
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Templates</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Customers</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="flex gap-4 md:w-[600px] -left-40 md:-left-40">
              <div>
                <p className="text-[11px] text-gray-400 font-semibold p-2">
                  EXPLORE STACKAI
                </p>
                <ul>
                  {navItems["explore stackai"].map((component) => (
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
                <p className="text-[11px] text-gray-400 font-semibold p-2">
                  STAY CONNECTED
                </p>
                <ul>
                  {navItems["stay connected"].map((component) => (
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
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#">Talk to Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2">
        <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300">
          Login
        </Button>
        <Button>Get a demo</Button>
      </div>
    </nav>
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
  description: string;
  image: string;
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
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
