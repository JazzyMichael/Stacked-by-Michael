"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Controls,
  Background,
  BackgroundVariant,
  ControlButton,
  useReactFlow,
  ReactFlowProvider,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { File, Plus, Redo, Sparkles, Undo } from "lucide-react";
import { DragDropProvider, useDragDrop } from "@/hooks/DragDrop";
import {
  InputNode,
  FilesNode,
  TriggerNode,
  URLNode,
  AudioNode,
  ImageNode,
} from "@/components/nodes/input-nodes";
import {
  ActionNode,
  OutputNode,
  TemplateNode,
  AudioNode as AudioOutputNode,
  ImageNode as ImageOutputNode,
} from "@/components/nodes/output-nodes";
import { BaseNode } from "@/components/nodes/base-node";
import { SidebarProvider } from "@/components/ui/sidebar";
import { WorkflowSidebar } from "@/components/sidebar-workflow";
import { generateID } from "@/lib/utils";
import { loadNodes } from "@/components/nodes/data";

const nodeTypes: NodeTypes = {
  // Inputs
  Input: InputNode,
  Files: FilesNode,
  Trigger: TriggerNode,
  URL: URLNode,
  Audio: AudioNode,
  Image: ImageNode,
  // Outputs
  Output: OutputNode,
  Action: ActionNode,
  Template: TemplateNode,
  AudioOutput: AudioOutputNode,
  ImageOutput: ImageOutputNode,
  // Default
  Base: BaseNode,
};

const { initialNodes, initialEdges } = loadNodes();

export default function Container() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeData] = useDragDrop();
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!nodeData) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: generateID(),
        position,
        // @ts-expect-error
        type: nodeData.type,
        // @ts-expect-error
        data: { label: nodeData.title ?? "Custom", ...nodeData },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodeData, nodes, setNodes]
  );

  // DragStart event is used in the sidebar, this may not be required
  // const onDragStart = (event: React.DragEvent, nodeType: string) => {
  //   setType && setType(nodeType);
  //   event.dataTransfer.setData("text/plain", nodeType);
  //   event.dataTransfer.effectAllowed = "move";
  // };

  const onNodesChange = useCallback(
    (
      changes: NodeChange<{
        id: string;
        position: { x: number; y: number };
        data: { label: string };
      }>[]
    ) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<{ id: string; source: string; target: string }>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params: any) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

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
          <div className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              // onDragStart={onDragStart}
              onDragOver={onDragOver}
              fitView
              nodeTypes={nodeTypes}
            >
              <Controls
                position={"bottom-center"}
                orientation={"horizontal"}
                className="p-1 bg-white gap-2 rounded-lg shadow-lg"
              >
                <ControlButton
                  style={{ width: "fit-content", padding: "4px 12px" }}
                >
                  <Sparkles /> Ask
                </ControlButton>
                <ControlButton className="w-fit">
                  <Plus /> Node
                </ControlButton>
                <ControlButton>
                  <Undo />
                </ControlButton>
                <ControlButton>
                  <Redo />
                </ControlButton>

                <ControlButton>
                  <File />
                </ControlButton>
              </Controls>
              <Background variant={BackgroundVariant.Dots} gap={6} size={0.5} />
            </ReactFlow>
          </div>
        </DragDropProvider>
      </ReactFlowProvider>
    </SidebarProvider>
  );
}
