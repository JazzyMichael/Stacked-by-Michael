"use client";

import { ReactFlowProvider } from "@xyflow/react";
import { DragDropProvider } from "@/hooks/DragDrop";
import { SidebarProvider } from "@/components/ui/sidebar";
import { WorkflowSidebar } from "@/components/sidebar-workflow";
import WorkflowCanvas from "./workflow-canvas";

export default function Container({
  data,
}: {
  data?: { nodes: any[]; edges: any[] };
}) {
  return (
    <SidebarProvider
      defaultOpen={false}
      style={
        {
          "--sidebar-width": "275px",
        } as React.CSSProperties
      }
    >
      <ReactFlowProvider>
        <DragDropProvider>
          <WorkflowSidebar />
          <WorkflowCanvas
            initialNodes={data?.nodes}
            initialEdges={data?.edges}
          />
        </DragDropProvider>
      </ReactFlowProvider>
    </SidebarProvider>
  );
}
