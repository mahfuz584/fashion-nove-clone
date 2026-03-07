"use client";

import { generateBreadcrumb } from "@/app/[locale]/men/gym/[category]/components/utils";
import { useParams } from "next/navigation";

import CommonBreadcrumb from "./common-bread-crumb";
import { LocaleProps } from "./types";

const ProductToolbar = () => {
  const params = useParams<Record<"category" | "locale", LocaleProps>>();

  if (!params || !params.category || !params.locale) return null;

  const breadcrumbsPath = generateBreadcrumb({
    locale: params.locale,
    segments: [
      {
        label: "Men",
        href: "/men",
      },
      {
        label: "Gym",
        href: "/men/gym",
      },
      {
        label: params.category,
        href: `/men/gym/${params.category}`,
      },
    ],
  });

  return <CommonBreadcrumb breadcrumbsPath={breadcrumbsPath} />;
};

export default ProductToolbar;
