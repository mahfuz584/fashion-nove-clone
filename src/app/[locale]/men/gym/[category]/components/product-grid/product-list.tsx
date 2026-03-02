import ProductPrimaryCard from "@/app/[locale]/components/primary-product-card";

const ProductList = () => {
  return (
    <div className="grid grid-cols-5 gap-x-3.5 gap-y-10">
      {Array.from({ length: 55 }).map((_, index) => (
        <ProductPrimaryCard key={index} />
      ))}
    </div>
  );
};

export default ProductList;
