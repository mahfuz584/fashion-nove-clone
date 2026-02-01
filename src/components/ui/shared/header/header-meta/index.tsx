import Image from "next/image";
import { shop_categories } from "./constants";
import { ModeToggle } from "./mode-toggle";
import SearchProducts from "./search-products";

const HeaderMeta = () => {
  return (
    <div className="flex items-center">
      <Image src="/brand-logo.svg" alt="logo" width={179} height={44} />
      <div className="flex items-center gap-3">
        {shop_categories.map(({ id, label }) => (
          <p key={id} className="body-5 font-bold">
            {label}
          </p>
        ))}
      </div>
      <SearchProducts />
      <ModeToggle />
    </div>
  );
};

export default HeaderMeta;
