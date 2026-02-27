"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { ModeToggle } from "./mode-toggle";
import Profile from "./profile";
import { HeaderTooltipTypes } from "./types";
import YourCart from "./your-cart";

const HeaderUtilities = () => {
  const [activeTooltip, setActiveTooltip] = useState<HeaderTooltipTypes | null>(
    null,
  );

  return (
    <div className="flex items-center gap-1">
      <Profile active={activeTooltip} setActive={setActiveTooltip} />
      <Button
        variant="ghost"
        component="link"
        href="/wishlists"
        size="icon"
        startIcon={<Heart className="size-5.5" />}
        onMouseEnter={() => setActiveTooltip(null)}
        className="hover:bg-accent hover:text-primary"
      />
      <YourCart active={activeTooltip} setActive={setActiveTooltip} />
      <LanguageSwitcher setActive={setActiveTooltip} />
      <ModeToggle />
    </div>
  );
};

export default HeaderUtilities;
