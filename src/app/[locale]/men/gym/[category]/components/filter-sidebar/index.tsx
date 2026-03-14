import { Input } from "@/components/ui/input";
import { BiSearchAlt2 } from "react-icons/bi";
import { CategoryPramasProps, MensGymCategoryProps } from "../types";
import ColorFilter from "./color-filter";
import DiscountFilter from "./discount-filter";
import FabricFilter from "./fabric-filter";
import SizeFilter from "./size-filter";
import SortByFilter from "./sort-by-filter";

const FilterSidebar = async ({ params }: CategoryPramasProps) => {
  const { category } = await params;

  return (
    <aside
      data-lenis-prevent
      className="max-w-57 w-full overflow-y-auto px-3 py-5.5 secondary-scroll"
    >
      <div className="mx-3 mb-6">
        <div className="flex items-center justify-between mb-4">
          <p className="body-8">REFINE BY</p>
          <p className="body-8">1,106 products</p>
        </div>
        <Input
          placeholder="Search products by name"
          startIcon={<BiSearchAlt2 />}
          classes={{
            root: "rounded-none h-7.5 w-full shadow-none hover:shadow-none focus:shadow-none border-t-0 border-r-0 border-l-0 border-b pl-5 pr-2 placeholder:text-xs",
            startIcon: "[&_svg]:size-4 left-0",
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <SortByFilter />
        <SizeFilter category={category as MensGymCategoryProps} />
        <DiscountFilter />
        <FabricFilter />
        <ColorFilter />
      </div>
    </aside>
  );
};

export default FilterSidebar;
