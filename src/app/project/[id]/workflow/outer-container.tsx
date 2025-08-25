"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Container from "./container";
import { WorkflowSidebar } from "@/components/sidebar-workflow";
import { ReactFlowProvider } from "@xyflow/react";
import { DragDropProvider } from "@/hooks/DragDrop";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          height: "calc(100% - 53px)",
          overflow: "hidden",
          "--sidebar-width": "275px",
        } as React.CSSProperties
      }
    >
      <ReactFlowProvider>
        <DragDropProvider>
          <WorkflowSidebar />
          {/* <SidebarInset className="m-0"> */}
          <Container />
          {/* </SidebarInset> */}
        </DragDropProvider>
      </ReactFlowProvider>
    </SidebarProvider>
  );
}
