"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <header className="flex h-12 border-b-1 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear bg-white">
        <h1 className="font-semibold">Connections</h1>
        <Button className="cursor-pointer">
          <Plus /> New Connection
        </Button>
      </header>

      <main className="p-4">
        <p>Lets Connect!</p>
        <br />
        {/* <p>
          I have no connections to Silicon Valley so I will use this space to
          share pictures of my cat, Jazzy.
        </p> */}
        <form noValidate={false} onSubmit={console.log}>
          <label
            htmlFor="enter-text"
            className="text-sm font-semibold leading-none"
          >
            Enter Text<span className="text-red-500"> *</span>
          </label>
          <br />
          <input
            id="enter-text"
            name="enter-text"
            required
            autoComplete="off"
            style={{ border: "1px solid black" }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
