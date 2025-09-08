import {
  ArrowUpDown,
  Box,
  Boxes,
  Cat,
  Clock,
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
  StickyNote,
  Upload,
  Wrench,
  Zap,
} from "lucide-react";
import {
  AnthropicIcon,
  GeminiIcon,
  MetaIcon,
  MistralIcon,
  OpenAIIcon,
  PerplexityIcon,
  PythonIcon,
  ReplicateIcon,
  XAIIcon,
} from "@/lib/custom-icons";

import {
  InputNode,
  FilesNode,
  TriggerNode,
  URLNode,
  AudioNode,
  ImageNode,
} from "@/components/nodes/input-nodes";

import {
  ActionNode,
  OutputNode,
  TemplateNode,
  AudioNode as AudioOutputNode,
  ImageNode as ImageOutputNode,
} from "@/components/nodes/output-nodes";

import { NodeTypes } from "@xyflow/react";
import { BaseNode } from "./base-node";
import { CatNode } from "./cat-node";
import { CareerNode } from "./career-node";

import { experience } from "@/lib/career-data";

export const nodeNavItems = [
  {
    title: "Inputs",
    icon: Download,
    url: "#",
    items: [
      {
        title: "Input",
        icon: PencilLine,
        description: "Allow users to input text",
        url: "#",
        component: InputNode,
      },
      {
        title: "Files",
        icon: FileMinus,
        description: "Enables user to upload Files",
        url: "#",
        component: FilesNode,
      },
      {
        title: "Trigger",
        icon: Zap,
        description: "Start your workflow given an element",
        url: "#",
        component: TriggerNode,
      },
      {
        title: "URL",
        icon: Link,
        description: "Extracts the contents of a Website",
        url: "#",
        component: URLNode,
      },
      {
        title: "Audio",
        icon: Mic,
        description: "Enables user to upload Audio",
        url: "#",
        component: AudioNode,
      },
      {
        title: "Image",
        icon: Image,
        description: "Enables user to upload Images",
        url: "#",
        component: ImageNode,
      },
    ],
  },
  {
    title: "Outputs",
    icon: Upload,
    url: "#",
    items: [
      {
        title: "Output",
        icon: PencilLine,
        description: "Output the results of nodes as text",
        url: "#",
      },
      {
        title: "Action",
        icon: Play,
        description: "Perform a task in another app",
        url: "#",
      },
      {
        title: "Template",
        icon: ScanText,
        description: "Generate a template from inputs",
        url: "#",
      },
      {
        title: "Audio",
        icon: Mic,
        description: "Generate audio from text",
        url: "#",
      },
      {
        title: "Image",
        icon: Image,
        description: "Generate an image from a prompt",
        url: "#",
      },
    ],
  },
  {
    title: "LLMs",
    icon: MessagesSquare,
    url: "#",
    disabled: true,
    items: [
      { title: "OpenAI", icon: OpenAIIcon, url: "#" },
      { title: "Anthropic", icon: AnthropicIcon, url: "#" },
      { title: "Google", icon: GeminiIcon, url: "#" },
      { title: "XAI", icon: XAIIcon, url: "#" },
      { title: "Meta", icon: MetaIcon, url: "#" },
      { title: "Mistral", icon: MistralIcon, url: "#" },
      { title: "Replicate", icon: ReplicateIcon, url: "#" },
      { title: "Perplexity", icon: PerplexityIcon, url: "#" },
    ],
  },
  {
    title: "Knowledge Bases",
    icon: Cloud,
    url: "#",
    items: [
      {
        title: "Documents",
        icon: FileSearch2,
        description: "Search through your knowledge base",
        url: "#",
        disabled: true,
      },
      {
        title: "Websites",
        icon: Globe,
        description: "Scrape websites and search the content",
        url: "#",
      },
    ],
  },
  {
    title: "Apps",
    icon: Zap,
    url: "#",
    items: [{ title: "Cat Pictures", icon: Cat, url: "#" }],
  },
  {
    title: "Document Readers",
    icon: FileText,
    url: "#",
    items: [
      {
        title: "Q&A",
        icon: Search,
        description: "Use AI to answer questions about a document",
        url: "#",
      },
      {
        title: "Summarizer",
        icon: Filter,
        description: "Use AI to summarize a document",
        url: "#",
      },
      {
        title: "Transcriber",
        icon: Languages,
        description: "Use AI to transcribe a document",
        url: "#",
      },
      {
        title: "Translator",
        icon: Languages,
        description: "Use AI to translate a document",
        url: "#",
      },
    ],
  },
  {
    title: "Logic",
    icon: CodeXml,
    url: "#",
    items: [
      { title: "Python", icon: PythonIcon, url: "#" },
      { title: "If/Else", icon: Split, url: "#" },
      { title: "AI Routing", icon: ArrowUpDown, url: "#" },
    ],
  },
  {
    title: "Utils",
    icon: Wrench,
    url: "#",
    items: [
      { title: "Stack AI Project", icon: Boxes, url: "#" },
      { title: "Sticky Note", icon: StickyNote, url: "#" },
      { title: "Default Message", icon: MessagesSquare, url: "#" },
      { title: "Delay", icon: Clock, url: "#" },
      { title: "Shared Memory", icon: MessagesSquare, url: "#" },
      { title: "Dynamic Vector Store", icon: Box, url: "#" },
    ],
  },
  {
    title: "Career",
    icon: Wrench,
    url: "#",
    items: experience,
  },
];

const ex = experience.map((item) => {
  return { title: "Career", ...item };
});

function buildTitleIconMap(items: any[]) {
  const map = new Map();

  function traverse(list: any[]) {
    for (const item of list) {
      map.set(item.title, item.icon);
      if (item.items) {
        traverse(item.items);
      }
    }
  }

  traverse(items);
  return map;
}

export const nodeTitleIconMap = buildTitleIconMap(nodeNavItems);

export const getNodeType = (category: string, item: string) => {
  // Handle duplicate names
  if (category === "Outputs" && item === "Audio") return "AudioOutput";
  if (category === "Outputs" && item === "Image") return "ImageOutput";

  // Handle custom names
  if (category === "Apps") return "CatPictures";

  // Career nodes
  if (category === "Career") return "Career";

  // Default
  if (category !== "Inputs" && category !== "Outputs") return "Base";

  return item;
};

export const nodeTypes: NodeTypes = {
  // Inputs
  Input: InputNode,
  Files: FilesNode,
  Trigger: TriggerNode,
  URL: URLNode,
  Audio: AudioNode,
  Image: ImageNode,
  // Outputs
  Output: OutputNode,
  Action: ActionNode,
  Template: TemplateNode,
  AudioOutput: AudioOutputNode,
  ImageOutput: ImageOutputNode,
  // Apps
  CatPictures: CatNode,
  // Career
  Career: CareerNode,
  // Default
  Base: BaseNode,
};
