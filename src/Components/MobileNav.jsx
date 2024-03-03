import React, { useEffect, useState } from "react";

// react icons
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const MobileNav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          scrolling && "backdrop-blur-lg shadow-md"
        } transition-all duration-300 flex z-50 sticky top-0 left-0 items-center justify-between px-6 py-5 md:hidden`}
      >
        <img src="/logo.png" alt="logo" className="w-[70px]" />

        <div className="flex items-center gap-5">
          <img src="/search.png" alt="search" className="w-[22px]" />
          <div className=" relative">
            <img src="/basket.png" alt="basket" className="w-[22px]" />
            <span className=" w-[20px] h-[20px] p-1 bg-red-600 rounded-full text-[1rem] text-[#fff] absolute top-[-10px] right-[-5px] flex items-center justify-center">
              4
            </span>
          </div>
          <img src="/person.png" alt="person" className="w-[22px]" />
          <CiMenuFries
            className="text-[1.5rem]"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {isOpen && (
        <>
          <ul className="z-[1000] flex items-center gap-5 p-6 font-[500] text-[#292019] text-[1.2rem] bg-[#fff] w-[70%] fixed top-0 flex-col right-0 h-screen">
            <div className="w-full flex items-end justify-end mb-8">
              <RxCross1 onClick={() => setIsOpen(false)} />
            </div>
            <a href="#home">
              <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
                Home
              </li>
            </a>
            <a href="#aboutus">
              <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
                About Us
              </li>
            </a>
            <a href="#product">
              <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
                Products
              </li>
            </a>
            <a href="#faq">
              <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
                Faq
              </li>
            </a>
            <a href="contactus">
              <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
                Contact Us
              </li>
            </a>
          </ul>
        </>
      )}
    </>
  );
};

export default MobileNav;
