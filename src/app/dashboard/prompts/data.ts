export type Prompt = {
  id: string;
  title: string;
  description: string;
  content: string;
  lastUpdated: string;
};

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Prompt One",
    description: "This is the first prompt.",
    content:
      "Suggest domain names for the following project: {project details}",
    lastUpdated: "2023-10-01",
  },
  {
    id: "2",
    title: "Prompt Two",
    description: "This is the second prompt.",
    content: "Generate a marketing strategy for {product name}.",
    lastUpdated: "2023-10-02",
  },
  {
    id: "3",
    title: "Prompt Three",
    description: "This is the third prompt.",
    content: "Write a blog post about {topic}.",
    lastUpdated: "2023-10-03",
  },
  {
    id: "4",
    title: "Prompt Four",
    description: "This is the fourth prompt.",
    content: "Create a social media calendar for {brand}.",
    lastUpdated: "2023-10-04",
  },
  {
    id: "5",
    title: "Prompt Five",
    description: "This is the fifth prompt.",
    content: "Draft an email campaign for {event}.",
    lastUpdated: "2023-10-05",
  },
];
