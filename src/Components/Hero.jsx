import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="px-6 flex md:flex-row flex-col gap-10 justify-between items-center"
    >
      <div className="w-full md:w-[50%] md:mt-0 mt-8">
        <button className="flex items-center gap-4 md:px-6 md:py-3 py-2 px-4 mb-3 bg-[#FFDAD7] rounded-full text-[#524439]">
          Free delivery worldwide
          <img src="/heroIcon.png" alt="icon" />
        </button>
        <h1 className="text-[50px] md:text-[100px] text-[#292019] font-[800] md:leading-[6rem] leading-[3rem]">
          Foundation Matte & Poreless
        </h1>
        <p className="font-[500] text-[16px] md:text-[20px] text-[#999999]">
          Maybelline’s #1 foundation perfect for oily skin. No stickiness, no
          shine.
        </p>
        <div className="flex items-center mt-5">
          <button className="md:py-3 md:px-6 px-4 py-2 bg-[#B91122] text-[#fff] rounded-full">
            Add to Cart
          </button>
          <button className="flex items-center py-3 px-6 text-[#999999]">
            <img src="/playIcon.png" alt="play icon" />
            How It Works
          </button>
        </div>
      </div>
      <div>
        <img
          src="/Products/heroImage.png"
          alt="hero image"
          className="w-[250px] md:w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
