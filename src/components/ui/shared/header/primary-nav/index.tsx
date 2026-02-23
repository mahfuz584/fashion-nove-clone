import { Button } from "@/components/ui/button";
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
      <div className="flex items-center flex-1 ml-5 gap-3">
        {shop_categories.map(({ id, label, href }) => (
          <Button
            key={`${label}-${id}`}
            href={href}
            variant="link"
            component="link"
            className="w-fit text-xs font-bold py-0 px-0.5 h-fit"
          >
            {label}
          </Button>
        ))}
      </div>
      <SearchProducts />
      <HeaderUtilities />
    </div>
  );
};

export default PrimaryNav;
