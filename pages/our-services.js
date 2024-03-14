import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.png"
          alt="trendixs"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">trendixs</h3>
            <p className="leading-6 text-center text-white">
              We specialize in delivering digital marketing solutions as an agency.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.png"
          content="Your success is integral to our own. At TRENDIXS, we are dedicated to achieving customer success as our primary objective."
        />
        <ProductAds
          image="/image/services/service-7.png"
          content="Ensures a threefold increase in sales and a fivefold optimization in costs for customers."
        />
      </div>
    </>
  );
};

export default Services;
