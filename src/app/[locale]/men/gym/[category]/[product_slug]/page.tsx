import ProductDetails from "./components/product-details";
import { ProductDeatilsParamsProps } from "./components/types";

const ProductDetailsPage = async ({ params }: ProductDeatilsParamsProps) => {
  return <ProductDetails params={params} />;
};

export default ProductDetailsPage;
