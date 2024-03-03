import React, { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const data = [
    {
      question: "How long until we deliver your product.",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      question: "Do you offer money back guarentee?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      question: "Is it medically tested?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      question: "Do you ship out of United States?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
      question: "How to get best results from this product?",
      answer:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
  ];

  const handleClick = (index) =>
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <section id="faq" className="px-6 mt-[2rem] md:mt-12">
      <h2 className="text-[30px] md:text-[44px] font-[800] text-center">
        Frequently Ask Questions
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-8 w-full md:w-[70%] mx-auto">
        {data?.map((according, index) => (
          <article key={index} className="border-b border-border rounded py-3">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2
                className={`${
                  isOpen === index && "text-brandColor"
                } font-[600] text-[1rem] md:text-[1.2rem] `}
              >
                {according.question}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[0.8rem] md:text-[1.2rem] text-text transition-all duration-300 ${
                    isOpen === index && "rotate-[180deg] !text-primary"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-text text-[0.8rem] md:text-[0.9rem] overflow-hidden">
                {according.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;
