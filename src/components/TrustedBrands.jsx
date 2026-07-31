"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const logoipsumDark1 = "/images/logoipsumDark.svg";
const logoipsumDark2 = "/images/logoipsumDark2.svg";
const logoipsumDark3 = "/images/logoipsumDark3.svg";
const logoipsumDark4 = "/images/logoipsumDark4.svg";
const logoipsumDark5 = "/images/logoipsumDark5.svg";
const logoipsumGreen1 = "/images/logoipsumGreen.svg";
const logoipsumGreen2 = "/images/logoipsumGreen2.svg";
const logoipsumGreen3 = "/images/logoipsumGreen3.svg";
const logoipsumGreen4 = "/images/logoipsumGreen4.svg";

export default function TrustedBrands() {
  const brands = [
    { icon: logoipsumDark1, active: false },
    { icon: logoipsumGreen1, active: true },
    { icon: logoipsumDark2, active: false },
    { icon: logoipsumGreen2, active: true },
    { icon: logoipsumDark3, active: false },
    { icon: logoipsumDark4, active: false },
    { icon: logoipsumGreen3, active: true },
    { icon: logoipsumDark5, active: false },
    { icon: logoipsumGreen4, active: true },
  ];

  return (
    <section className="w-full mx-auto px-6 pt-13 text-center">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="text-[15px] sm:text-[24px] font-black text-[#232323] tracking-wide uppercase mb-10"
      >
        POWERED BY TRUSTED BRANDS
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardContainer}
        className="flex flex-wrap justify-center gap-4 w-full max-w-[1100px] mx-auto lg:basis-full"
      >
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            variants={cardItem}
            className={`flex items-center justify-center px-6 py-3 rounded-full transition-colors basis-[45%] sm:basis-[30%] lg:basis-auto ${
              brand.active ? "bg-[#18181b]" : "bg-white"
            }`}
            style={{
              borderStyle: "solid",
              borderWidth: "0.84px",
              borderRadius: "9999px",
              borderColor: "#19191924",
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            <Image
              src={brand.icon}
              alt="brand logo"
              width={135.46}
              height={21.33}
              style={{ width: "135.46px", height: "21.33px" }}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
