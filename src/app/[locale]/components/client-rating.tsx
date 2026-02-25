"use client";

import { Rating } from "react-simple-star-rating";

const ClientRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      size={20}
      readonly
      allowFraction
      initialValue={rating}
      emptyStyle={{ display: "flex" }}
      fillStyle={{ display: "-webkit-inline-box" }}
    />
  );
};

export default ClientRating;
