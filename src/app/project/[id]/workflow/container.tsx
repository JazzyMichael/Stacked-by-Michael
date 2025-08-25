"use client";

import { useState, useCallback, useRef } from "react";
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

// import { nodeTypes } from "@/components/nodes/data";
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

const nodeTypes = {
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
  // Default/Base/Fallback
  Base: BaseNode,
};

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

function generateID(length = 20) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Container() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeData, setNodeData] = useDragDrop();
  const { screenToFlowPosition } = useReactFlow();
  // const reactFlowWrapper = useRef(null);

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

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: generateID(),
        position,
        // @ts-ignore
        type: nodeData.type,
        // @ts-ignore
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
    // <ReactFlowProvider>
    //   <DragDropProvider>
    <div className="w-full h-full">
      {/* <div ref={reactFlowWrapper}> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        // @ts-ignore
        // onDragStart={onDragStart}
        onDragOver={onDragOver}
        fitView
        nodeTypes={nodeTypes}
      >
        <Controls
          position={"bottom-center"}
          orientation={"horizontal"}
          className="p-1 bg-white gap-1 rounded-lg shadow-lg"
        >
          <ControlButton>
            <Sparkles /> Ask
          </ControlButton>
          <ControlButton>
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
      {/* </div> */}
    </div>
    //   </DragDropProvider>
    // </ReactFlowProvider>
  );
}
