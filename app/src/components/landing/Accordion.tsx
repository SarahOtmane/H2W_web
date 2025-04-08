import React, { useRef, useState } from "react";
import Icon from "../../utils/Icon";

type FAQItem = {
  question: string;
  answer: string;
};

interface AccordionProps {
  faqData: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // tableau de refs typé
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white rounded-[2rem] md:p-12">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-[#DBDEEF]">
            <div className={`p-4 rounded-[1rem] ${isOpen ? "bg-[#F8F6FF]" : ""}`}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-[22px] font-Jakarta-bold text-custom-black focus:outline-none my-4 px-6 cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="ml-2">
                  <Icon name={isOpen ? "flecheCoteHaut" : "flecheCoteBas"} />
                </span>
              </button>

              <div
                ref={(el: HTMLDivElement | null) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                }}
                className="transition-all duration-500 ease-in-out overflow-hidden px-6"
              >
                <div className="mt-3 text-[20px] font-Jakarta-medium text-custom-black leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
