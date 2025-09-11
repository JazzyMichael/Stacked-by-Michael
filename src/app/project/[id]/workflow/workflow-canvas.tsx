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
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";
import {
  Camera,
  File,
  FileX,
  Fullscreen,
  History,
  LayoutDashboard,
  Map,
  MousePointer2,
  Plus,
  Redo,
  Sparkles,
  Undo,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
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
  const [showMiniMap, setShowMiniMap] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [nodeData] = useDragDrop();
  const { screenToFlowPosition, zoomIn, zoomOut, fitView } = useReactFlow();

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

  const downloadProject = ({
    nodes,
    edges,
  }: {
    nodes: any[];
    edges: any[];
  }) => {
    const filename = "stacked-by-michael-project.json";
    const jsonString = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          className="bg-white rounded-md shadow-xl h-[38px] px-1 flex items-center"
          showZoom={false}
          showFitView={false}
          showInteractive={false}
        >
          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <Sparkles className="fill-none! h-4! w-4! mr-2 max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
            Ask
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <Plus className="fill-none! h-4! w-4! mr-2 max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
            Node
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <Undo className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <Redo className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton
            onClick={() => zoomIn()}
            className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!"
          >
            <ZoomIn className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton
            onClick={() => zoomOut()}
            className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!"
          >
            <ZoomOut className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <History className="fill-none! h-3.5! w-3.5! mr-2 max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
            Versions
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <MousePointer2 className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton
            onClick={() => fitView()}
            className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!"
          >
            <Fullscreen className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton
            onClick={() => setShowNotes((x) => !x)}
            className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!"
          >
            {showNotes ? (
              <File className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
            ) : (
              <FileX className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
            )}
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <LayoutDashboard className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton
            onClick={() => setShowMiniMap((x) => !x)}
            className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!"
          >
            <Map className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton className="group px-2! h-[28px]! w-fit! min-w-[28px]! max-w-none! font-medium text-[15px] text-gray-500! hover:text-black!">
            <Camera className="fill-none! h-4! w-4! max-w-none! max-h-none! group-hover:stroke-black stroke-gray-500" />
          </ControlButton>

          <ControlButton onClick={() => downloadProject({ nodes, edges })}>
            <File className="fill-white! stroke-gray-700 size-8!" />
          </ControlButton>
        </Controls>

        <Background
          variant={BackgroundVariant.Dots}
          bgColor="#F0F0F0"
          gap={12}
          size={1}
        />

        {showMiniMap && (
          <MiniMap
            position={"bottom-left"}
            maskColor="gray"
            className="rounded-md border-6 border-white bottom-10!"
          />
        )}
      </ReactFlow>
    </div>
  );
}

// Sub-Flow/Element-Groups/Draggable-Boundaries

// import '@xyflow/react/dist/style.css';
// import { useCallback } from 'react';
// import {
//   ReactFlow,
//   addEdge,
//   Background,
//   useNodesState,
//   useEdgesState,
//   MiniMap,
//   Controls,
// } from '@xyflow/react';

// const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Node 0' },
//     position: { x: 250, y: 5 },
//   },
//   {
//     id: '2',
//     data: { label: 'Group A' },
//     position: { x: 100, y: 100 },
//     style: { width: 200, height: 200 },
//     type: 'group',
//   },
//   {
//     id: '2a',
//     data: { label: 'Node A.1' },
//     position: { x: 10, y: 50 },
//     parentId: '2',
//   },
//   {
//     id: '3',
//     data: { label: 'Node 1' },
//     position: { x: 320, y: 100 },
//   },
//   {
//     id: '4',
//     data: { label: 'Group B' },
//     position: { x: 320, y: 200 },
//     style: { width: 300, height: 300 },
//     type: 'group',
//   },
//   {
//     id: '4a',
//     data: { label: 'Node B.1' },
//     position: { x: 15, y: 65 },
//     parentId: '4',
//     extent: 'parent',
//   },
//   {
//     id: '4b',
//     data: { label: 'Group B.A' },
//     position: { x: 15, y: 120 },
//     style: {
//       backgroundColor: 'rgba(255, 0, 255, 0.2)',
//       height: 150,
//       width: 270,
//     },
//     parentId: '4',
//   },
//   {
//     id: '4b1',
//     data: { label: 'Node B.A.1' },
//     position: { x: 20, y: 40 },
//     parentId: '4b',
//   },
//   {
//     id: '4b2',
//     data: { label: 'Node B.A.2' },
//     position: { x: 100, y: 100 },
//     parentId: '4b',
//   },
// ];

// const initialEdges = [
//   { id: 'e1-3', source: '1', target: '3' },
//   { id: 'e2a-4a', source: '2a', target: '4a' },
//   { id: 'e3-4b', source: '3', target: '4b' },
//   { id: 'e4a-4b1', source: '4a', target: '4b1' },
//   { id: 'e4a-4b2', source: '4a', target: '4b2' },
//   { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
// ];

// const NestedFlow = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback((connection) => {
//     setEdges((eds) => addEdge(connection, eds));
//   }, []);

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       className="react-flow-subflows-example"
//       fitView
//     >
//       <MiniMap />
//       <Controls />
//       <Background color="#E6E6E6" />
//     </ReactFlow>
//   );
// };

// export default NestedFlow;
