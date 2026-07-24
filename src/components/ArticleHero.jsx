"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#04441E] text-white text-[16px] sm:text-sm font-medium">
            Featured
          </span>
          <span className="font-semibold text-xs sm:text-sm text-[#404040]">
            5 min read - September 1, 2022
          </span>
        </div>

        {/* Heading & Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[18px] sm:text-[36px] font-bold text-[#232323] leading-tight max-w-[552px]">
            Exercise health benefits: How running changes your brain
          </h1>

          <CustomButton
            text="Start Reading"
            variant="outline"
            style={{ cursor: "pointer" }}
            className="self-start sm:self-auto flex-shrink-0 py-1.5 sm:py-2 pl-4 sm:pl-5 pr-1.5 sm:pr-2"
          />
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full rounded-[32px] overflow-hidden h-56 sm:h-80 lg:h-[420px] group bg-gray-100">
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
      </div>
    </section>
  );
}
