import React from "react";

const HowToUse = () => {
  return (
    <section id="aboutus" className="px-6 py-8">
      {/* heading */}
      <div className="flex md:items-center items-start gap-8 md:flex-row flex-col justify-between w-full ">
        <div className="w-full md:w-[40%]">
          <h5 className="text-[14px] md:text-[18px] italic text-[#494949]">
            Why Choose Us ?
          </h5>
          <h2 className="text-[35px] md:text-[46px] font-[800] leading-[2rem] md:leading-[3rem]">
            How to use ? learn more details.
          </h2>
        </div>
        <div className="flex gap-6">
          <img src="/vector.png" alt="vector imge" className="w-[60px]" />
          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] text-[#494949]">
              Dose not contain alcohol.
            </h3>
            <h2 className="text-[20px] font-[600]">PH 3.5</h2>
          </div>
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col md:flex-row gap-32 items-center justify-between mt-16 w-full md:w-[90%] mx-auto">
        <div className=" w-[60%] relative md:w-[40%]">
          <img src="/Products/details_1.png" alt="product" />
          <img
            src="/Products/details.png"
            alt="product"
            className=" absolute md:bottom-[-100px] top-[100px] right-[-40px] md:right-[-20px]"
          />
        </div>

        <div className="w-full md:w-[50%]">
          <h2 className="text-[18px] md:text-[22px] font-[800]">
            Apply & Ingredients
          </h2>
          <p className="text-[12px] md:text-[16px] font-[400] my-2 md:my-5 text-[#646464]">
            Give your face that gorgeous sun-kissed look with high-quality
            bronzers! Makeup city is a house to international brands that sell
            natural-looking bronzers. Bronzing is about giving your face the
            perfect dimension and warmth.
          </p>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#646464]">
            If you are looking for ways to warm up your pale skin, apply
            bronzer, and see the difference. Bronzer face seems the smart way to
            add glamour to your otherwise simplistic look.
          </p>

          <button className="text-[#F93801] mt-2 md:mt-5 flex items-center gap-4 text-[12px] md:text-[15px] font-[500]">
            <img src="/arrowVector.png" alt="arrow icon" className="w-[15px]" />
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
