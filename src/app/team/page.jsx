"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  LuSparkles,
  LuLinkedin,
  LuTwitter,
  LuAward,
  LuHeartHandshake,
  LuCompass,
  LuShieldCheck,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const teamMembers = [
  {
    name: "Devon Sinclair",
    role: "Founder & Chief Executive Officer",
    credential: "Ex-Division 1 Decathlete",
    bio: "Former collegiate decathlete turned software architect. Spent 7 years scaling SaaS platforms before founding Uplift to solve coach administrative burnout.",
  },
  {
    name: "Dr. Maya Lin, PhD, CSCS",
    role: "Chief Exercise Scientist & Head of Physiology",
    credential: "PhD in Biomechanics (Stanford)",
    bio: "Publishes peer-reviewed research on periodization, neuromuscular fatigue, and velocity-based training. Oversees Uplift's algorithmic load progression engine.",
  },
  {
    name: "Julian Alvarez",
    role: "VP of Product & Engineering",
    credential: "Ex-Stripe Infrastructure Lead",
    bio: "Deep systems engineer who led high-concurrency payment APIs at Stripe. Passionate about sub-50ms offline database sync and elegant mobile UI.",
  },
  {
    name: "Sienna Brooks",
    role: "Head of Coach Community & Experience",
    credential: "CSCS, 12-Year Private Gym Owner",
    bio: "Scaled a private gym to 350+ members before shifting to coach education. Leads Uplift's white-glove onboarding and concierge migration program.",
  },
  {
    name: "Kenji Sato",
    role: "Lead Mobile Architect (iOS / Android)",
    credential: "Senior Mobile Engineer",
    bio: "Crafted workout logging engines with millisecond-exact audio timers, background haptics, and multi-sensor Bluetooth gym hardware integration.",
  },
  {
    name: "Rochelle Duprès",
    role: "Head of Brand & Design Systems",
    credential: "Former Lead Product Designer",
    bio: "Creates digital spaces that feel physical and tactile. Believes sports software should look as refined as a high-end luxury mechanical timepiece.",
  },
];

const values = [
  {
    icon: LuHeartHandshake,
    title: "Coach-Obsessed Empathy",
    description:
      "We test our own software on the gym floor every morning. If a feature causes friction during a 5 AM training session, it doesn't ship.",
  },
  {
    icon: LuAward,
    title: "Scientific Rigor Over Trends",
    description:
      "We ground every workout builder metric in verified exercise science and clinical kinesiology, not fitness fads or short-lived hype.",
  },
  {
    icon: LuCompass,
    title: "Craftsmanship in the Micro-Details",
    description:
      "From tactile haptics when logging a PR set to sub-second offline sync, we obsess over the details that make athletes smile.",
  },
  {
    icon: LuShieldCheck,
    title: "Uncompromising Data Trust",
    description:
      "Your athlete's health metrics, body composition photos, and payment history are private and secured with enterprise-grade encryption.",
  },
];

export default function TeamPage() {
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
          <IconBadge text="LEADERSHIP & TALENT" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          The athletes, scientists, and engineers <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            building the future of coaching.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed"
        >
          We are coaches, lifters, marathoners, and software artisans united by a
          single mission: providing trainers with the most powerful digital tools
          on earth.
        </motion.p>
      </section>

      {/* Team Cards Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardItem}
              className="bg-[#FAFAFA] rounded-3xl p-7 border border-gray-200 hover:border-[#04441E]/40 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#04441E] text-[#8EFF0A] font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-[11px] font-semibold bg-emerald-100 text-[#04441E] px-2.5 py-1 rounded-full">
                  {member.credential}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#232323] mb-1">
                {member.name}
              </h3>
              <div className="text-xs font-semibold text-[#04441E] mb-4">
                {member.role}
              </div>
              <p className="text-sm text-[#4F4F4F] leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80 text-gray-500">
                <a
                  href="#"
                  className="hover:text-[#04441E] transition-colors p-1.5 hover:bg-gray-200 rounded-lg"
                  aria-label="LinkedIn Profile"
                >
                  <LuLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="hover:text-[#04441E] transition-colors p-1.5 hover:bg-gray-200 rounded-lg"
                  aria-label="Twitter Profile"
                >
                  <LuTwitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-[#032B13] text-white py-20 px-4 sm:px-12">
        <div className="mx-auto max-w-6xl xl:max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              WHAT DRIVES US
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">
              Values forged on the lifting platform
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              The non-negotiable principles that guide every feature we release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#8EFF0A] text-[#191919] flex items-center justify-center mb-6 font-bold shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {val.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
