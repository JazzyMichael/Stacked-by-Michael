import { memo, ReactNode, useCallback } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "@xyflow/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Clock, Trash2 } from "lucide-react";
import { nodeTitleIconMap } from "./data";

export default memo(
  ({
    data,
    isConnectable,
    children,
  }: {
    data: any;
    isConnectable: boolean;
    children: ReactNode;
  }) => {
    const id = useNodeId();
    const { setNodes } = useReactFlow();

    // TODO: add alert dialog to confirm delete
    const handleDelete = useCallback(() => {
      setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    }, [id, setNodes]);

    const Icon = nodeTitleIconMap.get(data.title);

    return (
      <div className="group/nodetemplate bg-white border-1 shadow-md rounded-md p-2 flex flex-col justify-between gap-2 w-72">
        {data.category !== "Inputs" && (
          <Handle
            type="target"
            position={Position.Left}
            isConnectable={isConnectable}
            onConnect={(params) => console.log("handle connected", params)}
            style={{
              height: "20px",
              width: "20px",
              border: "2px solid black",
              backgroundColor: "white",
            }}
          />
        )}

        {/* header */}
        <div className="flex items-center gap-2">
          <div className="rounded-sm bg-accent border-1 p-1.5">
            {Icon && <Icon className="size-3.5 stroke-gray-600" />}
          </div>
          <div className="font-medium">{data.title ?? "Node"}</div>

          <Button
            variant="ghost"
            size="icon"
            className="nodrag size-5 hidden group-hover/nodetemplate:flex group-focus/nodetemplate:flex group-active/nodetemplate:flex ml-auto mr-0 p-0"
            aria-label="Node Actions"
            title="Node Actions"
            onClick={handleDelete}
          >
            <Trash2 className="size-4 stroke-gray-600 hover:stroke-black" />
          </Button>
        </div>

        {/* description */}
        <div className="text-sm text-gray-600">{data.description ?? ""}</div>

        {/* children */}
        {children}

        {/* footer */}
        <div>
          <Badge
            variant="outline"
            className="text-gray-500 py-2 px-1 h-4 text-xs rounded-sm"
          >
            <Clock />
            0.00 sec
          </Badge>
        </div>

        {/*
          <input
            className="nodrag"
            type="color"
            onChange={data.onChange}
            defaultValue={data.color}
          />
        */}

        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          onConnect={(params) => console.log("handle connected", params)}
          style={{
            height: "20px",
            width: "20px",
            border: "2px solid black",
            backgroundColor: "white",
          }}
        />
      </div>
    );
  }
);
