import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

const PrimaryProductCard = () => {
  return (
    <Button
      component="link"
      href="#"
      className="h-auto flex-col hover:border-none border-0 p-0 gap-0 items-start rounded-none bg-transparent text-card-foreground hover:bg-transparent truncate"
    >
      <Image
        src="https://images.unsplash.com/photo-1765045768265-e3eb8471fce3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="product"
        width={500}
        height={500}
        className="w-full aspect-square object-cover"
      />
      <div className="mt-2 flex flex-col gap-0.5 overflow-hidden">
        <div className="flex items-center gap-2">
          <p className="body-8 hover:underline max-w-[80%] w-full line-clamp-2 truncate">
            The Misfits Dealy Tour Short Sleeve Tee Black e Black
          </p>
          <Heart className="size-5 shrink-0" />
        </div>
        <div className="flex gap-2">
          <p className="flex items-center gap-1.5 body-3 font-semibold text-tertiary-foreground">
            <span>TK</span>
            299
          </p>
          <p className="flex items-center gap-0.5 body-8 font-normal line-through">
            <span>TK</span>
            299
          </p>
        </div>
        <p className="body-8 font-semibold text-tertiary-foreground text-start">
          50% Off Collection! Prices As Marked
        </p>
      </div>
    </Button>
  );
};

export default PrimaryProductCard;
