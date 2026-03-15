import { Button } from "@/components/ui/button";
import Image from "next/image";
import { similarImages } from "../constant";
import ImageSlider from "./image-slider";

const ProductDiscovery = () => {
  return (
    <div className="col-span-4">
      <ImageSlider images={similarImages} title="SEE SIMILAR STYLES" />
      <div className="my-10">
        <div className="flex justify-between mb-3">
          <p className="body-6 font-extrabold">TRENDING STYLES</p>
          <Button
            variant="link"
            component="link"
            href="#"
            className="p-0 h-fit hover:border-none border-none hover:text-tertiary-foreground underline"
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {similarImages.slice(0, 6).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="slider-image"
              width={500}
              height={500}
              className="object-cover w-full aspect-square"
            />
          ))}
        </div>
      </div>
      <ImageSlider images={similarImages} title="TOP RATED PRODUCTS" />
    </div>
  );
};

export default ProductDiscovery;
