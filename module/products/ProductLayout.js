import React from "react";
import Image from "next/image";
const products = [
  {
    src: "/image/services/service-1.png",
    name: "Video Marketing",
  },
  {
    src: "/image/services/service-2.png",
    name: "Mobile Marketing",
  },
  {
    src: "/image/services/service-3.png",
    name: "Content Marketing",
  },
];

const ProductLayout = () => {
  return (
    <div className="relative container lg:pt-[90px] pt-[30px]">
      <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
        {products.map((product, index) => (
          <div key={index} className="mx-auto">
            <div className="product-box w-[250px] max-h-[160px] lg:mt-[40px] mt-[20px]">
              <Image
                src={product.src}
                alt={product.name}
                width={250}
                height={330}
                className="object-top product-image product-image--front"
              />
            </div>
            <div className="mt-3 font-serif text-xl text-center">
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;
