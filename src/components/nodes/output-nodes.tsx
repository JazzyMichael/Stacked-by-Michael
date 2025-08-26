import { memo } from "react";
import { Input } from "../ui/input";
import NodeTemplate from "./node-template";
import { Alert, AlertTitle } from "../ui/alert";
import { Layers, MicVocal, PanelsTopLeft, TriangleAlert } from "lucide-react";

export const OutputNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Input />
    </NodeTemplate>
  );
});

export const ActionNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Select an action or trigger</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});

export const TemplateNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <div className="h-32 w-full bg-accent"></div>
    </NodeTemplate>
  );
});

export const AudioNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <Layers />
        <AlertTitle>Meta/Musicgen</AlertTitle>
      </Alert>
      <Alert variant="accent">
        <MicVocal />
        <AlertTitle>Song</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});

export const ImageNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <Layers />
        <AlertTitle>OpenAI DALL-E 3</AlertTitle>
      </Alert>
      <Alert variant="accent">
        <PanelsTopLeft />
        <AlertTitle>1024x1024</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});
