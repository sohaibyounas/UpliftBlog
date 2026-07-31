"use client";

import { motion } from "motion/react";
import IconBadge from "./IconBadge";
import ImageCompareSlider from "./ImageCompareSlider";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const before = "/images/before.jpg";
const after = "/images/after.jpg";

const proofData = [
  {
    id: 1,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
  {
    id: 2,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
  {
    id: 3,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
  {
    id: 4,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
  {
    id: 5,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
  {
    id: 6,
    beforeImg: before,
    afterImg: after,
    name: "Michael Jordan",
    cycle: "20-week strength cycle",
    metricLabel: "Deadlift 1RM",
    metricValue: "+45 lb",
  },
];

export default function ExerciseLibrary() {
  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-6 sm:py-10 bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto mb-10 sm:mb-12"
      >
        <div className="mb-4">
          <IconBadge text="BEFORE & AFTER" />
        </div>
        <h2 className="text-[24px] sm:text-[36px] font-extrabold tracking-tight text-[#232323] mb-4">
          The proof clients actually want to see.
        </h2>
        <p className="text-[#404040] max-w-2xl text-[13px] sm:text-[20px] leading-relaxed">
          Every progress photo a client uploads slots into a before/after
          timeline automatically — paired with the numbers behind the change, so
          the result speaks for itself in every check-in.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardContainer}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {proofData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardItem}
            className="rounded-[20px] overflow-hidden border border-gray-200/60 bg-white shadow-xs flex flex-col justify-between"
          >
            {/* Draggable Before/After Compare Slider */}
            <ImageCompareSlider
              beforeImg={item.beforeImg}
              afterImg={item.afterImg}
            />

            {/* Middle Text Info */}
            <div className="p-5">
              <h3 className="text-[18px] text-[#232323] font-semibold mb-1">
                {item.name}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#232323]">
                {item.cycle}
              </p>
            </div>

            {/* Bottom Metric Bar */}
            <div className="bg-[#F6F6F6] px-5 py-3.5 flex items-center justify-between border-t border-gray-100">
              <span className="text-[12px] text-[#404040] font-medium">
                {item.metricLabel}
              </span>
              <span className="text-[12px] text-[#529900] font-medium">
                {item.metricValue}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
