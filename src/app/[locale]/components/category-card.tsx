import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CategoryCardProps } from "./types";

const CategoryCard = ({ cardItem, classes }: CategoryCardProps) => {
  console.log(cardItem.id);
  return (
    <Button
      variant="link"
      component="link"
      href={`gym/${cardItem.id}`}
      className={cn(
        "bg-card h-auto flex-col hover:border-none border-0 p-0 gap-0",
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
      <p className="card-title uppercase text-center text-card-foreground py-1.5">
        {cardItem.label}
      </p>
    </Button>
  );
};

export default CategoryCard;
