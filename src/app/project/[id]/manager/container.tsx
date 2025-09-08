"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Conversation } from "./data";

export default function Container({
  conversations,
}: {
  conversations: Conversation[];
}) {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<Conversation | undefined>();

  return (
    <div className="flex h-full w-full overflow-x-hidden">
      <div className="w-64 shrink-0">
        {!searching ? (
          <div className="flex items-center justify-between py-2 px-3">
            <span className="text-xl font-semibold text-gray-500">
              Conversations
            </span>
            <Button
              size="icon"
              variant="ghost"
              className="group/s"
              onClick={() => setSearching(true)}
            >
              <Search
                strokeWidth={2}
                className="size-[22px] stroke-gray-500 group-hover/s:stroke-black"
              />
            </Button>
          </div>
        ) : (
          <div className="relative p-2">
            <Input
              placeholder="Search"
              className="pl-8"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value?.trim())}
            />
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 opacity-50 select-none" />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-3 top-3 hover:bg-muted-foreground/20 hover:stroke-black px-1.5! py-1.5! h-7! w-7! group/x"
              onClick={() => setSearching(false)}
            >
              <X className="pointer-events-none size-5 select-none stroke-gray-600 group-hover/x:stroke-black" />
            </Button>
          </div>
        )}

        <br />

        <div className="flex flex-col gap-2 p-2">
          {conversations.map((item, i) => (
            <Button
              key={i}
              size="sm"
              variant="outline"
              className={`w-full justify-start duration-300 ${
                item.hoverColor
              } ${
                item.label === selected?.label
                  ? `${item.selectedColor} py-6 font-bold shadow-xl`
                  : ""
              }`}
              onClick={() =>
                setSelected((cur) =>
                  cur?.label !== item?.label ? item : undefined
                )
              }
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      {selected ? (
        <div className="bg-white w-full p-10">
          <h3 className="font-bold text-lg mb-10">{selected.label}</h3>
          <p>{selected.content}</p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
            aut placeat veritatis. Cum velit sapiente, quod iste, quasi voluptas
            esse architecto eum facere assumenda dolorum officiis voluptatem
            nostrum amet.
          </p> */}
        </div>
      ) : (
        <div className="bg-white grow flex items-center justify-center">
          <p className="text-gray-500 text-xl font-medium mb-20">
            No conversation selected
          </p>
        </div>
      )}
    </div>
  );
}
