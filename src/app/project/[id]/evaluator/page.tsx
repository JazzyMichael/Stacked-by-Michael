import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

export default function Page() {
  return (
    <div className="shadow-2xl rounded-2xl border-1 p-8 flex flex-col justify-around items-center gap-8 mt-64 w-fit mx-auto">
      <p>Evaluator</p>
      <Button asChild>
        <a href="/project/1/workflow">
          <Undo2 /> Back to Workflow
        </a>
      </Button>
    </div>
  );
}
