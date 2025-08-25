import { ProjectHeader } from "@/components/project-header";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // const headersList = await headers();
  // console.log("Headers:", headersList);
  // const pathname = headersList.get("referer") ?? "";

  // load project data, redirect if invalid id

  // console.log("Project ID:", id);

  return (
    <div className="h-screen">
      <ProjectHeader />
      {children}
    </div>
  );
}
