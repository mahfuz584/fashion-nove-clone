import { Dispatch, SetStateAction } from "react";

export type HeaderTooltipTypes = "cart" | "wishlist" | "profile" | "language";
export type ActiveTooltipProps = {
  active: HeaderTooltipTypes | null;
  setActive: Dispatch<SetStateAction<HeaderTooltipTypes | null>>;
};
