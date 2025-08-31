import {
  LucideIcon,
  LayoutDashboard,
  MessageSquareText,
  Table,
  Slack,
  Users,
  Smartphone,
  SquareDashedBottomCode,
  Mic,
  RectangleEllipsis,
  Chrome,
} from "lucide-react";

export type Interface = {
  category: string;
  items: {
    name: string;
    image: string;
    icon: LucideIcon;
    description: string;
    template: string;
  }[];
};

export const interfaces: Interface[] = [
  {
    category: "User Interfaces",
    items: [
      {
        name: "Form",
        image: "https://www.stack-ai.com/_next/static/media/form.ebe1a8cf.svg",
        icon: LayoutDashboard,
        description: "Use a powerful editor to customize your form",
        template: "",
      },
      {
        name: "Chat Assistant",
        image:
          "https://www.stack-ai.com/_next/static/media/chat-assistant.1abc0d8a.svg",
        icon: MessageSquareText,
        description: "A powerful chatbot with tool calling capabilities",
        template: "",
      },
      {
        name: "Website Chatbot",
        image:
          "https://www.stack-ai.com/_next/static/media/website-chatbot.ca4bac25.svg",
        icon: MessageSquareText,
        description: "A chatbot that can be embedded on your website",
        template: "",
      },
      {
        name: "Batch",
        image: "https://www.stack-ai.com/_next/static/media/batch.0b4512d3.svg",
        icon: Table,
        description: "Run your workflow multiple times in parallel",
        template: "",
      },
    ],
  },
  {
    category: "API Connections",
    items: [
      {
        name: "Slack App",
        image: "https://www.stack-ai.com/_next/static/media/slack.3003d45c.svg",
        icon: Slack,
        description: "Chat with your workflow as a Slackbot",
        template: "",
      },
      {
        name: "Microsoft Teams",
        image: "https://www.stack-ai.com/_next/static/media/teams.25126053.svg",
        icon: Users,
        description: "Chat with your workflow as a Microsoft Teams bot",
        template: "",
      },
      {
        name: "WhatsApp/SMS",
        image:
          "https://www.stack-ai.com/_next/static/media/whatsapp.7f83145d.svg",
        icon: Smartphone,
        description: "Chat with your workflow as a WhatsApp/SMS bot",
        template: "",
      },
      {
        name: "API",
        image: "https://www.stack-ai.com/_next/static/media/api.2b43efee.svg",
        icon: SquareDashedBottomCode,
        description: "Connect your workflow to an external API",
        template: "",
      },
    ],
  },
  {
    category: "Legacy Interfaces",
    items: [
      {
        name: "Voice Assistant",
        image: "https://www.stack-ai.com/_next/static/media/batch.0b4512d3.svg",
        icon: Mic,
        description: "Deprecated",
        template: "",
      },
      {
        name: "Form (Legacy)",
        image: "https://www.stack-ai.com/_next/static/media/form.ebe1a8cf.svg",
        icon: RectangleEllipsis,
        description: "Deprecated",
        template: "",
      },
      {
        name: "Chrome Extension",
        image:
          "https://www.stack-ai.com/_next/static/media/chrome.08b1b6c9.svg",
        icon: Chrome,
        description: "Deprecated",
        template: "",
      },
    ],
  },
];

export const catPics = [
  { label: "Curious", file: "curious-desk.jpg", width: 3072, height: 4080 },
  { label: "Thinking", file: "thinking-desk.jpg", width: 3072, height: 4080 },
  { label: "Resting", file: "resting-desk.jpg", width: 3072, height: 4080 },

  { label: "Yawning", file: "yawning.jpg", width: 2048, height: 2720 },
  { label: "Throne", file: "throne.jpg", width: 1932, height: 2898 },

  {
    label: "Sleeping",
    file: "sleeping-couch.jpg",
    width: 1932,
    height: 2898,
  },

  { label: "Belly", file: "belly-chair.jpg", width: 1512, height: 2688 },
  { label: "Face", file: "close-up-face.jpg", width: 1932, height: 4000 },
  { label: "Eager", file: "face-chair.jpg", width: 1512, height: 2688 },
  { label: "Serious", file: "serious-desk.jpg", width: 1512, height: 2688 },
];
