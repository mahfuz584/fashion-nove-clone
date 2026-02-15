"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent hover:text-accent-foreground relative"
        >
          <Sun className="size-4.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent
        sideOffset={8}
        className="max-w-64 w-full p-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <div className="flex flex-col py-2 px-2">
          <Button
            variant="ghost"
            startIcon={<Sun className="size-5" />}
            onClick={() => setTheme("light")}
            className="justify-start text-xs font-medium px-3"
          >
            Light
          </Button>
          <Button
            variant="ghost"
            startIcon={<Moon className="size-5" />}
            onClick={() => setTheme("dark")}
            className="justify-start text-xs font-medium px-3"
          >
            Dark
          </Button>
          <Separator className="my-1" />
          <Button
            variant="ghost"
            startIcon={<Monitor className="size-5" />}
            onClick={() => setTheme("system")}
            className="justify-start text-xs font-medium px-3"
          >
            System
          </Button>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
