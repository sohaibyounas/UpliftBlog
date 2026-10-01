"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  LuSearch,
  LuStar,
  LuAward,
  LuCheck,
  LuMapPin,
  LuCalendar,
  LuUserCheck,
  LuSparkles,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const coaches = [
  {
    id: 1,
    name: "Elena Rostova, CSCS",
    role: "Head Strength & Olympic Weightlifting Coach",
    specialty: "Hypertrophy & Strength",
    rating: 4.98,
    reviews: 142,
    location: "Austin, TX (Remote)",
    experience: "9 years",
    rate: "$280/mo",
    bio: "Former national lifter specializing in biomechanics, bar velocity analysis, and bulletproof joint longevity.",
    tags: ["Powerlifting", "Periodization", "Mobility"],
  },
  {
    id: 2,
    name: "Marcus Vance, MS, CISSN",
    role: "Clinical Sports Nutritionist & Coach",
    specialty: "Fat Loss & Conditioning",
    rating: 4.96,
    reviews: 189,
    location: "Miami, FL (Remote)",
    experience: "11 years",
    rate: "$320/mo",
    bio: "Metabolic health specialist helping high-performing executives lean down without crash dieting or energy dips.",
    tags: ["Macros", "Metabolic Health", "Habits"],
  },
  {
    id: 3,
    name: "Darius Sterling, PES",
    role: "Combat Sports & Field Athlete Specialist",
    specialty: "Athletic Performance",
    rating: 4.99,
    reviews: 97,
    location: "Denver, CO (Remote)",
    experience: "8 years",
    rate: "$300/mo",
    bio: "Prepares collegiate and professional athletes for peak power output, rotational force, and injury resistance.",
    tags: ["Plyometrics", "Sprint Mechanics", "Recovery"],
  },
  {
    id: 4,
    name: "Sarah Chen-Miller, PT, DPT",
    role: "Post-Rehab & Corrective Exercise Specialist",
    specialty: "Rehabilitation & Longevity",
    rating: 5.0,
    reviews: 215,
    location: "Seattle, WA (Remote)",
    experience: "12 years",
    rate: "$350/mo",
    bio: "Doctor of Physical Therapy bridging the gap between clinical rehab discharge and return to heavy compound lifting.",
    tags: ["Post-Op", "Low Back Health", "Longevity"],
  },
  {
    id: 5,
    name: "Liam O'Connor, UKSCA",
    role: "Hypertrophy & Body Composition Architect",
    specialty: "Hypertrophy & Strength",
    rating: 4.94,
    reviews: 130,
    location: "London, UK (Remote)",
    experience: "7 years",
    rate: "£240/mo",
    bio: "Science-backed hypertrophy programming tailored for natural trainees seeking maximum muscular development.",
    tags: ["Hypertrophy", "Form Auditing", "RPE"],
  },
  {
    id: 6,
    name: "Amara Ndiaye",
    role: "Endurance & Hybrid Athlete Coach",
    specialty: "Athletic Performance",
    rating: 4.97,
    reviews: 84,
    location: "San Diego, CA (Remote)",
    experience: "6 years",
    rate: "$260/mo",
    bio: "Ultra-marathoner and CrossFit athlete helping everyday trainees build elite aerobic capacity while keeping muscle mass.",
    tags: ["Zone 2", "VO2 Max", "Hybrid Training"],
  },
];

const specialties = [
  "All Specialties",
  "Hypertrophy & Strength",
  "Fat Loss & Conditioning",
  "Athletic Performance",
  "Rehabilitation & Longevity",
];

export default function FindACoachPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookedCoach, setBookedCoach] = useState(null);

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" ||
      coach.specialty === selectedSpecialty;
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-12 pb-14 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex justify-center mb-4"
        >
          <IconBadge text="VERIFIED COACH DIRECTORY" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Match with vetted, world-class <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            fitness and nutrition coaches.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Every coach in our ecosystem uses Uplift's software to deliver 1-on-1
          personalized programming, video check-ins, and biometric tracking.
        </motion.p>

        {/* Search & Filter Bar */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <LuSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, credentials (CSCS, DPT), or goals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-4 py-4 rounded-full border border-gray-200 bg-[#FAFAFA] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#04441E] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSpecialty === spec
                    ? "bg-[#04441E] text-[#8EFF0A] shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Cards Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCoaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={cardItem}
              className="bg-white rounded-3xl border border-gray-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#04441E]/40 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#04441E] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-[#04441E]">
                      {coach.rate}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold justify-end">
                      <LuStar className="w-3.5 h-3.5 fill-current" />
                      <span>{coach.rating}</span>
                      <span className="text-gray-400 font-normal">
                        ({coach.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#232323] leading-snug">
                  {coach.name}
                </h3>
                <div className="text-xs font-semibold text-[#04441E] mb-2">
                  {coach.role}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1">
                    <LuMapPin className="w-3.5 h-3.5" /> {coach.location}
                  </span>
                  <span>•</span>
                  <span>{coach.experience} exp</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {coach.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {coach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setBookedCoach(coach.name)}
                  className="w-full py-3 bg-[#04441E] hover:bg-[#065b29] text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <LuCalendar className="w-4 h-4 text-[#8EFF0A]" />
                  Book Initial Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking Feedback Modal */}
      <AnimatePresence>
        {bookedCoach && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-emerald-100 text-[#04441E] rounded-full flex items-center justify-center mx-auto mb-4">
                <LuUserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-2">
                Consultation Request Sent!
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                <strong>{bookedCoach}</strong> has been notified on their Uplift
                coach dashboard and will review your profile to schedule your
                introductory call.
              </p>
              <button
                onClick={() => setBookedCoach(null)}
                className="w-full py-3 bg-[#04441E] text-white font-bold rounded-full text-sm hover:bg-[#065b29] transition-all cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Join as Coach Banner */}
      <section className="bg-[#FAFAFA] border-t border-gray-200 py-16 px-4 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <IconBadge text="FOR CERTIFIED COACHES" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mt-3 mb-2">
            Are you an exceptional coach?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Join the Uplift verified coach directory to receive qualified athlete
            inquiries, manage your roster with state-of-the-art tools, and scale
            your revenue.
          </p>
          <Link href="/pricing">
            <CustomButton
              text="Apply to Directory"
              variant="green"
              className="py-2.5 px-6 font-semibold"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
