"use client";

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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";
import { File, Plus, Redo, Sparkles, Undo } from "lucide-react";
import { useDragDrop } from "@/hooks/DragDrop";
import { generateID } from "@/lib/utils";
import { nodeTypes } from "@/components/nodes/data";

export default function WorkflowCanvas({
  initialNodes = [],
  initialEdges = [],
}: {
  initialNodes?: any[];
  initialEdges?: any[];
}) {
  const [nodes, setNodes] = useState<any[]>(initialNodes);
  const [edges, setEdges] = useState<any[]>(initialEdges);
  const [nodeData] = useDragDrop();
  const { screenToFlowPosition } = useReactFlow();

  const onNodeDataChange = (event: any) => {
    const id = event?.id;
    const key = event?.key;
    const val = event?.val;

    if (id && key && val) {
      setNodes((cur) =>
        cur.map((node) => {
          if (node.id !== id) return node;

          return { ...node, data: { ...node.data, [key]: val } };
        })
      );
    }
  };

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

      const id = generateID();

      const newNode = {
        id,
        position,
        // @ts-expect-error
        type: nodeData.type,
        data: {
          // @ts-expect-error
          label: nodeData.title ?? "Custom",
          id,
          ...nodeData,
          onNodeDataChange,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodeData, nodes, setNodes]
  );

  // DragStart event is used in the sidebar
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
        data: { [key: string]: string };
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
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        // onDragStart={onDragStart}
        onDragOver={onDragOver}
        fitView
      >
        <Controls
          position={"bottom-center"}
          orientation={"horizontal"}
          className="p-1 bg-white gap-2 rounded-lg shadow-lg"
        >
          <ControlButton style={{ width: "fit-content", padding: "4px 12px" }}>
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

          <ControlButton onClick={() => console.log({ nodes, edges })}>
            <File />
          </ControlButton>
        </Controls>
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
