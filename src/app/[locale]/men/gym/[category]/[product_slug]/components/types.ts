import { Dispatch, SetStateAction } from "react";
import { LocaleProps } from "../../components/types";

export type ProductDeatilsParamsProps = {
  params: Promise<{
    product_slug: string;
    category: string;
    locale: LocaleProps;
  }>;
};

export type ProductImgDialogProps = {
  open: boolean;
  selectedImage: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedImage: Dispatch<SetStateAction<string>>;
};

export type ProductThumbnailsProps = {
  selectedImage: ProductImgDialogProps["selectedImage"];
  setSelectedImage: ProductImgDialogProps["setSelectedImage"];
};

export type ThumbnailPreviewProps = {
  selectedImage: ProductImgDialogProps["selectedImage"];
};

export type RatingOptionsType = {
  value: string | number;
  label: string;
  hasNotRating?: boolean;
};

export type ImageSliderProps = {
  title: string;
  images: string[];
  classes?: {
    root?: string;
    image?: string;
    title?: string;
    imageContainer?: string;
  };
};
