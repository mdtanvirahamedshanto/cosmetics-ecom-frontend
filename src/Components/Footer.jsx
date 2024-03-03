import React from "react";

// react icons
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-[#F9F9F9]
         px-6 mt-12 py-8 flex md:flex-row flex-col justify-between gap-6 md:gap-12 w-full"
      >
        <div className="w-full md:w-[30%]">
          <img src="/logo.png" alt="logo" />
          <p className="text-[16px] text-[#9A9A9A] font-[400] my-3">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself.
          </p>
          <div className=" relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="demomail@gmail.com"
              className="py-3 w-full px-4 bg-[#9a9a9a38] focus:outline-none"
            />
            <button className=" hover:bg-[#FD5757] hover:text-[#fff] transition-all duration-300 absolute top-0 right-0 h-full px-8 bg-[#9a9a9a1f]">
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-[800]">About</h2>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Home
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Features
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            FAQs
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Reviews
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Stories
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-[800]">Privacy</h2>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Privacy
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Policy
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Payment
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            Terms
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-[800]">Contact Us</h2>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            +01 234 567 8910{" "}
          </p>
          <p className=" cursor-pointer hover:text-[#FD5757] transition-all duration-300">
            demomail@gmail.com
          </p>
        </div>
      </footer>
      <div className="w-full h-[2px] bg-[#EDEBE8]"></div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full py-6 px-6 bg-[#F9F9F9] ">
        <p>© Copyright 2021 ShantoAll rights reserved.</p>
        <div className="flex items-center gap-4">
          <p>Contact Us</p>
          <p>terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
