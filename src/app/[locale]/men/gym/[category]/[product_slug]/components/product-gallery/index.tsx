"use client";

import { useState } from "react";
import { previewImg } from "./constants";

import ProductThumbnails from "./product-thumbnails";
import ThumbnailPreview from "./thumbnail-preveiw";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(previewImg[0].imgSrc);

  return (
    <div className="col-span-8 flex gap-1">
      <ProductThumbnails
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
      <ThumbnailPreview selectedImage={selectedImage} />
    </div>
  );
};

export default ProductGallery;
