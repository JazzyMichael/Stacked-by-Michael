export type Conversation = {
  label: string;
  content: string;
  hoverColor: string;
  selectedColor: string;
};

export const conversations: Conversation[] = [
  {
    label: "Why Tech?",
    content:
      "AI enthusiasm, web/app impact on society, abstract problem solving",
    hoverColor: "hover:bg-green-200",
    selectedColor: "bg-green-100",
  },
  {
    label: "Why Silicon Valley?",
    content: "Like-minded people, high standards of excellence, world class",
    hoverColor: "hover:bg-teal-200",
    selectedColor: "bg-teal-100",
  },
  {
    label: "Why Startups?",
    content: "Work hard play hard",
    hoverColor: "hover:bg-cyan-200",
    selectedColor: "bg-cyan-100",
  },
  {
    label: "Why Stack AI?",
    content: ";)",
    hoverColor: "hover:bg-blue-200",
    selectedColor: "bg-blue-100",
  },
  {
    label: "Why build this project?",
    content: ":o",
    hoverColor: "hover:bg-violet-200",
    selectedColor: "bg-violet-100",
  },
];
