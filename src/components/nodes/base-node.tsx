import { memo } from "react";
import NodeTemplate from "./node-template";

export const BaseNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <div></div>
    </NodeTemplate>
  );
});
