"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ClipboardCopy,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Prompt } from "./data";
import { useState } from "react";
import { formatDate, generateID } from "@/lib/utils";
import { CreatePrompt, FormElements } from "./dialogs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Container({ data }: { data: Prompt[] }) {
  const [prompts, setPrompts] = useState(data);
  const [editing, setEditing] = useState(false);

  const createPrompt = (prompt: Prompt) => {
    setPrompts((current) => [...current, prompt]);
  };

  const updatePrompt = (prompt: Prompt) => {
    setPrompts((current) =>
      current.map((x) => (x.id === prompt.id ? prompt : x))
    );
  };

  const deletePrompt = (id: string) => {
    setPrompts((current) => current.filter((x) => x.id !== id));
  };

  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b-1 border-gray-200">
        <h1 className="font-semibold">Prompt Library</h1>
        <CreatePrompt onSubmit={createPrompt} />
      </header>

      <main className="p-6 flex flex-wrap">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between border rounded-lg p-3 min-h-[180px] max-h-[214px] max-w-[346px] shadow-xs bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-sm font-medium text-[#09090b] truncate mb-1">
                    {prompt.title}
                  </h2>
                  <p className="text-xs text-[#71717A] line-clamp-2">
                    {prompt.description}
                  </p>
                </div>

                <Dialog open={editing} onOpenChange={setEditing}>
                  <AlertDialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="h-7 w-7 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus:outline-none focus:ring-0 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <EllipsisVertical className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="bottom" align="end">
                        <DialogTrigger asChild>
                          <DropdownMenuItem>
                            <SquarePen /> Edit
                          </DropdownMenuItem>
                        </DialogTrigger>

                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem variant="destructive">
                            <Trash2 /> Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete the prompt.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deletePrompt(prompt.id)}
                          className="bg-destructive hover:bg-destructive/80"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Prompt</DialogTitle>
                      <DialogDescription>
                        Edit the prompt details below.
                      </DialogDescription>
                    </DialogHeader>

                    <form
                      noValidate={false}
                      onSubmit={(event) => {
                        event.preventDefault();

                        const { title, description, content } = event
                          .currentTarget.elements as unknown as FormElements;

                        updatePrompt({
                          id: prompt.id,
                          lastUpdated: formatDate(new Date()),
                          title:
                            (title?.value.trim() && title.value.trim()) ||
                            "No Title",
                          description:
                            (description?.value.trim() &&
                              description.value.trim()) ||
                            "",
                          content:
                            (content?.value.trim() && content.value.trim()) ||
                            "No Prompt Content",
                        });

                        setEditing(false);
                      }}
                    >
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="title">
                            Title <span className="text-red-500"> *</span>
                          </Label>
                          <Input
                            id="title"
                            name="title"
                            required
                            defaultValue={prompt.title}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description</Label>
                          <Input
                            id="description"
                            name="description"
                            defaultValue={prompt.description}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="content">
                            Content <span className="text-red-500"> *</span>
                          </Label>
                          <Input
                            id="content"
                            name="content"
                            required
                            defaultValue={prompt.content}
                          />
                        </div>
                      </div>
                      <DialogFooter className="pt-4">
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button type="submit">Save</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <p className="text-sm text-[#71717A] line-clamp-3 whitespace-pre-wrap text-pretty">
                {prompt.content}
              </p>

              <div className="flex items-end justify-between">
                <ClipboardCopy className="h-4 w-4" />
                <p className="text-xs text-[#71717a] mt-1">
                  Last updated: {prompt.lastUpdated}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
