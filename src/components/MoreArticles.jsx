"use client";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

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
];

function NavArrowButton({ className = "" }) {
  return (
    <button
      onClick={() =>
        document
          .getElementById("latest-articles")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className={`flex items-center gap-2 border-2 border-[#DCDCDC] rounded-full py-[6px] sm:py-[9px] px-[6px] sm:px-[8px] hover:bg-gray-50 transition ${className}`}
    >
      <span className="flex items-center justify-center w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] rounded-full bg-[#232323]">
        <IoIosArrowForward className="rotate-180 text-white text-[14px] sm:text-[18px]" />
      </span>
      <span className="flex items-center justify-center w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] rounded-full bg-[#232323]">
        <IoIosArrowForward className="text-white text-[14px] sm:text-[18px]" />
      </span>
    </button>
  );
}

export default function MoreArticles() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8">
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#232323]">
            More articles
          </h2>
          <NavArrowButton className="hidden sm:flex" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] sm:gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="bg-white rounded-[16px] overflow-hidden transition-shadow group"
            >
              {/* Thumbnail */}
              <div className="overflow-hidden h-48">
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

        {/* navigate prev, next */}
        <div className="sm:hidden mt-6">
          <NavArrowButton />
        </div>
      </div>
    </section>
  );
}
