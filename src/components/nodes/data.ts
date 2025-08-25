import {
  ArrowUpDown,
  Cloud,
  CodeXml,
  Download,
  FileMinus,
  FileSearch2,
  FileText,
  Filter,
  Globe,
  Image,
  Languages,
  Link,
  MessagesSquare,
  Mic,
  PencilLine,
  Play,
  ScanText,
  Search,
  Split,
  Upload,
  Wrench,
  Zap,
} from "lucide-react";

export type FlowNode = {
  type: string;
  label: string;
  description?: string;
  icon?: string;
  image?: string;
};

// 3 node types determine edge connectivity (input, output, default/both)

export const nodeCategories: string[] = [
  "Inputs",
  "Outputs",
  "LLMs",
  "Knowledge Bases",
  "Apps",
  "Document Readers",
  "Logic",
  "Utils",
];

export const nodeNavItems = [
  {
    title: "Inputs",
    icon: Download,
    url: "#",
    items: [
      { title: "Input", icon: PencilLine, url: "#" },
      { title: "Files", icon: FileMinus, url: "#" },
      { title: "Trigger", icon: Zap, url: "#" },
      { title: "URL", icon: Link, url: "#" },
      { title: "Audio", icon: Mic, url: "#" },
      { title: "Image", icon: Image, url: "#" },
    ],
  },
  {
    title: "Outputs",
    icon: Upload,
    url: "#",
    items: [
      { title: "Output", icon: PencilLine, url: "#" },
      { title: "Action", icon: Play, url: "#" },
      { title: "Template", icon: ScanText, url: "#" },
      { title: "Audio", icon: Mic, url: "#" },
      { title: "Image", icon: Image, url: "#" },
    ],
  },
  {
    title: "LLMs",
    icon: MessagesSquare,
    url: "#",
    items: [],
  },
  {
    title: "Knowledge Bases",
    icon: Cloud,
    url: "#",
    items: [
      { title: "Documents", icon: FileSearch2, url: "#" },
      { title: "Websites", icon: Globe, url: "#" },
    ],
  },
  { title: "Apps", icon: Zap, url: "#", items: [] },
  {
    title: "Document Readers",
    icon: FileText,
    url: "#",
    items: [
      { title: "Q&A", icon: Search, url: "#" },
      { title: "Summarizer", icon: Filter, url: "#" },
      { title: "Transcriber", icon: Languages, url: "#" },
      { title: "Translator", icon: Languages, url: "#" },
    ],
  },
  {
    title: "Logic",
    icon: CodeXml,
    url: "#",
    items: [
      { title: "Python", url: "#" },
      { title: "If/Else", icon: Split, url: "#" },
      { title: "AI Routing", icon: ArrowUpDown, url: "#" },
    ],
  },
  { title: "Utils", icon: Wrench, url: "#", items: [] },
];
