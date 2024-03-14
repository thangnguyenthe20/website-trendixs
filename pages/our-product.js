/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "KASOMO Stimulating Beard & Eyebrow Growth Serum",
    image: "/image/products/product-1.jpg",
    desc: [
      "Experience rapid regrowth of beards and eyebrows within weeks, enhancing sparse or short beards and eyebrows.",
    ],
  },
  {
    name: "KASOMO hair loss, itchy and dandruff shampoo",
    image: "/image/products/product-2.jpg",
    desc: ["Decrease hair loss and breakage while preventing the recurrence of dandruff. "],
  },
  {
    name: "Morri Glow Renewal Exfoliating Gel",
    image: "/image/products/product-3.jpg",
    desc: [
      "Regular usage offers a gentle exfoliation, encouraging a more radiant and even complexion, while also providing hydration and softness to the skin.",
    ],
  },
  {
    name: "Trezzen Grey Hair Removal Bar Soap",
    image: "/image/products/product-4.jpg",
    desc: ["With each wash, it reduces the appearance of grey tones and enhances hair thickness by up to 98%."],
  },
  {
    name: "Berari Vein Recovery Balm",
    image: "/image/products/product-5.jpg",
    desc: [
      "Effectively reduce the appearance of spider veins and broken blood vessels, strengthen veins, and improve vein wall function, resulting in a noticeable decrease in unsightly spider veins.",
    ],
  },
  {
    name: "HolySmile Teeth Whitening",
    image: "/image/products/product-6.jpg",
    desc: ["Banish yellow undertones from your teeth, revealing a brighter, more radiant smile."],
  },
  {
    name: "Air Cushion CC Cream | Mushroom Head Foundation",
    image: "/image/products/product-7.jpg",
    desc: ["CC Cream Foundation provides full coverage, evens out skin tone, and is suitable for all skin types."],
  },
  {
    name: "Charmante Hands Hydration Gel",
    image: "/image/products/product-8.jpg",
    desc: ["Protect your hands from environmental and household stressors, leaving your skin smooth and rejuvenated."],
  },
  {
    name: "KASOMO Boosting Hair And Eyebrow Growth Serum",
    image: "/image/products/product-9.jpg",
    desc: [
      "Revive your scalp, mend damage, and stimulate cell regeneration to promote thicker hair and eyebrow growth.",
    ],
  },
  {
    name: "KASOMO Nourishing Hair Repair Mask",
    image: "/image/products/product-10.jpg",
    desc: ["The perfect solution for damaged, unruly hair, effortlessly restoring smoothness."],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square" />
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">{name}</p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
