import { cn } from "@/lib/utils";
import Image from "next/image";
import { ProductThumbnailsProps } from "../types";
import { previewImg } from "./constants";

const ProductThumbnails = ({
  selectedImage,
  setSelectedImage,
}: ProductThumbnailsProps) => {
  return (
    <div className="grid grid-cols-2 gap-px h-fit">
      {previewImg.map((img) => (
        <Image
          key={img.id}
          src={img.imgSrc}
          alt={img.id}
          width={500}
          height={500}
          onClick={() => setSelectedImage(img.imgSrc)}
          className={cn(
            "w-25 aspect-5/6 object-cover object-center cursor-pointer  border-transparent hover:border-primary border-2",
            selectedImage === img.imgSrc && "border-primary",
          )}
        />
      ))}
    </div>
  );
};

export default ProductThumbnails;
