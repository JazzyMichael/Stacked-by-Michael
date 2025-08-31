import { ProjectHeader } from "@/components/project-header";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: // params
{
  children: React.ReactNode;
  // params: Promise<{ id: string }>;
}) {
  // const { id } = await params;

  // display project id in header

  // console.log("Project ID:", id);

  return (
    <div className="h-screen">
      <ProjectHeader />
      {children}
    </div>
  );
}
