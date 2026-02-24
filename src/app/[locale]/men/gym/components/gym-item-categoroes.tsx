import CategoryCard from "@/app/[locale]/components/category-card";
import { mensGymCategories } from "./constants";

const GymItemCategoroes = () => {
  return (
    <div className="grid grid-cols-4 gap-5 container section-spacing">
      {mensGymCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default GymItemCategoroes;
