"use client";

import { motion } from "motion/react";
import IconBadge from "@/components/IconBadge";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const Vector = "/images/Vector.svg";
const Vector1 = "/images/Vector1.svg";
const Vector2 = "/images/Vector2.svg";

export default function CalloutSection() {
  return (
    <section className="bg-[#0b4d1c] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge & Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="mb-4">
            <IconBadge text="THE OLD WAY" variant="light" />
          </div>
          <h2 className="text-[20px] sm:text-[28px] sm:text-[36px] font-semibold tracking-tight max-w-xl leading-tight">
            Progress shouldn't live in a <br />
            dozen screenshots.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid md:grid-cols-2 gap-[10px] mb-[10px]"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardItem}
            className="bg-[#016A2C] border border-[#017C34] p-[24px] rounded-[24px]"
          >
            <div className="mb-4">
              <img
                src={Vector}
                alt="Spreadsheet Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <h3 className="font-semibold text-[16px] sm:text-[20px]">
              Progress photos buried in camera rolls
            </h3>
            <p className="text-[12px] sm:text-[15px] text-[#F6F6F6] font-medium leading-relaxed">
              Clients text you photos one at a time. By month three you've lost
              the originals and have no real before/after.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardItem}
            className="bg-[#016A2C] border border-[#017C34] p-[24px] rounded-[24px]"
          >
            <div className="mb-4">
              <img src={Vector1} alt="PDF Icon" className="w-[24px] h-[24px]" />
            </div>
            <h3 className="font-semibold text-[16px] sm:text-[20px]">
              PDFs that go straight to Downloads
            </h3>
            <p className="text-[12px] sm:text-[15px] text-[#F6F6F6] font-medium leading-relaxed">
              Numbers come in over text, DM, or a sticky note. Nothing's logged
              in one place, so trends are guesswork.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#DDD4C3] text-[#191919] border border-[#B59D6F] p-[24px] rounded-[24px]"
        >
          <div className="mb-4">
            <img
              src={Vector2}
              alt="Templates Icon"
              className="w-[24px] h-[24px]"
            />
          </div>
          <h3 className="font-semibold text-[16px] sm:text-[20px] text-[#232323]">
            Templates that don&apos;t actually scale
          </h3>
          <p className="text-[12px] sm:text-[15px] text-[#404040] font-medium leading-relaxed">
            Without a single source of truth, check-ins turn into "how do you
            feel things are going" instead of showing the client exactly how far
            they've come.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
