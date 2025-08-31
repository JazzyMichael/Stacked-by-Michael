export const sortOptions = [
  { label: "Last Viewed", value: "last-viewed" },
  { label: "Alphabetically", value: "alphabetically" },
];

export const publishedOptions = [
  { label: "All", value: "all" },
  { label: "Published", value: "published" },
  { label: "Unpublished", value: "unpublished" },
];

export const projects = [
  {
    label: "Work Experience",
    id: "010101010",
    avatarNumber: "+9",
  },
  {
    label: "Node Template Showcase",
    id: "888888888",
    avatarNumber: "+4",
  },
];

export type TableSchema = {
  id: number;
  label: string;
  category: string;
  access: string;
  tokens: string; // change to number
  updated: string;
};

export const tabledata: TableSchema[] = [
  {
    id: 1,
    label: "Cover page",
    category: "Cover page",
    access: "In Process",
    tokens: "18",
    updated: "Eddie Lake",
  },
  {
    id: 2,
    label: "Table of contents",
    category: "Table of contents",
    access: "Public",
    tokens: "29",
    updated: "Eddie Lake",
  },
];
