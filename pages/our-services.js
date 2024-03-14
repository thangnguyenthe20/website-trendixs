import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="zetifly"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">zetifly</h3>
            <p className="leading-6 text-center text-white">
              We will give you the necessary social media marketing solutions: Mobile Marketing; Video Marketing;
              Content Marketing
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-4.jpg"
          content="We have provided Marketing support to more than 17,000 businesses in many different industries to significantly increase their revenue over the years."
        />
        <ProductAds
          image="/image/services/service-5.jpg"
          content="In 2023, we added 3,000 new customers and helped them achieve profits beyond their target."
        />
      </div>
    </>
  );
};

export default Services;
