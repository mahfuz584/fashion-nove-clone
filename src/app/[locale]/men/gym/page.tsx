import GymBestSeller from "./components/gym-best-sellers";
import GymItemCategories from "./components/gym-item-categories";
import MenHeroSection from "./components/men-hero-section";

const DynamicCategoryPage = async () => {
  return (
    <>
      <MenHeroSection />
      <GymItemCategories />
      <GymBestSeller />
    </>
  );
};

export default DynamicCategoryPage;
