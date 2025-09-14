"use client";

import {
  ArrowUpRight,
  BookOpen,
  CircleQuestionMark,
  GraduationCap,
  Users,
  XIcon,
} from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

export default function HelpAndMorePopover() {
  const [attachment, setAttachment] = useState<any>();

  const addAttachment = (file: any) => {
    if (file) {
      setAttachment(URL.createObjectURL(file));
    } else {
      setAttachment((x: any) => (x ? URL.revokeObjectURL(x) : null));
    }
  };

  const removeAttachment = () => {
    URL.revokeObjectURL(attachment);
    setAttachment(null);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="w-full!">
            <a
              href={"#"}
              className="!w-full"
              style={{ width: "100% !important" }}
              onClick={() => console.log("popover")}
            >
              <CircleQuestionMark className="size-6 h-6 w-6 p-0.5 stroke-[1.5]" />
              <span className="font-medium whitespace-nowrap">Help & More</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={18}
        collisionPadding={18}
        className="w-96 p-1!"
      >
        <a target="_blank" href="https://docs.stack-ai.com">
          <div
            role="menuitem"
            className="relative cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group flex w-full items-center gap-2"
            tabIndex={-1}
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <BookOpen className="h-4 w-4" />
            Documentation
            <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </a>

        <a target="_blank" href="https://discord.gg/YprKpzVTv2">
          <div
            role="menuitem"
            className="relative cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group flex w-full items-center gap-2"
            tabIndex={-1}
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <Users className="h-4 w-4" />
            Community
            <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </a>

        <a target="_blank" href="https://www.youtube.com/@Stack-AI">
          <div
            role="menuitem"
            className="relative cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group flex w-full items-center gap-2"
            tabIndex={-1}
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <GraduationCap className="h-4 w-4" />
            Tutorials
            <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </a>

        <hr className="my-4 px-2" />
        <hr className="my-4 px-2" />

        <form className="h-fit flex flex-col space-y-8 px-2 pb-2">
          <div className="space-y-2">
            <h2 className="text-lg font-bold leading-none tracking-tight">
              Help & More
            </h2>
            <p className="text-sm font-medium text-muted-foreground">
              Need help of have a question? We&apos;re here to assist you.
            </p>
          </div>

          <RadioGroup
            defaultValue="feature-request"
            orientation="horizontal"
            className="flex gap-2 space-x-4"
          >
            <div className="flex items-center space-x-2 space-y-0">
              <RadioGroupItem value="feature-request" id="r1" />
              <Label htmlFor="r1" className="font-semibold">
                Feature Request
              </Label>
            </div>
            <div className="flex items-center space-x-2 space-y-0">
              <RadioGroupItem value="question" id="r2" />
              <Label htmlFor="r2" className="font-semibold">
                Question
              </Label>
            </div>
            <div className="flex items-center space-x-2 space-y-0">
              <RadioGroupItem value="problem" id="r3" />
              <Label htmlFor="r3" className="font-semibold">
                Problem
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-2 w-full">
            <label
              className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Question or Issue
            </label>

            <br />

            <textarea
              className="flex min-h-[60px] w-full rounded-sm border border-input bg-transparent px-3 py-2 mt-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe your question or issue"
              rows={4}
              maxLength={500}
              name="message"
              id="_r_6b_-form-item"
              aria-describedby="_r_6b_-form-item-description"
              aria-invalid="false"
            ></textarea>
          </div>

          <div>
            <label
              className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor={attachment ? "" : "img"}
            >
              Attachments
            </label>

            <label
              htmlFor={attachment ? "" : "img"}
              className={attachment ? "cursor-default" : "cursor-pointer"}
            >
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-3 pb-3 pt-2">
                <div className="space-y-1 text-center">
                  {!attachment ? (
                    <>
                      <svg
                        className="mx-auto h-8 w-8 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <span className="sr-only">
                          Drag and drop files here or click to upload
                        </span>
                        <input
                          id="img"
                          className="sr-only z-0"
                          type="file"
                          name="img"
                          onChange={(event: any) =>
                            addAttachment(event?.target?.files[0])
                          }
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        Drag and drop files here or click to upload
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <Button
                          className="absolute right-0 top-1 z-10 flex rounded-sm! bg-transparent border-none outline-none hover:bg-red-500 focus:outline-none focus:ring-1 focus:ring-black w-fit! h-fit! p-0.5!"
                          onClick={(e) => {
                            e.preventDefault();
                            removeAttachment();
                          }}
                        >
                          <XIcon
                            className="h-6 w-6 stroke-black"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                      <img
                        src={attachment}
                        alt="Attachment Preview"
                        height={200}
                        width={200}
                        className="object-contain"
                      />
                    </>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div className="flex justify-end">
            <Button
              disabled={!attachment}
              onClick={(e) => {
                e.preventDefault();
                toast.success("Nice attachment!");
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
