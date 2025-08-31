import Container from "./container";
import { allNodesProject, blankProject, careerProject } from "./data";

const projects: { [key: string]: { nodes: any[]; edges: any[] } } = {
  blank: blankProject,
  "all-nodes": allNodesProject,
  career: careerProject,
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projectData = projects[id];

  return <Container data={projectData} />;
}
