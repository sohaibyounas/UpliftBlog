"use client";

import React from "react";
import { motion } from "motion/react";
import IconBadge from "./IconBadge";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

export default function PrinciplesSection() {
  const principles = [
    {
      num: "1",
      title: "Coaches first, always",
      desc: "Every roadmap decision starts with a real coach's workflow, not a feature that looks good in a demo.",
      gridClass: "lg:col-start-1 lg:row-start-1",
    },
    {
      num: "2",
      title: "Clarity over clutter",
      desc: "If a dashboard needs a tutorial to understand, we've already failed. Simple, scannable, and fast — every screen.",
      gridClass: "lg:col-start-2 lg:row-start-1",
    },
    {
      num: "3",
      title: "Data the client owns",
      desc: "Client progress belongs to the client. We make it easy to export, share, and walk away with — no lock-in.",
      gridClass: "lg:col-start-1 lg:row-start-2",
    },
    {
      num: "4",
      title: "Built with coaches, not for them",
      desc: "Half our feature requests come from a Slack channel of working coaches who test everything before it ships.",
      gridClass: "lg:col-start-2 lg:row-start-2",
    },
    {
      num: "5",
      title: "Consistency beats intensity",
      desc: "We design for the long game — habit-building tools that keep clients showing up in month six, not just week one.",
      gridClass: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-15">
      {/* header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mb-14"
      >
        <IconBadge text="WHAT WE BELIEVE" />
        <h2 className="text-[22px] sm:text-[36px] font-bold text-[#18181b] tracking-tight mt-6 mb-4 max-w-lg leading-tight">
          The principles behind every decision we make.
        </h2>
        <p className="text-[#4F4F4F] text-[14px] sm:text-[18px] max-w-[500px] leading-[28px]">
          These aren't posters on a wall — they're how we prioritize the
          roadmap, talk to customers, and decide what not to build.
        </p>
      </motion.div>

      {/* cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {principles.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardItem}
            className={`bg-[#FAFAFA] rounded-[24px] p-[24px] border border-[#E7E7E7] flex flex-col justify-start ${item.gridClass}`}
          >
            <span
              className="text-[40px] font-semibold leading-none mb-6 block"
              style={{
                WebkitTextStroke: "2px #4F4F4F",
                color: "transparent",
              }}
            >
              {item.num}
            </span>
            <h3 className="text-[14px] sm:text-[20px] font-semibold text-[#232323] mb-3">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-[14px] text-[#404040] space-y-[14px] font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
