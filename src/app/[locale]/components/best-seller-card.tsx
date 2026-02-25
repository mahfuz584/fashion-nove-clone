import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SellerCardProps } from "./types";

const BestSellerCard = ({ cardItem, classes }: SellerCardProps) => {
  return (
    <Button
      variant="link"
      className={cn(
        "h-auto flex-col hover:border-none border-0 p-0 gap-0 items-start truncate",
        classes?.root,
      )}
    >
      <Image
        src={cardItem.img}
        alt={cardItem.label}
        width={500}
        height={500}
        className={cn(
          "w-full aspect-square object-center object-cover",
          classes?.img,
        )}
      />
      <p className="text-sm font-semibold text-center py-2 pr-3 max-w-full truncate">
        {cardItem.label}
      </p>
    </Button>
  );
};

export default BestSellerCard;
