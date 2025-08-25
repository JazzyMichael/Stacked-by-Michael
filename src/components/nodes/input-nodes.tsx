import { memo } from "react";
import { Input } from "../ui/input";
import NodeTemplate from "./node-template";
import { Alert, AlertTitle } from "../ui/alert";
import {
  CircleDashed,
  ImageOff,
  Link2Off,
  MicOff,
  SquareCheck,
  TriangleAlert,
} from "lucide-react";

export const InputNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Input />
    </NodeTemplate>
  );
});

export const FilesNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <SquareCheck />
        <AlertTitle>Exposed as input</AlertTitle>
      </Alert>

      <Alert variant="accent">
        <CircleDashed />
        <AlertTitle>No test files uploaded</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});

export const TriggerNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Trigger not enabled</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});

export const URLNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <Link2Off />
        <AlertTitle>No Test URL entered</AlertTitle>
      </Alert>
      <Alert variant="accent">
        <AlertTitle>Website URL</AlertTitle>
      </Alert>{" "}
    </NodeTemplate>
  );
});

export const AudioNode = memo(({ data, isConnectable }: any) => {
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <MicOff />
        <AlertTitle>No test audio recording</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});

export const ImageNode = memo(({ data, isConnectable }: any) => {
  console.log(data);
  return (
    <NodeTemplate data={data} isConnectable={isConnectable}>
      <Alert variant="accent">
        <ImageOff />
        <AlertTitle>No test image uploaded</AlertTitle>
      </Alert>
    </NodeTemplate>
  );
});
