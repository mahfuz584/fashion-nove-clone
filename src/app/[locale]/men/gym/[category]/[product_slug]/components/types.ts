import { LocaleProps } from "../../components/types";

export type ProductDeatilsParamsProps = {
  params: Promise<{
    product_slug: string;
    category: string;
    locale: LocaleProps;
  }>;
};
