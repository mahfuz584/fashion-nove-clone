import BestSellerCard from "@/app/[locale]/components/best-seller-card";
import { menBestSellers } from "./constants";

const GymBestSeller = () => {
  return (
    <div className="section-spacing container">
      <p className="header-subtitle pb-6 ">BEST SELLERS</p>
      <div className="grid grid-cols-5 gap-5">
        {menBestSellers.map((category) => (
          <BestSellerCard key={category.id} cardItem={category} />
        ))}
      </div>
    </div>
  );
};

export default GymBestSeller;
