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
    title: "Domain Names",
    description: "This is the first prompt.",
    content:
      "Suggest domain names for the following project: {project details}",
    lastUpdated: "2023-10-01",
  },
  {
    id: "2",
    title: "Planning Steps & Nested Tasks",
    description:
      "Get the agent to break down a task into smaller steps before execution.",
    content:
      "Decompose this problem into subgoals. For each subgoal, suggest the best next action. Before answering, outline your plan step by step. Then execute each step in order.",
    lastUpdated: "2023-10-02",
  },
  {
    id: "3",
    title: "Multi-Agent Collaboration",
    description: "Use when workflows involve specialized agents.",
    content:
      "You are the Research Agent, one of several agents. Gather and summarize background information. Pass your findings to the Writer Agent for refinement. Communicate your conclusions clearly so the Orchestrator can make the final decision.",
    lastUpdated: "2023-10-03",
  },
];
