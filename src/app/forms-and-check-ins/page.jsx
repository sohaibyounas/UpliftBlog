"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LuClipboardCheck,
  LuSlidersHorizontal,
  LuCamera,
  LuBellRing,
  LuTrendingUp,
  LuSend,
  LuCheck,
  LuActivity,
  LuSmile,
  LuMoon,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

export default function FormsAndCheckInsPage() {
  const [energy, setEnergy] = useState(8);
  const [sleep, setSleep] = useState(7.5);
  const [soreness, setSoreness] = useState(4);
  const [hunger, setHunger] = useState(6);
  const [activePhoto, setActivePhoto] = useState("front");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [coachReply, setCoachReply] = useState("");

  const handleSendFeedback = (e) => {
    e.preventDefault();
    if (!coachReply.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setCoachReply("");
    }, 3000);
  };

  const featureCards = [
    {
      icon: LuSlidersHorizontal,
      title: "Custom Biofeedback Metrics",
      description:
        "Track subjective indicators that spreadsheets miss: sleep latency, digestion score, motivation, and muscle soreness with calibrated scales.",
    },
    {
      icon: LuCamera,
      title: "Ghost-Overlay Progress Photos",
      description:
        "Clients align their poses with silhouette overlays for consistent lighting, posture, and framing every single check-in cycle.",
    },
    {
      icon: LuBellRing,
      title: "Smart Follow-Up Automation",
      description:
        "Never chase down late check-ins again. Uplift sends automated friendly reminders via mobile push notifications and SMS.",
    },
    {
      icon: LuTrendingUp,
      title: "Biometric Trend Correlation",
      description:
        "Automatically overlay weigh-ins and macro adherence against training tonnage to identify fatigue plateaus weeks before burnout occurs.",
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-12 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex justify-start mb-4"
        >
          <IconBadge text="ACCOUNTABILITY ENGINE" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6"
        >
          Automated check-ins that <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            uncover true athlete progress.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-3xl leading-relaxed mb-8"
        >
          Replace messy email threads and lost WhatsApp pictures. Uplift standardizes
          weekly check-ins with customizable biometric questionnaires, standardized
          pose comparisons, and automated follow-ups.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4"
        >
          <Link href="/pricing">
            <CustomButton
              text="Try Check-Ins Free"
              variant="green"
              className="py-2.5 px-5 font-semibold shadow-md"
            />
          </Link>
          <Link href="/watch-a-demo">
            <CustomButton
              text="Explore Full Features"
              variant="outline"
              className="py-2.5 px-5 font-medium"
            />
          </Link>
        </motion.div>
      </section>

      {/* Interactive Review Dashboard */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <div className="bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold text-[#04441E] bg-[#8EFF0A]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Live Interactive Demo
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mt-2">
                Athlete Check-In: Alex Morgan (Week 6 Review)
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full">
                <LuCheck className="w-3.5 h-3.5" /> Submitted On Time
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Sunday, 9:15 AM
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Left: Biofeedback Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-bold text-[#232323] flex items-center gap-2">
                <LuActivity className="w-5 h-5 text-[#04441E]" /> Subjective
                Recovery Scores
              </h3>

              {/* Slider 1: Energy */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#232323] flex items-center gap-2">
                    <LuSmile className="text-[#04441E]" /> Energy & Focus
                  </label>
                  <span className="text-sm font-bold text-[#04441E] bg-[#8EFF0A]/20 px-2.5 py-0.5 rounded">
                    {energy} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={energy}
                  onChange={(e) => setEnergy(Number(e.target.value))}
                  className="w-full accent-[#04441E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>Sluggish</span>
                  <span>Optimal</span>
                  <span>Peak Focus</span>
                </div>
              </div>

              {/* Slider 2: Sleep */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#232323] flex items-center gap-2">
                    <LuMoon className="text-[#04441E]" /> Sleep Quality & Rest
                  </label>
                  <span className="text-sm font-bold text-[#04441E] bg-[#8EFF0A]/20 px-2.5 py-0.5 rounded">
                    {sleep} hrs / night
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={sleep}
                  onChange={(e) => setSleep(Number(e.target.value))}
                  className="w-full accent-[#04441E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>Poor (4h)</span>
                  <span>Moderate (7h)</span>
                  <span>Deep REM (10h)</span>
                </div>
              </div>

              {/* Slider 3: Soreness */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#232323] flex items-center gap-2">
                    <LuActivity className="text-[#04441E]" /> Muscle Soreness & Fatigue
                  </label>
                  <span className="text-sm font-bold text-[#04441E] bg-[#8EFF0A]/20 px-2.5 py-0.5 rounded">
                    {soreness} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={soreness}
                  onChange={(e) => setSoreness(Number(e.target.value))}
                  className="w-full accent-[#04441E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>Fresh</span>
                  <span>Normal Fatigue</span>
                  <span>Severe DOMS</span>
                </div>
              </div>

              {/* Slider 4: Hunger */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#232323]">
                    Nutrition & Craving Adherence
                  </label>
                  <span className="text-sm font-bold text-[#04441E] bg-[#8EFF0A]/20 px-2.5 py-0.5 rounded">
                    {hunger} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={hunger}
                  onChange={(e) => setHunger(Number(e.target.value))}
                  className="w-full accent-[#04441E] cursor-pointer"
                />
              </div>
            </div>

            {/* Right: Quick Coach Response Box */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#232323] mb-3 flex items-center gap-2">
                  <LuClipboardCheck className="w-5 h-5 text-[#04441E]" /> Coach Response Center
                </h3>
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-900 mb-4">
                  <strong>Coach Insight:</strong> Alex maintained 96% workout
                  compliance this week. Sleep is trending up by +45 mins. Ready
                  to increase deadlift load by 5kg next block.
                </div>

                <form onSubmit={handleSendFeedback} className="space-y-4">
                  <label className="block text-xs font-semibold text-gray-700">
                    Send Audio or Written Feedback to Athlete:
                  </label>
                  <textarea
                    rows={4}
                    value={coachReply}
                    onChange={(e) => setCoachReply(e.target.value)}
                    placeholder="E.g., Great execution on day 2 squats, Alex! Keep that tempo sharp..."
                    className="w-full text-sm p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                  />

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#04441E] text-white hover:bg-[#065b29] py-3 rounded-full text-sm font-semibold transition-all shadow-md cursor-pointer"
                  >
                    <LuSend className="w-4 h-4 text-[#8EFF0A]" />
                    {feedbackSent ? "Sent to Alex's Uplift App!" : "Send Weekly Feedback"}
                  </button>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Auto-archives in athlete history</span>
                <span className="font-semibold text-[#04441E]">Uplift Pro Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Pillars */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <IconBadge text="COACH BENEFITS" />
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#232323] mt-4 mb-3">
            Designed for 100% check-in completion
          </h2>
          <p className="text-sm sm:text-base text-[#4F4F4F]">
            Everything coaches need to deliver personalized high-touch care at scale.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardItem}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200/80 hover:border-[#04441E]/40 transition-all hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4F4F4F] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
