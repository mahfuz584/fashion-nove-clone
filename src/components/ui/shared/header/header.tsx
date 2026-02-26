import PrimaryNav from "./primary-nav";
import SecondaryNav from "./secondary-nav";

const Header = () => {
  return (
    <div className="border-b border-black/10 flex-1">
      <PrimaryNav />
      <SecondaryNav />
    </div>
  );
};

export default Header;
