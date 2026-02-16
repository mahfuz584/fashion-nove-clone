import Image from "next/image";
import { shop_categories } from "./constants";
import HeaderUtilities from "./header-utilities";
import SearchProducts from "./search-products";

const PrimaryNav = () => {
  return (
    <div className="flex items-center gap-2 pt-4 container">
      <Image
        src="/brand-logo.svg"
        alt="logo"
        width={179}
        height={44}
        priority
        className="w-auto h-auto"
      />
      <div className="flex items-center gap-3 flex-1 ml-5">
        {shop_categories.map(({ id, label }) => (
          <p key={`${label}-${id}`} className="body-5 font-bold">
            {label}
          </p>
        ))}
      </div>
      <SearchProducts />
      <HeaderUtilities />
    </div>
  );
};

export default PrimaryNav;
