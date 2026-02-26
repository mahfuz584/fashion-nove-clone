import FilterSidebar from "./components/filter-sidebar";
import ProductGrid from "./components/product-grid";

const CategoryPage = () => {
  return (
    <div className="h-full overflow-hidden flex">
      <FilterSidebar />
      <ProductGrid />
    </div>
  );
};

export default CategoryPage;
