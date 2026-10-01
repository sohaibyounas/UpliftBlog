"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  LuDumbbell,
  LuPlay,
  LuTimer,
  LuTrendingUp,
  LuCircleCheck,
  LuRepeat,
  LuFlame,
  LuLayers,
  LuPlus,
  LuSparkles,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const sampleWorkouts = {
  day1: {
    title: "Upper Body Hypertrophy & Power",
    focus: "Chest, Lats & Delts",
    duration: "52 min",
    exercises: [
      {
        name: "Incline Barbell Bench Press",
        category: "Chest",
        sets: 4,
        reps: "8-10",
        tempo: "3-1-0",
        rpe: "8.5",
        rest: "90s",
      },
      {
        name: "Neutral Grip Weighted Pull-Up",
        category: "Back",
        sets: 4,
        reps: "6-8",
        tempo: "2-0-1",
        rpe: "8.0",
        rest: "90s",
      },
      {
        name: "Standing Dumbbell Lateral Raise",
        category: "Shoulders",
        sets: 3,
        reps: "12-15",
        tempo: "2-1-2",
        rpe: "9.0",
        rest: "60s",
      },
      {
        name: "Cable Overhead Tricep Extension",
        category: "Arms",
        sets: 3,
        reps: "10-12",
        tempo: "3-0-1",
        rpe: "8.5",
        rest: "60s",
      },
    ],
  },
  day2: {
    title: "Lower Body Force & Posterior Chain",
    focus: "Quads, Hamstrings & Glutes",
    duration: "58 min",
    exercises: [
      {
        name: "Safety Bar Squat",
        category: "Quads",
        sets: 4,
        reps: "5-6",
        tempo: "3-1-0",
        rpe: "8.5",
        rest: "120s",
      },
      {
        name: "Romanian Deadlift (Dumbbell)",
        category: "Hamstrings",
        sets: 3,
        reps: "8-10",
        tempo: "3-0-1",
        rpe: "8.0",
        rest: "90s",
      },
      {
        name: "Bulgarian Split Squat",
        category: "Glutes/Quads",
        sets: 3,
        reps: "10/leg",
        tempo: "2-0-1",
        rpe: "9.0",
        rest: "60s",
      },
      {
        name: "Seated Calf Raise",
        category: "Calves",
        sets: 4,
        reps: "15",
        tempo: "2-2-1",
        rpe: "8.5",
        rest: "45s",
      },
    ],
  },
  day3: {
    title: "Full Body Density & Metabolic Conditioning",
    focus: "Full Body & Core",
    duration: "45 min",
    exercises: [
      {
        name: "Barbell Hang Clean",
        category: "Power",
        sets: 5,
        reps: "3",
        tempo: "Explosive",
        rpe: "8.0",
        rest: "90s",
      },
      {
        name: "Kettlebell Walking Lunge",
        category: "Lower",
        sets: 3,
        reps: "12/side",
        tempo: "Continuous",
        rpe: "8.5",
        rest: "60s",
      },
      {
        name: "Renegade Row into Push-Up",
        category: "Upper/Core",
        sets: 3,
        reps: "10",
        tempo: "Controlled",
        rpe: "9.0",
        rest: "60s",
      },
      {
        name: "Hanging Leg Raise",
        category: "Core",
        sets: 3,
        reps: "15",
        tempo: "2-1-1",
        rpe: "9.5",
        rest: "45s",
      },
    ],
  },
};

const pillars = [
  {
    icon: LuDumbbell,
    title: "1,400+ HD Exercise Library",
    description:
      "Crystal-clear multi-angle 4K movement tutorials with customizable form cues, muscle activation charts, and coach notes.",
    tag: "Library",
  },
  {
    icon: LuLayers,
    title: "Periodization & Block Planner",
    description:
      "Build multi-week mesocycles with automated volume ramping, deload scheduling, and RPE/percentage progressions in clicks.",
    tag: "Engine",
  },
  {
    icon: LuTimer,
    title: "Dynamic Rest & Supersets",
    description:
      "Combine exercises into antagonist supersets, tri-sets, or timed AMRAP circuits with automatic rest countdowns on client devices.",
    tag: "Flexibility",
  },
  {
    icon: LuTrendingUp,
    title: "Automated 1RM & Volume Analytics",
    description:
      "Track tonnage lifted, estimated one-rep max improvements, and velocity across weeks without maintaining complex spreadsheets.",
    tag: "Analytics",
  },
];

export default function TrainingPage() {
  const [activeDay, setActiveDay] = useState("day1");
  const workout = sampleWorkouts[activeDay];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-12 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex justify-start mb-4"
        >
          <IconBadge text="WORKOUT PROGRAMMING" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6"
        >
          Programming engineered for <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            elite coaches & athletes.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-3xl leading-relaxed mb-8"
        >
          Design precision strength and conditioning programs in seconds. Combine
          periodized mesocycles, video-guided exercise drills, and live client
          feedback inside one intuitive workspace.
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
              text="Start 14-Day Free Trial"
              variant="green"
              className="py-2.5 px-5 font-semibold shadow-md hover:shadow-lg"
            />
          </Link>
          <Link href="/watch-a-demo">
            <CustomButton
              text="Watch Interactive Tour"
              variant="outline"
              className="py-2.5 px-5 font-medium"
            />
          </Link>
        </motion.div>
      </section>

      {/* Interactive Workout Builder Preview */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <div className="bg-[#032B13] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-900/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-semibold uppercase tracking-wider mb-2">
                <LuSparkles className="w-3.5 h-3.5" /> Interactive Coach Preview
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Live Workout Builder
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Click a training day to view periodized exercise parameters
              </p>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
              {Object.keys(sampleWorkouts).map((dayKey, idx) => (
                <button
                  key={dayKey}
                  onClick={() => setActiveDay(dayKey)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeDay === dayKey
                      ? "bg-[#8EFF0A] text-[#191919] font-bold shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {workout.title}
                  </h3>
                  <p className="text-sm text-[#8EFF0A]">
                    Target: {workout.focus}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-white/80">
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                    <LuTimer className="w-4 h-4 text-[#8EFF0A]" /> {workout.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                    <LuFlame className="w-4 h-4 text-[#8EFF0A]" /> 4 Exercises
                  </span>
                </div>
              </div>

              {/* Exercises Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 text-xs uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Exercise</th>
                      <th className="pb-3 font-semibold">Muscle Group</th>
                      <th className="pb-3 font-semibold text-center">Sets</th>
                      <th className="pb-3 font-semibold text-center">Target Reps</th>
                      <th className="pb-3 font-semibold text-center">Tempo</th>
                      <th className="pb-3 font-semibold text-center">Target RPE</th>
                      <th className="pb-3 font-semibold text-right">Rest</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {workout.exercises.map((item, index) => (
                      <tr
                        key={item.name}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="py-4 font-semibold text-white flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <span>{item.name}</span>
                        </td>
                        <td className="py-4 text-white/70">{item.category}</td>
                        <td className="py-4 text-center font-bold text-[#8EFF0A]">
                          {item.sets}
                        </td>
                        <td className="py-4 text-center text-white/90">
                          {item.reps}
                        </td>
                        <td className="py-4 text-center text-white/70 font-mono text-xs">
                          {item.tempo}
                        </td>
                        <td className="py-4 text-center text-white/90">
                          <span className="bg-white/10 px-2 py-0.5 rounded text-xs">
                            @{item.rpe}
                          </span>
                        </td>
                        <td className="py-4 text-right text-white/70">
                          {item.rest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Feature Pillars Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <IconBadge text="SYSTEM PILLARS" />
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#232323] mt-4 mb-3">
            Every tool required to coach with authority
          </h2>
          <p className="text-sm sm:text-base text-[#4F4F4F]">
            Designed by certified strength coaches who understand real gym floor
            demands and online athlete workflows.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardItem}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200/70 hover:border-[#04441E]/30 transition-all hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#8EFF0A]/20 text-[#04441E] mb-3">
                  {pillar.tag}
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#4F4F4F] text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#04441E] py-16 text-white my-12">
        <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-[#8EFF0A] mb-2">
                2.8M+
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium">
                Workouts Completed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-[#8EFF0A] mb-2">
                1,400+
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium">
                HD Exercise Demos
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-[#8EFF0A] mb-2">
                99.2%
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium">
                Client Adherence Rate
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-[#8EFF0A] mb-2">
                4.2 hrs
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium">
                Saved Per Coach / Wk
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
