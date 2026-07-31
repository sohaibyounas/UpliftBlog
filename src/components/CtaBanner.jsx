"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CustomButton from "./CustomButton";
import { fadeUp } from "@/hooks/animations";

const MaskGroup = "/images/Maskgroup.svg";
const Headphone = "/images/headphone.svg";

export default function CtaBanner() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 pt-10 sm:pt-15">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-[#04441E] rounded-[32px] sm:rounded-[54px] px-6 py-12 sm:p-16 md:p-20 text-center relative overflow-hidden min-h-[420px] sm:min-h-[323px] flex items-center"
      >
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{ backgroundImage: `url(${MaskGroup})` }}
        />

        <div className="relative z-10 w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.1}
            variants={fadeUp}
            className="text-[24px] leading-tight sm:text-[44px] font-semibold text-white mb-3 sm:mb-2"
          >
            Come build the next chapter with us.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.2}
            variants={fadeUp}
            className="text-white text-[14px] sm:text-[20px] mb-8 max-w-[542px] mx-auto leading-relaxed"
          >
            Whether you're a coach ready to switch or just curious how it works
            — we'd love to show you around.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <CustomButton
              text="Talk to sales"
              variant="white"
              icon={<Image src={Headphone} alt="" width={16} height={16} />}
              className="w-full sm:w-auto justify-between sm:justify-start pr-2 pl-3 py-3 sm:py-1 gap-2"
            />
            <CustomButton
              text="Start Free Trial"
              variant="green"
              className="w-full sm:w-auto justify-between sm:justify-start px-3 py-3 sm:py-1"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
