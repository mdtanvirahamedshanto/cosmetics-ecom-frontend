import React from "react";

const BestProduct = () => {
  return (
    <section id="product" className="px-6 py-10 md:py-20">
      <div className="flex items-center justify-center flex-col w-full md:w-[70%] mx-auto">
        <h2 className="text-[35px] md:text-[60px] font-[800] leading-[2.5rem] md:leading-[3rem]">
          Best Cosmetic Products
        </h2>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#72696A]">
          Launched in 2002, Makeup City has brought renowned international
          personal care brands under one roof for the first time in Pakistan.
          from a journey of a few stores, we have grown significantly, by making
          our brands available to almost every where a person can think off.
        </p>
      </div>

      {/* product 1 */}
      <div className="flex md:flex-row flex-col items-center gap-8 justify-between w-full md:w-[70%] mx-auto my-16">
        <img
          src="/Products/best_product.png"
          alt="product"
          className="w-[180px] md:w-[250px]"
        />
        <div className="w-full md:w-[45%]">
          <h2 className="text-[35px] md:text-[50px] font-[800] leading-[2rem] md:leading-[4rem]">
            GOS- Primer Plus 30 ML
          </h2>
          <p className="text-[12px] md:text-[16px] md:mt-0 mt-2 font-[400] text-[#72696A]">
            GOSH COPENHAGEN offers a wide selection of products in different
            categories: Cosmetics, Fragrances, Hair Care, Face Care, Body Care.
            GOSH Cosmetics are available online.
          </p>
          <button className="mt-4 text-[12px] md:text-[15px] font-[400] text-[#2C3538] underline">
            Learn More
          </button>
        </div>
      </div>
      {/* product 2 */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-8 justify-between w-full md:w-[70%] mx-auto my-16">
        <div className="w-full md:w-[45%]">
          <h2 className="text-[35px] md:text-[50px] font-[800] leading-[2rem] md:leading-[4rem]">
            HD Micro Foundation Matifying Liquid
          </h2>
          <p className="text-[12px] md:text-[16px] md:mt-0 mt-2 font-[400] text-[#72696A]">
            HD Micro Foundation Matifying Liquid is a micronized and gently
            mattifying foundation with vitamin E for the most natural look.
          </p>
          <button className="mt-4 text-[12px] md:text-[15px] font-[400] text-[#2C3538] underline">
            Learn More
          </button>
        </div>
        <img
          src="/Products/heroImage.png"
          alt="product"
          className="w-[180px] md:w-[400px]"
        />
      </div>
    </section>
  );
};

export default BestProduct;
