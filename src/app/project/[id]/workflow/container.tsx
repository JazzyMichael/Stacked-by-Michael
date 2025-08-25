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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { File, Plus, Redo, Sparkles, Undo } from "lucide-react";
import { DragDropProvider, useDragDrop } from "@/hooks/DragDrop";

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

let dd_id = 0;
const getId = () => `dd_id-${dd_id++}`;

export default function Container() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [type, setType] = useDragDrop();
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
      if (!type) {
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
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      console.log(newNode);

      setNodes((nds) => nds.concat(newNode));
    },
    [type, nodes, setNodes]
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
