"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card1 = "/images/Card1.svg";
const Card2 = "/images/Card2.svg";
const Card3 = "/images/Card3.svg";
const Card4 = "/images/Card4.svg";
const Card5 = "/images/Card5.svg";
const Card6 = "/images/Card6.svg";

const articles = [
  {
    id: 1,
    category: "Health",
    date: "January 25, 2026",
    title: "Mind & Body Wellness",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card1,
  },
  {
    id: 2,
    category: "Fitness",
    date: "January 25, 2026",
    title: "Fitness Discipline Matters",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card2,
  },
  {
    id: 3,
    category: "Health",
    date: "January 25, 2026",
    title: "Mind & Body Wellness",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card3,
  },
  {
    id: 4,
    category: "Recipes",
    date: "January 25, 2026",
    title: "30+ easy recipes you can cook",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card4,
  },
  {
    id: 5,
    category: "Health",
    date: "January 25, 2026",
    title: "Exercise health benefits",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card5,
  },
  {
    id: 6,
    category: "Fitness",
    date: "January 25, 2026",
    title: "14 strength-specific training",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card6,
  },
  {
    id: 7,
    category: "Health",
    date: "January 25, 2026",
    title: "Mind & Body Wellness",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card1,
  },
  {
    id: 8,
    category: "Fitness",
    date: "January 25, 2026",
    title: "Fitness Discipline Matters",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card2,
  },
  {
    id: 9,
    category: "Health",
    date: "January 25, 2026",
    title: "Mind & Body Wellness",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    image: Card3,
  },
];

const tabs = ["All", "Fitness", "Health", "Recipes"];

export default function LatestArticles() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? articles
      : articles.filter((item) => item.category === activeTab);

  return (
    <section id="latest-articles" className="w-full mx-auto px-4 lg:px-8 pt-14">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
        <h2 className="text-[36px] font-bold text-[#232323]">
          Latest articles
        </h2>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[10px] py-[3px] rounded-full border transition-all duration-300 text-sm font-medium
              ${
                activeTab === tab
                  ? "bg-[#232323] text-white border-[#232323]"
                  : "bg-white border-[#D9D9D9] text-[#232323]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
        {filtered.map((article) => (
          <Link
            key={article.id}
            href="/article-details"
            className="group cursor-pointer block"
          >
            <article>
              {/* Image */}
              <div className="relative h-[352px] overflow-hidden rounded-[24px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute left-1/2 bottom-4 translate-y-1/2 -translate-x-1/2 w-[182px] h-[33px]">
                  <div className="bg-[#232323] rounded-t-[12px] px-6 py-2">
                    <span className="text-[#8EFF0A] text-[16px] font-bold whitespace-nowrap">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="text-[#232323] text-[24px] font-bold leading-[100%] tracking-[-0.02em] group-hover:text-[#0A5A37] transition-colors">
                  {article.title}
                </h3>

                <p className="mt-2 text-[#666666] text-[14px] font-normal leading-[100%] tracking-[-0.01em] max-w-[420px]">
                  {article.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
