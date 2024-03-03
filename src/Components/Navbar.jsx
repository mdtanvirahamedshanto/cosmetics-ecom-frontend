import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
    <nav
      className={`${
        scrolling && "backdrop-blur-lg shadow-md"
      } transition-all z-50 duration-300 md:flex sticky top-0 left-0 items-center justify-between px-6 py-5 hidden`}
    >
      <img src="/logo.png" alt="logo" />
      <ul className="flex items-center gap-7 font-[500] text-[#292019] text-[1.2rem]">
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
        <a href="#contactus">
          <li className="border-b border-transparent hover:border-b hover:border-[#292019] transition-all duration-300 cursor-pointer">
            Contact Us
          </li>
        </a>
      </ul>

      <div className="flex items-center gap-5">
        <img src="/search.png" alt="search" />
        <div className=" relative">
          <img src="/basket.png" alt="basket" />
          <span className=" w-[20px] h-[20px] p-1 bg-red-600 rounded-full text-[1rem] text-[#fff] absolute top-[-10px] right-[-5px] flex items-center justify-center">
            4
          </span>
        </div>
        <img src="/person.png" alt="person" />
      </div>
    </nav>
  );
};

export default Navbar;
