import { memo, useCallback } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Handle, Position, useNodeId, useReactFlow } from "@xyflow/react";

export const CareerNode = memo(
  ({ data, isConnectable }: { data: any; isConnectable: boolean }) => {
    const id = useNodeId();
    const { setNodes } = useReactFlow();

    // TODO: add alert dialog to confirm delete
    const handleDelete = useCallback(() => {
      setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    }, [id, setNodes]);

    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-2xl">
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

        <CardHeader className="flex flex-row items-center gap-4">
          <Image
            src={data.company.logo}
            alt={`${data.company.name} logo`}
            width={56}
            height={56}
            className="rounded-lg object-contain"
          />
          <div>
            <CardTitle className="text-xl font-semibold">{data.role}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {data.company.name} • {data.company.location}
            </p>
            <p className="text-xs text-muted-foreground">{data.dateRange}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-foreground/80">{data.company.overview}</p>

          <div>
            <h4 className="text-sm font-medium">Tech Keywords</h4>
            <p className="text-sm text-muted-foreground">{data.techKeywords}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Highlights</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              {data.highlights.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {data.clients && data.clients.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Clients</h4>
              <div className="flex flex-wrap gap-3">
                {data.clients.map((client: any, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    {client.logo && (
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* <Button
            aria-label="Node Actions"
            title="Node Actions"
            onClick={handleDelete}
          >
            <Trash2 className="size-4 stroke-gray-600 hover:stroke-black" />
            Delete
          </Button> */}
        </CardContent>

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
      </Card>
    );
  }
);
