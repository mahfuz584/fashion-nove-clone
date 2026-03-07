"use client";

import { Rating } from "react-simple-star-rating";
import { ClientRatingProps } from "./types";

const ClientRating = ({ rating, size = 20 }: ClientRatingProps) => {
  return (
    <Rating
      size={size}
      readonly
      allowFraction
      initialValue={rating}
      emptyStyle={{ display: "flex" }}
      fillStyle={{ display: "-webkit-inline-box" }}
    />
  );
};

export default ClientRating;
