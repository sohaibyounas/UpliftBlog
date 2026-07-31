"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import IconBadge from "./IconBadge";
import { pricingFaqs } from "@/hooks/pricingfaqs";
import { fadeUp, listContainer, listItem } from "@/hooks/animations";

export default function FaqSection({ faqs = pricingFaqs }) {
  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <section className="max-w-3xl mx-auto px-[20px] sm:pl-10 pt-15">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="mb-10"
      >
        <IconBadge alt="Resource Center" text="FAQ" />
        <h2 className="text-[20px] sm:text-[36px] font-semibold text-[#232323] mt-4">
          Frequently asked questions
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={listContainer}
        className="space-y-4"
      >
        {faqs.map((faq, index) => {
          const isOpen = expandedFaq === index;
          return (
            <motion.div
              key={index}
              variants={listItem}
              className={`border rounded-[16px] overflow-hidden transition-colors duration-300 ${
                isOpen
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
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="shrink-0"
                >
                  {isOpen ? (
                    <CiCircleMinus className="w-4 h-4 text-[#4F4F4F]" />
                  ) : (
                    <CiCirclePlus className="w-4 h-4 text-[#4F4F4F]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-5 text-[12px] sm:text-[16px] text-[#404040] font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
