import Image from "next/image";
import { shop_categories } from "./constants";
import { ModeToggle } from "./mode-toggle";
import Profile from "./profile";
import SearchProducts from "./search-products";

const HeaderMeta = () => {
  return (
    <div className="flex items-center gap-5 py-4 container">
      <Image src="/brand-logo.svg" alt="logo" width={179} height={44} />
      <div className="flex items-center gap-3 flex-1 ml-5">
        {shop_categories.map(({ id, label }) => (
          <p key={`${label}-${id}`} className="body-5 font-bold">
            {label}
          </p>
        ))}
      </div>
      <SearchProducts />
      <Profile />
      <ModeToggle />
    </div>
  );
};

export default HeaderMeta;
