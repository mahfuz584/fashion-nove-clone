import ProductList from "./product-list";
import ProductToolbar from "../product-toolbar";

const ProductGrid = () => {
  return (
    <div data-lenis-prevent className="container py-5.5 flex-1 overflow-y-auto">
      <ProductToolbar />
      <ProductList />
    </div>
  );
};

export default ProductGrid;
