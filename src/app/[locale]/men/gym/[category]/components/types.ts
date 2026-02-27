import { SIZE_FILTERS } from "@/lib/enums";

export type CategoryPramasProps = {
  params: Promise<{ category: string }>;
};

export type MensGymCategoryListProps = {
  id: MensGymCategoryProps;
  label: string;
  img: string;
};

export type MensGymCategoryProps = keyof typeof SIZE_FILTERS;
export type MensGymCategorySizeConfigProps =
  (typeof SIZE_FILTERS)[keyof typeof SIZE_FILTERS];
