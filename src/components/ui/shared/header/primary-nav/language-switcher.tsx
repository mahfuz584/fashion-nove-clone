"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ActiveTooltipProps } from "./types";

const LanguageSwitcher = ({
  setActive,
}: {
  setActive: ActiveTooltipProps["setActive"];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onMouseEnter={() => setActive(null)}>
        <Button
          size="icon"
          variant="ghost"
          startIcon={<span className="text-sm mt-0.5">🇬🇧</span>}
          className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 p-1" sideOffset={12}>
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5">
          <span className="text-sm">🇬🇧</span>
          <span>English</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5">
          <span className="text-sm">🇧🇩</span>
          <span>বাংলা</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
