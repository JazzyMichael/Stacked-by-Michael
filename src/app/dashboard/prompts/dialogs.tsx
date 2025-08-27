"use client";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Prompt } from "./data";

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
import { Plus } from "lucide-react";
import { formatDate, generateID } from "@/lib/utils";
import { ReactNode, useState } from "react";

export interface FormElements {
  title: { value: string };
  description?: { value: string };
  content: { value: string };
}

export function CreatePrompt({
  onSubmit,
}: {
  onSubmit: (data: Prompt) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus /> Create Prompt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Prompt</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new prompt.
          </DialogDescription>
        </DialogHeader>
        <form
          noValidate={false}
          onSubmit={(event) => {
            event.preventDefault();

            const { title, description, content } = event.currentTarget
              .elements as unknown as FormElements;

            onSubmit({
              id: generateID(),
              lastUpdated: formatDate(new Date()),
              title: (title?.value.trim() && title.value.trim()) || "No Title",
              description:
                (description?.value.trim() && description.value.trim()) || "",
              content:
                (content?.value.trim() && content.value.trim()) ||
                "No Prompt Content",
            });

            setOpen(false);
          }}
        >
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">
                Title <span className="text-red-500"> *</span>
              </Label>
              <Input id="title" name="title" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">
                Content <span className="text-red-500"> *</span>
              </Label>
              <Input id="content" name="content" required />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function DeleteDialog({
  id,
  onConfirm,
  children,
}: {
  id: string;
  onConfirm: (id?: string) => {};
  children: ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline">Show Dialog</Button> */}
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onConfirm(id)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
