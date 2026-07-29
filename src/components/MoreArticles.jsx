"use client";

import { useRef, useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Card1 = "/images/Card1.svg";
const Card2 = "/images/Card2.svg";
const Card3 = "/images/Card3.svg";

const articles = [
  {
    id: 1,
    category: "Wellness",
    title: "Mind & Body Wellness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card1,
    alt: "Silhouette of woman doing yoga at sunset",
    date: "Sep 1, 2024",
  },
  {
    id: 2,
    category: "Fitness",
    title: "Fitness Discipline Outdoors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card2,
    alt: "Woman exercising outdoors on mat",
    date: "Aug 28, 2024",
  },
  {
    id: 3,
    category: "Wellness",
    title: "Mind & Body Wellness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card3,
    alt: "Group fitness session on beach",
    date: "Aug 20, 2024",
  },
  {
    id: 4,
    category: "Nutrition",
    title: "Healthy Eating Habits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card1,
    alt: "Bowl of fresh fruits and vegetables",
    date: "Aug 15, 2024",
  },
  {
    id: 5,
    category: "Fitness",
    title: "Strength Training Basics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card2,
    alt: "Man lifting weights in gym",
    date: "Aug 10, 2024",
  },
  {
    id: 6,
    category: "Wellness",
    title: "Mindfulness & Meditation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    image: Card3,
    alt: "Person meditating in nature",
    date: "Aug 5, 2024",
  },
];

function NavArrowButton({ className = "", onPrev, onNext, isAtStart, isAtEnd }) {
  return (
    <div
      className={`inline-flex items-center gap-2 p-[6px] bg-white transition-all duration-300 ${className}`}
    >
      {/* Prev Button */}
      <button
        onClick={onPrev}
        disabled={isAtStart}
        aria-label="Previous"
        className={`flex items-center justify-center w-7.5 h-7.5 rounded-full border border-[#D1D5DC] transition-all duration-300 ${isAtStart
          ? "bg-transparent text-gray-300 cursor-not-allowed"
          : "hover:bg-gray-200 bg-[#F3F4F6] text-[#364153]"
          }`}
      >
        <IoIosArrowForward className="rotate-180 text-[16px]" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isAtEnd}
        aria-label="Next"
        className={`flex items-center justify-center w-7.5 h-7.5 rounded-full border border-[#D1D5DC] transition-all duration-300 ${isAtEnd
          ? "cursor-not-allowed bg-transparent text-gray-300"
          : "cursor-pointer hover:bg-gray-200 bg-[#F3F4F6] text-[#364153]"
          }`}
      >
        <IoIosArrowForward className="text-[16px]" />
      </button>
    </div>
  );
}

export default function MoreArticles() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setIsAtStart(scrollLeft <= 5);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 300;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mb-8">
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#232323]">
            More articles
          </h2>
          <NavArrowButton
            onPrev={() => scrollByAmount("prev")}
            onNext={() => scrollByAmount("next")}
            isAtStart={isAtStart}
            isAtEnd={isAtEnd}
          />
        </div>

        {/* Cards row */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto scrollbar-hidden gap-4 sm:gap-6 lg:gap-5 scroll-smooth snap-x snap-mandatory"
        >
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              data-card
              className="bg-white rounded-[16px] overflow-hidden transition-shadow group shrink-0 snap-start w-[85%] xs:w-[70%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] 2xl:w-[calc(25%-15px)]"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[411/310] overflow-hidden rounded-[20px]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card body */}
              <div className="pl-0 py-3 sm:py-5">
                <h3 className="font-semibold text-[#232323] text-[15px] sm:text-[24px] mb-0 sm:mb-2 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}