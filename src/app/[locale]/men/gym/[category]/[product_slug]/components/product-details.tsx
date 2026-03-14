import CommonBreadcrumb from "../../components/common-bread-crumb";
import { generateBreadcrumb } from "../../components/utils";
import DetailsPanel from "./details-panel";
import ProductDiscovery from "./product-discovery.tsx";
import ProductGallery from "./product-gallery";
import Reviews from "./reviews";
import { ProductDeatilsParamsProps } from "./types";

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
    <div className="py-5.5 max-w-7xl w-full mx-auto px-10">
      <CommonBreadcrumb breadcrumbsPath={breadcrumbsPath} />
      <div className="grid grid-cols-12 gap-x-10 gap-y-20">
        <ProductGallery />
        <DetailsPanel />
        <Reviews />
        <ProductDiscovery />
      </div>
    </div>
  );
};

export default ProductDetails;
