import Image from "next/image";
import { shop_categories } from "./constants";
import { ModeToggle } from "./mode-toggle";
import Profile from "./profile";
import SearchProducts from "./search-products";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import YourCart from "./your-cart";

const HeaderMeta = () => {
  return (
    <div className="flex items-center gap-2 py-4 container">
      <Image
        src="/brand-logo.svg"
        alt="logo"
        width={179}
        height={44}
        priority
        className="w-auto h-auto"
      />
      <div className="flex items-center gap-3 flex-1 ml-5">
        {shop_categories.map(({ id, label }) => (
          <p key={`${label}-${id}`} className="body-5 font-bold">
            {label}
          </p>
        ))}
      </div>
      <SearchProducts />
      <div className="flex items-center gap-1">
        <Profile />
        <Button
          variant="ghost"
          component="link"
          href="/wishlists"
          size="icon"
          startIcon={<Heart className="size-5.5" />}
          className="hover:bg-accent hover:text-accent-foreground"
        />
        <YourCart />
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderMeta;
