"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  LuPlay,
  LuPause,
  LuSparkles,
  LuCalendar,
  LuClock,
  LuCircleCheck,
  LuShieldCheck,
  LuVolume2,
  LuMaximize2,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp } from "@/hooks/animations";

const chapters = [
  {
    id: 1,
    title: "1. Coach Dashboard & Roster",
    timestamp: "0:00 - 2:15",
    desc: "How coaches organize 100+ athletes into training tiers and spot missing check-ins in seconds.",
  },
  {
    id: 2,
    title: "2. The Drag-and-Drop Builder",
    timestamp: "2:15 - 4:40",
    desc: "Speed demonstration assembling a 4-week hypertrophy block with RPE targets and rest intervals.",
  },
  {
    id: 3,
    title: "3. Automated Video Check-Ins",
    timestamp: "4:40 - 6:30",
    desc: "Weekly reviews, pose-matched progress photos, and sending 30-second coach voice memos.",
  },
  {
    id: 4,
    title: "4. Client Mobile App Flow",
    timestamp: "6:30 - 8:45",
    desc: "The exact interface your athletes see when hitting PRs, tracking sets, and logging habits.",
  },
];

export default function WatchADemoPage() {
  const [activeChapter, setActiveChapter] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rosterSize: "11-50 clients",
    date: "",
  });

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setBookingSuccess(true);
  };

  const current = chapters.find((c) => c.id === activeChapter);

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
          <IconBadge text="GUIDED DEMO" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6"
        >
          Experience Uplift in action. <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            Take the 8-minute platform tour.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-3xl leading-relaxed mb-8"
        >
          Watch how top fitness coaches save 15+ hours weekly while delivering a
          luxurious training experience that commands $250+/month per client.
        </motion.p>
      </section>

      {/* Video Mockup + Chapter Selector */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Screen */}
          <div className="lg:col-span-8 bg-[#02230F] rounded-3xl overflow-hidden border border-emerald-800 shadow-2xl relative">
            <div className="aspect-video relative flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              {/* Top Controls */}
              <div className="flex justify-between items-center z-10">
                <span className="bg-[#8EFF0A]/20 backdrop-blur-md border border-[#8EFF0A]/40 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {current.timestamp}
                </span>
                <span className="text-white/80 text-xs font-semibold">
                  1080p 60fps HD
                </span>
              </div>

              {/* Center Play Overlay */}
              <div className="text-center z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#8EFF0A] text-[#191919] flex items-center justify-center mx-auto shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                >
                  {isPlaying ? (
                    <LuPause className="w-8 h-8 fill-current" />
                  ) : (
                    <LuPlay className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>
                <div className="text-white text-base sm:text-xl font-bold mt-4 drop-shadow-md">
                  {current.title}
                </div>
                <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto mt-1">
                  {current.desc}
                </p>
              </div>

              {/* Bottom Scrubber */}
              <div className="space-y-2 z-10">
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8EFF0A] transition-all duration-300"
                    style={{ width: `${activeChapter * 25}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <LuVolume2 className="w-3.5 h-3.5" /> High Definition Audio
                  </span>
                  <span className="flex items-center gap-1">
                    <LuMaximize2 className="w-3.5 h-3.5" /> Fullscreen Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Selector */}
          <div className="lg:col-span-4 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-[#232323] mb-4">
              Tour Chapters
            </h3>
            <div className="space-y-3">
              {chapters.map((chap) => {
                const isActive = activeChapter === chap.id;
                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      setActiveChapter(chap.id);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#04441E] text-white border-[#04441E] shadow-md"
                        : "bg-white text-[#232323] border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-xs font-bold ${
                          isActive ? "text-[#8EFF0A]" : "text-gray-500"
                        }`}
                      >
                        {chap.timestamp}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#8EFF0A] animate-ping" />
                      )}
                    </div>
                    <div className="font-bold text-sm sm:text-base leading-snug">
                      {chap.title}
                    </div>
                    <div
                      className={`text-xs mt-1 leading-relaxed ${
                        isActive ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {chap.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Book a 1-on-1 VIP Walkthrough */}
      <section className="bg-[#032B13] text-white py-20 px-4 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Personalized Demo
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">
              Prefer a live 1-on-1 with an onboarding specialist?
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              We will import your actual exercise programs, audit your current
              stack, and show you exactly how Uplift scales your roster.
            </p>
          </div>

          <div className="bg-white text-[#232323] rounded-3xl p-8 sm:p-12 shadow-2xl">
            {bookingSuccess ? (
              <div className="text-center py-8">
                <LuCircleCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#232323] mb-2">
                  Demo Scheduled Successfully!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  We've sent a calendar invite to <strong>{formData.email}</strong>.
                  Our product lead will see you then!
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Coach Marcus Vance"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Work / Coaching Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@vanceperformance.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Current Athlete Count
                    </label>
                    <select
                      value={formData.rosterSize}
                      onChange={(e) =>
                        setFormData({ ...formData, rosterSize: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    >
                      <option>1-10 clients</option>
                      <option>11-50 clients</option>
                      <option>51-150 clients</option>
                      <option>150+ clients (Enterprise / Gym)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Target Implementation Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#04441E] text-white hover:bg-[#065b29] font-bold rounded-full text-base transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <LuCalendar className="w-5 h-5 text-[#8EFF0A]" />
                  Schedule VIP Platform Walkthrough
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
