"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LuHandshake,
  LuSparkles,
  LuPercent,
  LuCpu,
  LuDumbbell,
  LuGraduationCap,
  LuCircleCheck,
  LuArrowRight,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const partnerTypes = [
  {
    icon: LuPercent,
    title: "Coach Affiliates & Creators",
    tag: "30% Lifetime Rev-Share",
    description:
      "Recommend Uplift to your fellow trainers, fitness mastermind peers, or YouTube audience and earn 30% recurring monthly software commission on every referred subscription forever.",
  },
  {
    icon: LuCpu,
    title: "Wearables & Health Tech",
    tag: "Bidirectional APIs",
    description:
      "Direct API integration for continuous heart rate, HRV recovery, sleep cycle, and GPS workout logging. Our developer SDK handles fast, private syncing.",
  },
  {
    icon: LuDumbbell,
    title: "Equipment & Apparel Brands",
    tag: "In-App Product Showcases",
    description:
      "Coaches can tag your barbells, resistance bands, and recovery tools inside their exercise programming routines with customized affiliate links.",
  },
  {
    icon: LuGraduationCap,
    title: "Certifications & Academies",
    tag: "Education Discounts",
    description:
      "Partner with Uplift to provide NASM, NSCA, and CSCS certified graduates with free student licenses and accredited continuing education units (CEUs).",
  },
];

const tiers = [
  {
    tier: "Affiliate Partner",
    commission: "30% Recurring",
    payout: "Monthly PayPal / Wire",
    benefits: [
      "Custom tracking referral link",
      "90-day cookie window",
      "Real-time partner dashboard",
      "Social media promo asset pack",
    ],
  },
  {
    tier: "Technology Partner",
    commission: "Co-Marketing & Integrations",
    payout: "Shared Revenue",
    benefits: [
      "Full GraphQL & REST API access",
      "Dedicated developer sandbox",
      "Joint press release and newsletter feature",
      "Direct in-app app store listing",
    ],
  },
  {
    tier: "Education & Gym Partner",
    commission: "Institutional Pricing",
    payout: "Volume Rebates",
    benefits: [
      "Co-branded coach training portal",
      "Exclusive 25% discount for students/trainers",
      "Curriculum integration assistance",
      "Priority VIP phone support",
    ],
  },
];

export default function PartnersPage() {
  const [applied, setApplied] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    email: "",
    org: "",
    type: "Coach Affiliate & Creator",
  });

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
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
          <IconBadge text="PARTNER ECOSYSTEM" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Grow your brand with the <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            Uplift coaching network.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Join hundreds of creators, wearable manufacturers, fitness certifications,
          and gym brands who partner with Uplift to empower modern trainers.
        </motion.p>
      </section>

      {/* 4 Partner Categories */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {partnerTypes.map((partner) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.title}
                variants={cardItem}
                className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-200 hover:border-[#04441E]/40 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#04441E] bg-[#8EFF0A]/20 px-3 py-1 rounded-full">
                    {partner.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-2">
                  {partner.title}
                </h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Tier Breakdown */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <IconBadge text="PARTNER TIERS" />
          <h2 className="text-2xl sm:text-4xl font-bold text-[#232323] mt-3 mb-2">
            Clear, transparent collaboration models
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Choose the partnership structure that best matches your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className="bg-white rounded-3xl border border-gray-200 p-7 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-[#232323] mb-1">
                  {t.tier}
                </h3>
                <div className="text-sm font-semibold text-[#04441E] mb-4">
                  {t.commission}
                </div>
                <div className="text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100">
                  Payout Schedule: {t.payout}
                </div>

                <div className="space-y-3">
                  {t.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                    >
                      <LuCircleCheck className="w-4 h-4 text-[#04441E] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="bg-[#032B13] text-white py-20 px-4 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Apply Now
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-2">
              Join the Uplift Partner Network
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Applications are reviewed within 2 business days by our partnership leads.
            </p>
          </div>

          <div className="bg-white text-[#232323] rounded-3xl p-8 sm:p-12 shadow-2xl">
            {applied ? (
              <div className="text-center py-8">
                <LuCircleCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#232323] mb-2">
                  Partner Application Submitted!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong>{partnerForm.name}</strong>. Our partner director
                  will contact <strong>{partnerForm.email}</strong> with your unique
                  onboarding pack.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Parker"
                      value={partnerForm.name}
                      onChange={(e) =>
                        setPartnerForm({ ...partnerForm, name: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={partnerForm.email}
                      onChange={(e) =>
                        setPartnerForm({ ...partnerForm, email: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Organization / Brand Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Peak Fitness Media"
                      value={partnerForm.org}
                      onChange={(e) =>
                        setPartnerForm({ ...partnerForm, org: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Partnership Category
                    </label>
                    <select
                      value={partnerForm.type}
                      onChange={(e) =>
                        setPartnerForm({ ...partnerForm, type: e.target.value })
                      }
                      className="w-full p-3.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                    >
                      <option>Coach Affiliate & Creator</option>
                      <option>Wearable / Hardware Technology API</option>
                      <option>Equipment & Supplement Brand</option>
                      <option>Certification Academy & Education</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#04441E] hover:bg-[#065b29] text-white font-bold rounded-full text-base transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <LuHandshake className="w-5 h-5 text-[#8EFF0A]" />
                  Submit Partnership Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
