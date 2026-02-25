import CategoryCard from "@/app/[locale]/components/category-card";
import { mensGymCategories } from "./constants";

const GymItemCategories = () => {
  return (
    <div className="section-spacing container">
      <p className="header-subtitle pb-6 ">SHOP BY CATEGORY</p>
      <div className="grid grid-cols-5 gap-5">
        {mensGymCategories.map((category) => (
          <CategoryCard key={category.id} cardItem={category} />
        ))}
      </div>
    </div>
  );
};

export default GymItemCategories;
