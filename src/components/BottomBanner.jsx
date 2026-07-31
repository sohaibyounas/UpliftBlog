"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { fadeUp } from "@/hooks/animations";

const MaskGroup = "/images/Maskgroup.svg";

export default function BottomBanner() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Started free trial successfully!");
      setEmail("");
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-6 pt-10 sm:pt-15">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-[#04441E] rounded-[32px] sm:rounded-[54px] px-6 py-12 sm:p-16 md:p-20 text-center relative overflow-hidden min-h-[420px] sm:min-h-[450px] flex items-center justify-center"
      >
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{
            backgroundImage: `url(${MaskGroup})`,
          }}
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.1}
            variants={fadeUp}
            className="text-[20px] leading-tight sm:text-[44px] font-semibold text-white mb-4 tracking-tight"
          >
            Join us on this journey <br className="hidden sm:block" /> and
            accelerate into the future
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.2}
            variants={fadeUp}
            className="text-white/80 text-[13px] sm:text-[18px] mb-8 max-w-[580px] mx-auto leading-relaxed"
          >
            Start your journey towards a smarter, super-enhanced coaching
            experience with Upliftt all-in-one coaching platform.
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-flex items-center gap-2 bg-[#000000] border border-white/20 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
          >
            <IoCheckmarkCircle className="text-[#fff] text-[22px] sm:text-[30px] shrink-0" />
            <span>#1 Fitness Coaching Platform</span>
          </motion.div>

          {/* Input Wrapper with Error on Top */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.4}
            variants={fadeUp}
            className="w-full max-w-xl mx-auto flex flex-col items-start gap-1.5"
          >
            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="text-red-300 text-xs sm:text-sm ml-2 text-left"
                >
                  {error}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.div
              animate={error ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.4 }}
              className={`w-full flex flex-col sm:flex-row items-stretch sm:items-center border rounded-[24px] sm:rounded-full p-2 gap-2 sm:gap-2 transition-colors bg-[#065526]/80 backdrop-blur-md ${
                error ? "border-red-400" : "border-white/20"
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-transparent px-4 py-3 sm:py-3 text-white text-[15px] sm:text-base outline-none placeholder:text-white/70 min-w-0"
              />

              <CustomButton
                text={loading ? "Processing..." : "Start 14-Day Free Trial"}
                variant="green"
                fullWidth={true}
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full sm:w-auto shrink-0 h-[46px] px-2 mb-2 sm:mb-0 text-[13px] sm:text-[16px] whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
