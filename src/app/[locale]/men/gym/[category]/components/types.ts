import { locales, SIZE_FILTERS } from "@/lib/enums";

export type LocaleProps = (typeof locales)[number];
export type CategoryPramasProps = {
  params: Promise<{ category: string }>;
};

export type GenerateBreadCumbsProps = {
  locale: LocaleProps;
  segments: { label: string; href: string }[];
};

export type CommonBreadcrumbProps = {
  breadcrumbsPath: {
    label: string;
    href?: string;
  }[];
};

export type MensGymCategoryListProps = {
  id: MensGymCategoryProps;
  label: string;
  img: string;
};

export type ColorPickerProps = {
  item: {
    id: string;
    label: string;
    color: string;
    className: string;
  };
  checked: boolean;
  onChange: (id: string) => void;
  classes?: {
    root?: string;
    label?: string;
    icon?: string;
    indicator?: string;
    labelRoot?: string;
  };
};

export type MensGymCategoryProps = keyof typeof SIZE_FILTERS;
export type MensGymCategorySizeConfigProps =
  (typeof SIZE_FILTERS)[keyof typeof SIZE_FILTERS];
