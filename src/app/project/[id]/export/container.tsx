"use client";

import { InterfaceSelectionProvider } from "@/hooks/InterfaceSelection";
import InterfaceEdit from "@/components/interface-edit";
import InterfaceSelect from "@/components/interface-select";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function Container() {
  return (
    <InterfaceSelectionProvider>
      <ResizablePanelGroup
        direction="horizontal"
        style={{ height: "calc(100% - 53px)", overflow: "hidden" }}
      >
        <ResizablePanel defaultSize={70}>
          <InterfaceEdit />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <InterfaceSelect />
        </ResizablePanel>
      </ResizablePanelGroup>
    </InterfaceSelectionProvider>
  );
}
