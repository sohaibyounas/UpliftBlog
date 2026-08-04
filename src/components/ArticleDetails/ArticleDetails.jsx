"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/hooks/animations";

const Twitter = "/icons/twitterIcon.svg";
const Facebook = "/icons/facebookIcon.svg";
const Linkedin = "/icons/linkedinIcon.svg";
const Youtube = "/icons/youtubeIcon.svg";

const bulletPoints = [
  "Enim eu turpis egestas pretium aenean pharetra magna ac placerat.",
  "Nunc semper velit netus donec commodo.",
  "Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.",
];

const numberedSections = [
  {
    title: "1. Headstand (Sirsasana)",
    body: (
      <>
        Lorem ipsum dolor sit amet,{" "}
        <span className="font-medium text-[20px] text-[#404040]">
          consectetur adipiscing
        </span>{" "}
        elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim volutpat
        tellus.
      </>
    ),
    link: true,
  },
  {
    title: "2. Shoulderstand (Sarvangasana)",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
        egestas dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras tellus
        ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
        imperdiet non malesuada. In massa id tellus natoque augue in et, et.
        <span className="font-medium text-[20px] text-[#404040] underline ml-1">
          Cras tellus ac dui at sed.
        </span>{" "}
      </>
    ),
    link: false,
  },
  {
    title: "3. Fish Pose (Matsyasana)",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim volutpat tellus.",
    link: false,
  },
];

const shareButtons = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "Linkedin" },
  { icon: Youtube, label: "Youtube" },
];

export default function ArticleDetail() {
  return (
    <section
      id="articles-details"
      className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-8 scroll-mt-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        {/* Yoga for beginners */}
        <h2 className="text-[18px] sm:text-[20px] font-medium text-[#232323] mb-3">
          6 great yoga poses for beginners
        </h2>
        <p className="text-[#404040] text-[15px] sm:text-[20px] leading-[100%] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          egestas dignissim eu nunc. Id {"  "}
          <span className="text-[#404040] font-medium">pulvinar</span> enim
          volutpat tellus. Cras tellus ac dui at sed. Suspendisse feugiat
          scelerisque et, viverra urna imperdiet non malesuada. In massa id
          tellus natoque augue in et, et. Vitae interdum quis lacus ut viverra.{" "}
          <span className="text-[#404040] font-medium underline">
            Cras tellus ac dui at sed.
          </span>
        </p>

        <ul className="space-y-3 mb-8">
          {bulletPoints.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[16px] sm:text-[18px] text-[#404040] leading-[100%]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#404040] shrink-0 text-[14px] sm:text-[20px]" />
              {point}
            </li>
          ))}
        </ul>

        {/* Yoga and fitness */}
        <h2 className="text-[15px] sm:text-[20px] font-medium text-[#404040] mb-3">
          Is yoga good for your health and fitness?
        </h2>
        <p className="text-[#404040] text-[14px] sm:text-[20px] leading-[100%] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          egestas dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras
          tellus ac dui at sed.
        </p>

        <p className="text-[#404040] text-[14px] sm:text-[20px] leading-[100%] mb-8">
          Viverra urna imperdiet non malesuada. In massa id tellus natoque augue
          in et, et. Suspendisse{" "}
          <span className="text-[#404040] font-medium mr-1">
            feugiat scelerisque
          </span>
          et, viverra urna imperdiet.Vitae interdum quis lacus ut viverra.
        </p>

        <ol className="space-y-3 mb-8 list-decimal pl-6">
          {bulletPoints.map((point, i) => (
            <li
              key={i}
              className="text-[16px] sm:text-[18px] text-[#404040] leading-[100%]"
            >
              {point}
            </li>
          ))}
        </ol>

        <p className="text-[#404040] text-[14px] sm:text-[20px] leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
          egestas dignissim eu nunc. Id pulvinar enim volutpat tellus. Cras
          tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna
          imperdiet non malesuada. In massa id tellus natoque augue in et, et.
          <span className="text-[#404040] font-medium ml-1 underline">
            Cras tellus ac dui at sed.
          </span>
        </p>

        {/* Numbered sections */}
        <div className="space-y-6 mb-6">
          {numberedSections.map(({ title, body, link }) => (
            <div key={title}>
              <h3 className="font-medium text-[#232323] text-[16px] sm:text-[24px] mb-2">
                {title}
              </h3>
              <p className="text-[#404040] text-[14px] sm:text-[16px] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Share Today */}
        <div className="flex flex-col items-center justify-center gap-5 pt-2">
          <h4 className="font-semibold text-[#232323] text-[16px] sm:text-[24px]">
            Share Today:
          </h4>

          <div className="flex items-center gap-4">
            {[
              {
                icon: Facebook,
                label: "Facebook",
                color: "border-blue-500",
                bg: "bg-blue-500",
              },
              {
                icon: Twitter,
                label: "Twitter",
                color: "border-black",
                bg: "bg-black",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                color: "border-sky-600",
                bg: "bg-sky-600",
              },
              {
                icon: Youtube,
                label: "YouTube",
                color: "border-red-500",
                bg: "bg-red-500",
              },
            ].map(({ icon, label, color, bg }) => (
              <button
                key={label}
                aria-label={label}
                className="relative w-12 h-12 rounded-full group"
              >
                {/* Floating Circle */}
                <div
                  className={`absolute inset-0 rounded-full ${bg} transition-all duration-300 group-hover:-translate-y-8 group-hover:shadow-2xl`}
                />

                {/* Icon Circle */}
                <div
                  className={`relative z-10 flex h-full w-full items-center justify-center rounded-full border-2 ${color} bg-white transition-colors duration-300`}
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-5 h-5 transition duration-300 group-hover:brightness-0"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
