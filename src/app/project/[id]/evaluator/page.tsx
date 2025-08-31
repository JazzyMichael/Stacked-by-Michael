import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="shadow-2xl rounded-2xl border-1 py-8 px-20 flex flex-col justify-around items-center gap-8 mt-64 w-fit mx-auto">
      <p>Evaluator</p>
      <Button asChild>
        <a href={`/project/${id}/workflow`}>
          <Undo2 /> Back to Workflow
        </a>
      </Button>
    </div>
  );
}
