import BreadCrumbs from "./bread-crumb";
import FilterChips from "./filter-chips";

const ProductListingToolbar = () => {
  return (
    <div className="flex justify-between items-center">
      <BreadCrumbs />
      <FilterChips />
    </div>
  );
};

export default ProductListingToolbar;
