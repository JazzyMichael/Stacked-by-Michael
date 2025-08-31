import {
  ArrowUpDown,
  Box,
  Boxes,
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

import { createLucideIcon } from "lucide-react";
export const FoobarIcon = createLucideIcon("foobar", [
  [
    "path",
    {
      d: "m11.07.02 2.11.03",
      key: "1exiau",
    },
  ],
  [
    "path",
    {
      d: "m12.93 23.99-2.11-.03",
      key: "kydv1q",
    },
  ],
  [
    "path",
    {
      d: "M16.28 20.69v.82",
      key: "w1nyat",
    },
  ],
  [
    "path",
    {
      d: "m16.36 21.1-.31-.74-.74-.31-.74.31-.31.74.08.41.56.56.41.08.74-.31.23-.33z",
      key: "szdaf1",
    },
  ],
  [
    "path",
    {
      d: "m17.81 2.83.02.2-.01 5.47-.18 1.18-.21.46-.56.69-1.03.58-.33.1-.77.13H8.77l-1.28.19-.5.22-.74.59-.27.35-.45 1.08-.11.59-.02 3.27-2.44-.03-.28-.07-1.03-.56-.71-.82-.32-.59-.49-1.61-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.68-1.28.4-.44 1.24-.73.68-.15.4-.01.06.01h8.16v-.83H6.18l-.03-3.12.05-.34.53-.85.69-.43L8.95.22l.64-.1 1.48-.1.84-.02 1.27.05 1.07.13 1.63.46.59.3.79.66.25.34zl.01.33",
      key: "138b27",
    },
  ],
  [
    "path",
    {
      d: "m8.16 12.59 1.1-.22 5.97-.01.69-.05 1.09-.35.41-.28.8-1.03.25-.71.13-.81V6.07l2.44.04.6.18 1.07.8.35.47.6 1.32.35 1.92.05 1.23-.06 1.23-.16 1.04-.24.86-.68 1.28-.4.45-.84.57-.4.16-.92.16-8.38-.01v.82h5.84l.03 3.12-.05.34-.28.6-.94.69-.44.17-1.73.37-1.48.11-.84.01-1.27-.04-1.97-.34-.73-.25-1.04-.63-.34-.34-.51-.97-.06-.45.01-5.47.18-1.18.21-.46.89-.94z",
      key: "12wurv",
    },
  ],
  [
    "path",
    {
      d: "M9.66 2.49v.82",
      key: "1hns68",
    },
  ],
  [
    "path",
    {
      d: "m9.74 2.9-.31-.74-.74-.31-.74.31-.31.74.08.41.56.56.41.09.74-.31.23-.34z",
      key: "1kfudp",
    },
  ],
]);

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
      { title: "OpenAI", icon: StickyNote, url: "#" },
      { title: "Anthropic", icon: StickyNote, url: "#" },
      { title: "Google", icon: StickyNote, url: "#" },
      { title: "Meta", icon: StickyNote, url: "#" },
      { title: "Mistral", icon: StickyNote, url: "#" },
      { title: "Replicate", icon: StickyNote, url: "#" },
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
  { title: "Apps", icon: Zap, url: "#", items: [] },
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
      { title: "Python", icon: FoobarIcon, url: "#" },
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
];

export const loadNodes = () => {
  const initialNodes = [
    { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
  ];

  const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

  return { initialNodes, initialEdges };
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
  // Default
  Base: BaseNode,
};
