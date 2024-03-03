import React from "react";

const Ads = () => {
  return (
    <section className="px-6 mt-20 flex items-center  justify-center">
      <div className=" relative">
        <img src="CTA.png" alt="bg image" />
        <img
          src="/Products/ads.png"
          alt="ads"
          className=" w-[40px] md:w-[100px] absolute bottom-[15px] md:bottom-[60px] right-[32%] md:right-[35%]"
        />
      </div>
    </section>
  );
};

export default Ads;
