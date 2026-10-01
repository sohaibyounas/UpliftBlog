"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  LuBriefcase,
  LuGlobe,
  LuHeart,
  LuSparkles,
  LuLaptop,
  LuPlane,
  LuDumbbell,
  LuCircleCheck,
  LuArrowRight,
  LuX,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const perks = [
  {
    icon: LuGlobe,
    title: "100% Remote & Autonomous",
    description: "Work from anywhere in the world on your own circadian rhythm.",
  },
  {
    icon: LuDumbbell,
    title: "$3,500 Annual Fitness Stipend",
    description: "Covers gym memberships, supplements, coaching, or race entries.",
  },
  {
    icon: LuPlane,
    title: "Quarterly Team Retreats",
    description: "Past meetups include Banff, Lisbon, and Costa Rica for training & strategy.",
  },
  {
    icon: LuLaptop,
    title: "$2,000 Tech & Home Setup",
    description: "Latest M-series MacBook Pro and ergonomic workstation allowance.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer (Next.js & Turbopack)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$150,000 - $185,000 + Equity",
    description:
      "Scale our high-performance Next.js web application and real-time workout building engines.",
  },
  {
    id: 2,
    title: "Senior React Native Mobile Engineer",
    department: "Engineering",
    location: "Remote (US / Canada / Europe)",
    type: "Full-Time",
    salary: "$145,000 - $180,000 + Equity",
    description:
      "Craft world-class offline-first mobile experiences and Bluetooth sensor integrations for iOS & Android.",
  },
  {
    id: 3,
    title: "Staff Product Designer (Design Systems)",
    department: "Product & Design",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$135,000 - $165,000 + Equity",
    description:
      "Spearhead our athletic design tokens, micro-animations, and coach workflow ergonomics.",
  },
  {
    id: 4,
    title: "Head of Performance Marketing & Growth",
    department: "Marketing",
    location: "Remote (US / Americas)",
    type: "Full-Time",
    salary: "$140,000 - $170,000 + Bonus",
    description:
      "Lead creator partnerships, paid acquisition channels, and coach ambassador communities.",
  },
  {
    id: 5,
    title: "Coach Success Specialist (CSCS Required)",
    department: "Customer Success",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$75,000 - $95,000 + Equity",
    description:
      "Train new coaches, facilitate concierge data migrations from spreadsheets, and champion coach product feedback.",
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicant, setApplicant] = useState({ name: "", email: "", portfolio: "" });

  const departments = ["All", "Engineering", "Product & Design", "Marketing", "Customer Success"];

  const filteredJobs =
    selectedDept === "All"
      ? jobs
      : jobs.filter((j) => j.department === selectedDept);

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setActiveJob(null);
      setApplicant({ name: "", email: "", portfolio: "" });
    }, 2500);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-12 pb-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex justify-center mb-4"
        >
          <IconBadge text="CAREERS AT UPLIFT" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Build the operating system for <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            human performance.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          We're empowering independent fitness coaches to run high-earning,
          sustainable careers. Join a tight-knit team of craftspeople building
          the best fitness software in the world.
        </motion.p>
      </section>

      {/* Perks Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#04441E] bg-[#8EFF0A]/30 px-3 py-1 rounded-full">
            Life at Uplift
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mt-3">
            Benefits tailored for athletes and makers
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                variants={cardItem}
                className="bg-[#FAFAFA] p-6 rounded-3xl border border-gray-200 hover:border-[#04441E]/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#232323] text-base mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {perk.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Open Roles Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-12 pb-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#232323]">
              Open Opportunities ({filteredJobs.length})
            </h2>
            <p className="text-sm text-gray-500">
              Apply directly — no automated resume screeners. Every application is read by our founders.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-full">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#04441E] text-[#8EFF0A] shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-7 hover:border-[#04441E]/40 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#04441E] bg-[#8EFF0A]/20 px-2.5 py-0.5 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs text-gray-500">{job.location}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs font-medium text-gray-600">
                    {job.salary}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#232323]">{job.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setActiveJob(job)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#04441E] hover:bg-[#065b29] text-white font-semibold text-sm rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
                >
                  Apply Role <LuArrowRight className="w-4 h-4 text-[#8EFF0A]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setActiveJob(null)}
                className="absolute right-5 top-5 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <LuX className="w-5 h-5" />
              </button>

              {applied ? (
                <div className="text-center py-10">
                  <LuCheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thanks for applying for <strong>{activeJob.title}</strong>. Our
                    hiring team will review your background and respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-[#04441E] bg-[#8EFF0A]/30 px-2.5 py-0.5 rounded-full">
                      {activeJob.department}
                    </span>
                    <h3 className="text-xl font-bold text-[#232323] mt-2">
                      Apply: {activeJob.title}
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={applicant.name}
                      onChange={(e) =>
                        setApplicant({ ...applicant, name: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={applicant.email}
                      onChange={(e) =>
                        setApplicant({ ...applicant, email: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      LinkedIn / GitHub / Portfolio Link
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      value={applicant.portfolio}
                      onChange={(e) =>
                        setApplicant({ ...applicant, portfolio: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#04441E] text-white hover:bg-[#065b29] font-bold rounded-full text-sm transition-all shadow-md cursor-pointer mt-4"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
