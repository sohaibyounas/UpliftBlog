"use client";

import Image from "next/image";
import { motion } from "motion/react";
import IconBadge from "./IconBadge";
import { fadeUp } from "@/hooks/animations";

const BackgroundImage = "/images/Framebg.svg";
const ForgroundImage = "/images/Screenmockup.svg";

export default function FeaturesHero() {
  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-15 pb-20 sm:pb-40 md:pb-45 lg:pb-70">
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="flex justify-start mb-4"
      >
        <IconBadge text="WORKOUTS" />
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={fadeUp}
        className="text-[24px] sm:text-[36px] font-semibold text-[#232323] tracking-tight leading-[1.1] mt-6 mb-3"
      >
        Build workouts in minutes,
        <br /> not hours.
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={fadeUp}
        className="text-[14px] sm:text-[20px] font-medium text-[#4F4F4F] max-w-[1041px] leading-relaxed"
      >
        A drag-and-drop programming environment that handles everything from a
        beginner's first week to a periodized hypertrophy block — without the
        spreadsheet sprawl.
      </motion.p>

      {/* Image Preview */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.1}
        variants={fadeUp}
        className="relative w-full mx-auto flex items-center justify-center pt-[54px]"
      >
        {/* Background Frame Image */}
        <div className="w-full rounded-[32px]">
          <Image
            src={BackgroundImage}
            alt="Workout background environment"
            width={1280}
            height={681}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Foreground Mockup Image Layered on Top */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-x-4 sm:inset-x-12 bottom-[-10%] sm:bottom-[-35%] z-10"
        >
          <Image
            src={ForgroundImage}
            alt="Workout builder dashboard mockup"
            width={1016}
            height={662.7}
            className="w-full h-auto rounded-[26.95px]"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}