import Image from "next/image";

const ProductPreview = () => {
  return (
    <div className="col-span-7">
      <Image
        src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="cloth"
        width={1000}
        height={1000}
        className="w-full aspect-5/6 object-cover object-center"
      />
    </div>
  );
};

export default ProductPreview;
