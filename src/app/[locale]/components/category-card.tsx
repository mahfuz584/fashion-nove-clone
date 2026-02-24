import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CategoryTypeProps } from "./types";

const CategoryCard = ({ category, classes }: CategoryTypeProps) => {
  return (
    <Button
      variant="link"
      className={cn(
        "bg-card rounded-sm overflow-hidden h-auto flex-col hover:border-none border-0 p-0",
        classes?.root,
      )}
    >
      <Image
        src={category.img}
        alt={category.label}
        width={500}
        height={500}
        className={cn(
          "w-full aspect-square object-center object-cover",
          classes?.img,
        )}
      />
      <p className="body-1 py-4 font-semibold uppercase text-center">
        {category.label}
      </p>
    </Button>
  );
};

export default CategoryCard;
