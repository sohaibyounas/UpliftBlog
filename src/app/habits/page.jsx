"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LuFlame,
  LuCheck,
  LuSparkles,
  LuGlassWater,
  LuApple,
  LuFootprints,
  LuMoon,
  LuAward,
  LuSmartphone,
  LuBellRing,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

export default function HabitsPage() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Hit 3.5L Daily Water Intake",
      category: "Hydration",
      icon: LuGlassWater,
      streak: 19,
      completed: true,
    },
    {
      id: 2,
      title: "165g High-Protein Intake",
      category: "Nutrition",
      icon: LuApple,
      streak: 14,
      completed: true,
    },
    {
      id: 3,
      title: "10,000 Steps Outdoor Walk",
      category: "Activity",
      icon: LuFootprints,
      streak: 27,
      completed: false,
    },
    {
      id: 4,
      title: "15-Min Evening Hip Mobility Routine",
      category: "Recovery",
      icon: LuSparkles,
      streak: 8,
      completed: false,
    },
    {
      id: 5,
      title: "Screens Off 45 Min Before Sleep",
      category: "Sleep",
      icon: LuMoon,
      streak: 12,
      completed: true,
    },
  ]);

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              completed: !h.completed,
              streak: !h.completed ? h.streak + 1 : Math.max(0, h.streak - 1),
            }
          : h,
      ),
    );
  };

  const completedCount = habits.filter((h) => h.completed).length;
  const completionPercentage = Math.round((completedCount / habits.length) * 100);

  const habitFeatures = [
    {
      icon: LuFlame,
      title: "Gamified Streak Dynamics",
      description:
        "Athletes unlock milestone badges and celebration animations as their consistency streak grows past 7, 30, and 100 consecutive days.",
    },
    {
      icon: LuSmartphone,
      title: "Wearables Auto-Sync",
      description:
        "Direct bidirectional synchronization with Apple Health, Garmin, and Whoop automatically marks off sleep and step milestones without manual entry.",
    },
    {
      icon: LuBellRing,
      title: "Intelligent Habit Cues",
      description:
        "Time-zone aware micro-reminders prompt clients right before their usual resistance triggers, drastically lowering friction.",
    },
    {
      icon: LuAward,
      title: "Coach Accountability Radar",
      description:
        "Your coaching dashboard ranks athletes by 14-day compliance scores, highlighting who needs motivation before they fall off.",
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
          <IconBadge text="BEHAVIORAL ARCHITECTURE" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6"
        >
          Turn daily micro-actions into <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            permanent lifestyle change.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-3xl leading-relaxed mb-8"
        >
          Workouts only account for 3% of your client's week. Uplift empowers
          coaches to guide the other 97% through frictionless habit tracking,
          gamified streaks, and seamless wearable integration.
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
              text="Start Coaching Habits"
              variant="green"
              className="py-2.5 px-5 font-semibold shadow-md"
            />
          </Link>
          <Link href="/features">
            <CustomButton
              text="Explore All Features"
              variant="outline"
              className="py-2.5 px-5 font-medium"
            />
          </Link>
        </motion.div>
      </section>

      {/* Interactive Daily Habit Tracker */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <div className="bg-[#04441E] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#8EFF0A]/20 text-[#8EFF0A] px-3 py-1 rounded-full mb-3">
                <LuSparkles className="w-3.5 h-3.5" /> Interactive Athlete App View
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Daily Habit Rituals (Today)
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Tap any checkbox to test live streak progression and compliance
                calculation
              </p>
            </div>

            {/* Score Ring Display */}
            <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/10 self-start md:self-auto">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8EFF0A]">
                  {completionPercentage}%
                </div>
                <div className="text-xs text-white/70">
                  {completedCount} of {habits.length} Completed
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-[#8EFF0A]/30 border-t-[#8EFF0A] animate-spin-slow flex items-center justify-center font-bold text-xs">
                <LuFlame className="w-6 h-6 text-[#8EFF0A]" />
              </div>
            </div>
          </div>

          {/* Habit Checklist */}
          <div className="mt-8 space-y-3">
            {habits.map((habit) => {
              const Icon = habit.icon;
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                    habit.completed
                      ? "bg-white/10 border-[#8EFF0A]/40 shadow-sm"
                      : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        habit.completed
                          ? "bg-[#8EFF0A] text-[#191919]"
                          : "border-2 border-white/40 hover:border-white"
                      }`}
                    >
                      {habit.completed && <LuCheck className="w-4 h-4 stroke-[3]" />}
                    </button>
                    <div>
                      <div
                        className={`text-sm sm:text-base font-semibold transition-all ${
                          habit.completed
                            ? "text-white line-through opacity-85"
                            : "text-white"
                        }`}
                      >
                        {habit.title}
                      </div>
                      <div className="text-xs text-white/50 flex items-center gap-2 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-[#8EFF0A]" />
                        <span>{habit.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                    <LuFlame className="w-4 h-4 text-[#8EFF0A]" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {habit.streak}d streak
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <IconBadge text="COACHING FEATURES" />
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#232323] mt-4 mb-3">
            Why Uplift habits drive real compliance
          </h2>
          <p className="text-sm sm:text-base text-[#4F4F4F]">
            Built with behavioral science principles to convert temporary motivation
            into permanent identity.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {habitFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardItem}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200/80 hover:border-[#04441E]/40 transition-all hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4F4F4F] text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
