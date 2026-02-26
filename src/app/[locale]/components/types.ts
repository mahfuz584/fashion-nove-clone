type ClassType = {
  root?: string;
  img?: string;
};

type CardItem = {
  id: string;
  label: string;
  img: string;
  price: string;
  rating: number;
  reviews: string;
};

export type CategoryCardProps = {
  cardItem: Pick<CardItem, "id" | "label" | "img">;
  classes?: ClassType;
};

export type SellerCardProps = {
  cardItem: CardItem;
  classes?: ClassType;
};

export type ProductSliderProps = {
  sliderItems: CardItem[];
};
