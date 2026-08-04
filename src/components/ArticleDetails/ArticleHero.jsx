"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "motion/react";
import CustomButton from "@/components/CustomButton";
import { fadeUp } from "@/hooks/animations";

const slides = [
  {
    id: 1,
    image: "/images/image-33.svg",
    alt: "Woman doing yoga exercise pose",
  },
  {
    id: 2,
    image: "/images/Card3.svg",
    alt: "Mind and body wellness session",
  },
  {
    id: 3,
    image: "/images/Card5.svg",
    alt: "Exercise health benefits training",
  },
];

export default function ArticleHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-8">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#04441E] text-white text-[16px] sm:text-sm font-medium">
            Featured
          </span>
          <span className="font-semibold text-xs sm:text-sm text-[#404040]">
            5 min read - September 1, 2022
          </span>
        </div>

        {/* Heading & Button */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <h1 className="text-[18px] sm:text-[36px] font-bold text-[#232323] leading-tight max-w-[552px]">
            Exercise health benefits: How running changes your brain
          </h1>

          <CustomButton
            text="Start Reading"
            variant="outline"
            onClick={() =>
              document
                .getElementById("articles-details")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
            className="self-start sm:self-auto flex-shrink-0 px-[14px] py-[10px]"
          />
        </div>
      </motion.div>

      {/* Image Slider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative w-full rounded-[32px] overflow-hidden h-56 sm:h-80 lg:h-[420px] group bg-gray-100"
      >
        {/* Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#3B4352]/70 hover:bg-[#3B4352] transition-colors cursor-pointer"
        >
          <IoIosArrowForward className="rotate-180 text-white text-[20px]" />
        </button>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#3B4352]/70 hover:bg-[#3B4352] transition-colors cursor-pointer"
        >
          <IoIosArrowForward className="text-white text-[20px]" />
        </button>

        {/* Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover will-change-transform [backface-visibility:hidden] transition-transform duration-[6000ms] ease-linear ${
                index === currentIndex ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Slider Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-6 h-2.5 bg-[#8EFF0A] rounded-full"
                  : "w-2.5 h-2.5 bg-[#8C8C8C] hover:bg-white rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
