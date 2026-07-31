"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import IconBadge from "./IconBadge";
import CustomButton from "./CustomButton";
import { fadeUp } from "@/hooks/animations";

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isFading, setIsFading] = useState(false);

  //   data
  const tabData = {
    mission: {
      title: "Mission",
      text: "Independent coaches compete with studios that have whole back offices. We think that's backwards. Upliftt exists to hand solo coaches and small teams the same tracking, automation and client visibility that used to require a staff of five.",
      imageSrc: "/images/image43.svg",
    },
    vision: {
      title: "Vision",
      text: "We're working toward a future where every coach, regardless of team size, runs their business on a single platform that knows every client's history — so no one falls through the cracks, and great coaching scales without losing its personal touch.",
      imageSrc: "/images/image44.svg",
    },
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <IconBadge text="OUR SERVICES" />

        <h1 className="text-[32px] sm:text-[36px] font-semibold text-[#232323] tracking-tight leading-[1.1] mt-6 mb-10">
          Our Mission &<br /> Vision
        </h1>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b-2 border-gray-100 mb-8">
          <button
            onClick={() => handleTabChange("mission")}
            className={`pb-3 text-[18px] sm:text-[20px] font-medium transition-colors border-b-2 -mb-[2px] ${
              activeTab === "mission"
                ? "text-[#18181b] border-[#18181b]"
                : "text-[#818181] border-transparent hover:text-gray-600"
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => handleTabChange("vision")}
            className={`pb-3 text-[18px] sm:text-[20px] font-medium transition-colors border-b-2 -mb-[2px] ${
              activeTab === "vision"
                ? "text-[#18181b] border-[#18181b]"
                : "text-[#818181] border-transparent hover:text-gray-600"
            }`}
          >
            Vision
          </button>
        </div>

        {/* data Text */}
        <p
          className={`text-[#4F4F4F] text-[12px] sm:text-[16px] leading-relaxed mb-10 max-w-[522px] transition-all duration-300 ease-in-out ${
            isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {tabData[activeTab].text}
        </p>

        {/* CTA Button */}
        <CustomButton
          text="Get in Touch"
          variant="black"
          onClick={() =>
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-[16px] py-[10px] text-[15px] sm:text-base whitespace-nowrap"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{
          opacity: isFading ? 0 : 1,
          x: 0,
          scale: isFading ? 0.98 : 1,
        }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-[350px] sm:h-[450px] lg:h-[540px] rounded-3xl overflow-hidden bg-gray-100"
      >
        <Image
          src={tabData[activeTab].imageSrc}
          alt={`Upliftt ${tabData[activeTab].title}`}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
