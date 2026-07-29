"use client";

import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import IconBadge from "./IconBadge";
import { pricingFaqs } from "@/hooks/pricingfaqs";

export default function FaqSection({ faqs = pricingFaqs }) {
  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <section className="max-w-3xl mx-auto px-[20px] sm:pl-10 pt-15">
      <div className="mb-10">
        <IconBadge alt="Resource Center" text="FAQ" />
        <h2 className="text-[20px] sm:text-[36px] font-semibold text-[#232323] mt-4">
          Frequently asked questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = expandedFaq === index;
          return (
            <div
              key={index}
              className={`border rounded-[16px] transition-all duration-300 overflow-hidden ${isOpen
                ? "border-[#EEEEEE] bg-[#FAFAFA]"
                : "border-[#F6F6F6] bg-[#FAFAFA]"
                }`}
            >
              <button
                onClick={() => setExpandedFaq(isOpen ? "" : index)}
                className="w-full text-left p-5 sm:p-3 flex items-center justify-between gap-4 focus:outline-none"
                style={{ cursor: "pointer" }}
              >
                <span className="font-semibold text-[#232323] text-[11px] sm:text-[18px]">
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {isOpen ? (
                    <CiCircleMinus className="w-4 h-4 text-[#4F4F4F]" />
                  ) : (
                    <CiCirclePlus className="w-4 h-4 text-[#4F4F4F]" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-3 pb-5 text-[12px] sm:text-[16px] text-[#404040] font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
