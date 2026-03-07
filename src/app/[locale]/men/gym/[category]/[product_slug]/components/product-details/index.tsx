import CommonBreadcrumb from "../../../components/common-bread-crumb";
import { generateBreadcrumb } from "../../../components/utils";
import { ProductDeatilsParamsProps } from "../types";
import DetailsPanel from "./details-panel";
import ProductPreview from "./product-preview";

const ProductDetails = async ({ params }: ProductDeatilsParamsProps) => {
  const { category, locale, product_slug } = await params;

  const breadcrumbsPath = generateBreadcrumb({
    locale: locale,
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
        label: category,
        href: `/men/gym/${category}`,
      },
      {
        label: "Baggy T-Shirt",
        href: `/men/gym/${category}/${product_slug}`,
      },
    ],
  });

  return (
    <div className="py-5.5 max-w-6xl w-full mx-auto px-10">
      <CommonBreadcrumb breadcrumbsPath={breadcrumbsPath} />
      <div className="grid grid-cols-12 gap-10 ">
        <ProductPreview />
        <DetailsPanel />
      </div>
    </div>
  );
};

export default ProductDetails;
