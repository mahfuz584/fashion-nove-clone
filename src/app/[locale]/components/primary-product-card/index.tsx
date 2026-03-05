"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AddToCart from "./add-to-cart";

const PrimaryProductCard = () => {
  const pathName = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative h-auto flex-col border-0 p-0 gap-0 items-start rounded-none bg-transparent text-card-foreground hover:bg-transparent truncate">
      <div className="group/addToCart">
        <Badge className="absolute top-2 left-2">50% OFF</Badge>
        <Button
          component="link"
          href={`${pathName}/1`}
          className={[
            "absolute inset-0 z-10 h-full bg-transparent hover:bg-transparent",
            isCartOpen ? "pointer-events-none" : "pointer-events-auto",
          ].join(" ")}
        />
        <Image
          src="https://images.unsplash.com/photo-1559278079-0bbb5e183b3d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="product"
          width={500}
          height={500}
          className="w-full aspect-square object-cover"
        />
        <AddToCart open={isCartOpen} onOpenChange={setIsCartOpen} />
      </div>
      <div className="mt-2 flex flex-col gap-0.5 overflow-hidden w-full relative z-20">
        <div className="flex items-center gap-2">
          <Link
            href={`${pathName}/1`}
            className="body-8 hover:underline max-w-full w-full line-clamp-2 truncate"
          >
            The Misfits Dealy Tour Short Sleeve Tee Black e Black Sleeve Tee
            Black e Black
          </Link>
          <Button
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            startIcon={
              <Heart className="size-5 stroke-primary fill-transparent group-hover/heartIcon:fill-primary transition-all" />
            }
            className="size-8 shrink-0 relative z-20 bg-transparent hover:bg-transparent group/heartIcon"
          />
        </div>
        <div className="flex gap-2">
          <p className="flex items-center gap-1.5 body-3 font-semibold text-tertiary-foreground">
            <span>TK</span>299
          </p>
          <p className="flex items-center gap-0.5 body-8 font-normal line-through">
            <span>TK</span>299
          </p>
        </div>
        <p className="body-8 font-semibold text-tertiary-foreground text-start">
          50% Off Collection! Prices As Marked
        </p>
      </div>
    </div>
  );
};

export default PrimaryProductCard;
