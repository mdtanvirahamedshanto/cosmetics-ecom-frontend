import React from "react";

const Brands = () => {
  return (
    <section className="px-6 mt-[3rem] md:mt-[12rem] flex flex-col items-center justify-center">
      <h2 className="text-[16px] font-[600] text-[#C8CED8] mb-4">
        SOME OF OUR TRUSTED CLIENTS
      </h2>

      <div className="flex items-center gap-12 md:gap-24 overflow-x-scroll">
        <img src="/Brands/logo_1.png" alt="brand" />
        <img src="/Brands/logo_2.png" alt="brand" />
        <img src="/Brands/logo_3.png" alt="brand" />
        <img src="/Brands/logo_4.png" alt="brand" />
        <img src="/Brands/logo_5.png" alt="brand" />
        <img src="/Brands/logo_6.png" alt="brand" />
      </div>
    </section>
  );
};

export default Brands;
