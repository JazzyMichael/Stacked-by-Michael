import { memo } from "react";
import NodeTemplate from "./node-template";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catPics } from "@/lib/data";
import Image from "next/image";

export const CatNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Select
        value={data?.file}
        onValueChange={(value) => {
          if (data?.onNodeDataChange) {
            data.onNodeDataChange({ id: data.id, key: "file", val: value });
          }
        }}
      >
        <SelectTrigger className="min-w-32">
          <SelectValue placeholder="Select Cat Behavior" />
        </SelectTrigger>
        <SelectContent>
          {catPics.map(({ label, file }) => (
            <SelectItem key={file} value={file}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {data.file && (
        <div className="h-64 w-auto relative my-4">
          <Image
            src={`/cat/${data.file}`}
            alt="Cat Picture"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </NodeTemplate>
  );
});
