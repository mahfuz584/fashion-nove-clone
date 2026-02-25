type ClassType = {
  root?: string;
  img?: string;
};

type CardItem = {
  id: string;
  label: string;
  img: string;
};

export type CategoryCardProps = {
  cardItem: {
    id: string;
    label: string;
    img: string;
  };
  classes?: ClassType;
};

export type SellerCardProps = {
  cardItem: CardItem & { price: string; rating: string; reviews: string };
  classes?: ClassType;
};
