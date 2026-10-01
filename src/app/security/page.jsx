"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  LuShieldCheck,
  LuLock,
  LuServer,
  LuActivity,
  LuCircleCheck,
  LuBug,
  LuKey,
  LuHardDrive,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const securityFeatures = [
  {
    icon: LuLock,
    title: "End-to-End Encryption",
    description:
      "All client communications, check-in photos, and biometric data are encrypted in transit using TLS 1.3 and at rest with AES-256.",
  },
  {
    icon: LuShieldCheck,
    title: "SOC 2 Type II Certified",
    description:
      "Annually audited by independent third-party CPA auditors across security, availability, and confidentiality trust principles.",
  },
  {
    icon: LuKey,
    title: "Role-Based Access Control",
    description:
      "Multi-tenant data isolation ensures coaches only access athletes assigned to their specific roster or gym franchise location.",
  },
  {
    icon: LuHardDrive,
    title: "Automated Off-Site Backups",
    description:
      "Continuous point-in-time database snapshots stored redundantly across geographically separated tier-IV data centers.",
  },
];

export default function SecurityPage() {
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
          <IconBadge text="TRUST & COMPLIANCE" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Bank-grade security for your athletes' <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            most sensitive physical data.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Coaches trust Uplift with their business livelihood and clients'
          progress photos. We defend that trust with enterprise-grade
          infrastructure, rigorous audits, and 99.99% reliability.
        </motion.p>

        {/* Live Operational Status Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-semibold text-emerald-900 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          All Uplift Production Systems Operational (99.99% 90-Day Uptime)
        </div>
      </section>

      {/* Security Pillars */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {securityFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={cardItem}
                className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-200 hover:border-[#04441E]/40 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Bug Bounty & Responsible Disclosure */}
      <section className="bg-[#032B13] text-white py-20 px-4 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <LuBug className="w-12 h-12 text-[#8EFF0A] mx-auto mb-4" />
          <span className="bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Vulnerability Program
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">
            Responsible Disclosure & Bug Bounty
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8">
            We value the vital role independent security researchers play in
            safeguarding the internet. If you discover a vulnerability, please
            report it promptly to our security engineering team.
          </p>
          <a
            href="mailto:security@upliftapp.com?subject=Responsible Disclosure Report"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#8EFF0A] text-[#191919] font-bold rounded-full text-sm hover:bg-[#7ce600] transition-all shadow-lg"
          >
            Submit Security Finding to security@upliftapp.com
          </a>
        </div>
      </section>
    </div>
  );
}
