"use client";

import { motion } from "motion/react";
import IconBadge from "../IconBadge";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const featuresData = [
  {
    icon: "/images/progress.svg",
    title: "Live weight & body comp trends",
    description:
      "Auto-charted weight, body fat, muscle mass and measurements — every client update plotted instantly, no manual graphing.",
  },
  {
    icon: "/images/clock.svg",
    title: "Consistency scoring",
    description:
      "A single score per client that blends check-in frequency, workout adherence and logging habits — so you know who needs a nudge.",
  },
  {
    icon: "/images/thumbnail.svg",
    title: "Before/after photo timelines",
    description:
      "Every progress photo organized in a side-by-side gallery, dated and tagged automatically by check-in week.",
  },
  {
    icon: "/images/target.svg",
    title: "Goal progress bars",
    description:
      "Set a target weight, lift, or measurement and watch the bar fill as your client closes the gap, week over week.",
  },
  {
    icon: "/images/list.svg",
    title: "Workout & nutrition logs",
    description:
      "Every logged set, rep and meal lands in one timeline, so you can spot a missed session before your client mentions it.",
  },
];

export default function WorkoutBuilder() {
  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-12 sm:py-24">
      {/* Top Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mb-10 sm:mb-12"
      >
        <div className="mb-4">
          <IconBadge text="WHY COACHES SWITCH" />
        </div>
        <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-tight text-[#232323] mb-4 max-w-2xl">
          One dashboard. Every metric that matters.
        </h2>
        <p className="text-gray-600 max-w-xl text-base sm:text-lg leading-relaxed">
          Built specifically for the way coaches actually work — fast check-ins,
          clear trends, and zero spreadsheets.
        </p>
      </motion.div>

      {/* cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {featuresData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            style={{ backgroundColor: "#FAFAFA" }}
            className={`border border-[#E7E7E7] p-[24px] rounded-[24px] flex flex-col justify-between ${
              index === 4 ? "md:col-span-1 h-full" : "flex-1"
            }`}
          >
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[24px] sm:w-[29.25px] h-[24px] sm:h-[29.25px] object-contain"
                />
              </div>
              <h3 className="font-semibold mb-2 text-[14px] sm:text-[14px] lg:text-[20px] text-[#232323]">
                {item.title}
              </h3>
              <p className="font-medium leading-relaxed text-[#404040] text-[11px] sm:text-[12px] lg:text-[15px]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
