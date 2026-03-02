import FilterSidebar from "./components/filter-sidebar";
import ProductGrid from "./components/product-grid";

import { CategoryPramasProps } from "./components/types";

const CategoryPage = ({ params }: CategoryPramasProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <FilterSidebar params={params} />
      <ProductGrid />
    </div>
  );
};

export default CategoryPage;
