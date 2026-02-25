import { Button } from "@/components/ui/button";
import SellerLists from "./seller-list";

const GymBestSeller = () => {
  return (
    <div className="section-spacing container">
      <div className="flex items-center justify-between">
        <p className="header-subtitle pb-6 ">BEST SELLERS</p>
        <Button
          variant="link"
          component="link"
          href="#"
          className="p-0 h-fit hover:border-none border-none hover:text-tertiary-foreground"
        >
          View All
        </Button>
      </div>
      <SellerLists />
    </div>
  );
};

export default GymBestSeller;
