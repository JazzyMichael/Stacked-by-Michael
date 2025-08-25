"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Interface, interfaces } from "@/lib/data";

type InterfaceSelectionContextType = {
  selected: { category: string; item: Interface["items"][number] } | null;
  select: (category: string, item: Interface["items"][number]) => void;
  options: Interface[];
};

const InterfaceSelectionContext = createContext<
  InterfaceSelectionContextType | undefined
>(undefined);

export function InterfaceSelectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selected, setSelected] =
    useState<InterfaceSelectionContextType["selected"]>(null);

  const select = (category: string, item: Interface["items"][number]) => {
    setSelected({ category, item });
  };

  return (
    <InterfaceSelectionContext.Provider
      value={{ selected, select, options: interfaces }}
    >
      {children}
    </InterfaceSelectionContext.Provider>
  );
}

export function useInterfaceSelection() {
  const context = useContext(InterfaceSelectionContext);
  if (!context)
    throw new Error(
      "useInterfaceSelection must be used within InterfaceSelectionProvider"
    );
  return context;
}
