"use client";

import { Check, CircleCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useInterfaceSelection } from "@/hooks/InterfaceSelection";

export default function InterfaceSelect() {
  const { selected, select, options } = useInterfaceSelection();

  return (
    <div className="flex flex-col h-full bg-white">
      <span className="w-full border-b-1 px-6 py-4 text-sm font-medium">
        Select an interface
      </span>

      <div className="grow overflow-y-auto">
        {options.map(({ category, items }) => (
          <div key={category} className="px-6 py-4">
            <div className="text-xs text-gray-500 font-medium pb-2">
              {category}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {items.map((item) => (
                <div
                  key={item.name}
                  className={`relative border-1 rounded-lg flex flex-col gap-3 items-center justify-center h-[132px] cursor-pointer hover:bg-accent transition-colors font-medium ${
                    selected?.item.name === item.name
                      ? "border-black bg-accent font-bold"
                      : "border-gray-200"
                  }`}
                  onClick={() => select(category, item)}
                >
                  {selected?.item.name === item.name && (
                    <CircleCheck
                      fill="black"
                      stroke="white"
                      strokeWidth={2}
                      className="absolute top-1 right-1"
                    />
                  )}
                  <div className="rounded-lg border-1 shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="60"
                      height="48"
                      className="rounded-lg select-none drag-none"
                    />
                  </div>
                  <div
                    className={`text-sm text-center ${
                      selected?.item.name === item.name
                        ? "font-bold"
                        : "font-medium"
                    }`}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pl-6 pb-6 pr-6 w-full relative">
        <div className="pointer-events-none absolute inset-x-0 bottom-full h-9 bg-gradient-to-t from-background"></div>
        <Button className="w-full">
          <Check /> Use this interface
        </Button>
      </div>
    </div>
  );
}
