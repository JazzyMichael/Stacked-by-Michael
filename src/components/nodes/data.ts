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

import {
  InputNode,
  FilesNode,
  TriggerNode,
  URLNode,
  AudioNode,
  ImageNode,
} from "@/components/nodes/input-nodes";

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
    items: [],
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
      { title: "Python", url: "#" },
      { title: "If/Else", icon: Split, url: "#" },
      { title: "AI Routing", icon: ArrowUpDown, url: "#" },
    ],
  },
  { title: "Utils", icon: Wrench, url: "#", items: [] },
];

export const loadNodes = () => {
  const initialNodes = [
    { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
  ];

  const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

  return { initialNodes, initialEdges };
};
