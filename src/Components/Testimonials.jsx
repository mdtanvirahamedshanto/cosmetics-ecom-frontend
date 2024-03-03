import React from "react";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-12 md:flex-row items-center justify-between px-6 mt-[7rem] md:mt-[8rem] py-12 md:py-28 w-full md:w-[80%] mx-auto">
      <div className=" relative w-[80%] md:w-[35%]">
        <img src="testimonial_vector.png" alt="vector" />
        <img
          src="testimonial.png"
          alt="vector"
          className="absolute bottom-0 left-0"
        />
      </div>

      <div className="w-full md:w-[50%]">
        <h5 className="text-[14px] md:text-[18px] text-[#8A60FF] font-[400]">
          Customer Story
        </h5>
        <h2 className="text-[35px] md:text-[48px] font-[800] leading-[2.2rem] md:leading-[3.5rem]">
          Quick and best results. You are the best!
        </h2>
        <p className="text-[14px] md:text-[18px] text-[#4F6B7D] font-[400] md:my-4 my-2">
          “If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <p className="text-[14px] md:text-[18px] font-[400] text-[#4F6B7D]">
          There are many variations of passages of Lorem Ipsum available.”
        </p>

        <div className="mt-5">
          <h3 className="text-[20px] font-[800]">Dragos Gontariu</h3>
          <p className="text-[18px] font-[500] text-[#4F6B7D]">
            Mareting Manager
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
