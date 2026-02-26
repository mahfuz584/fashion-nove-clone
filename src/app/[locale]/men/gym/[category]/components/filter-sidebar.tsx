import { Input } from "@/components/ui/input";
import { BiSearchAlt2 } from "react-icons/bi";

const FilterSidebar = () => {
  return (
    <aside className="max-w-70 w-full border-r overflow-y-auto pl-8 pr-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <p className="body-8">REFINE BY</p>
        <p className="body-8">1,106 products</p>
      </div>
      <Input
        placeholder="Search products by name"
        startIcon={<BiSearchAlt2 />}
        classes={{
          root: "rounded-none h-7.5 w-full shadow-none hover:shadow-none focus:shadow-none border-t-0 border-r-0 border-l-0 border-b pl-6 placeholder:text-[13px]",
          startIcon: "[&_svg]:size-4 left-0",
        }}
      />
    </aside>
  );
};

export default FilterSidebar;
