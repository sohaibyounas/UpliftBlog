"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuFileText, LuShieldAlert, LuClock, LuScale } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import { fadeUp } from "@/hooks/animations";

export default function TermsPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <section className="bg-[#FAFAFA] border-b border-gray-200 py-16 px-4 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex justify-center mb-4"
          >
            <IconBadge text="LEGAL GOVERNANCE" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-[#232323] tracking-tight mb-4"
          >
            Terms of Service
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <LuClock className="w-4 h-4 text-[#04441E]" /> Last Updated: March
              2026
            </span>
            <span>•</span>
            <span>Version 3.2</span>
          </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 py-16">
        <div className="prose prose-slate max-w-none space-y-10 text-[#4F4F4F] leading-relaxed">
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 text-sm">
            <strong>Plain-English Summary:</strong> Uplift provides fitness coaching
            software for trainers and athletes. You own your workout data and client
            relationships. We don't take percentage cuts of your client coaching
            revenue, and we maintain bank-grade encryption to protect your data.
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                1
              </span>
              Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base">
              By accessing, browsing, or using the Uplift platform, mobile
              applications, or API endpoints (collectively, the "Services"), you
              agree to be bound by these Terms of Service ("Terms"). If you are
              agreeing on behalf of a gym, corporation, or coaching collective,
              you represent that you possess legal authority to bind that entity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                2
              </span>
              Coach and Athlete Accounts
            </h2>
            <p className="text-sm sm:text-base">
              You must provide accurate, current, and complete registration
              information. You are solely responsible for maintaining the
              confidentiality of your login credentials and for all activities
              conducted under your account. You agree to notify Uplift immediately
              of any unauthorized account breach.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                3
              </span>
              Health, Exercise & Medical Disclaimer
            </h2>
            <p className="text-sm sm:text-base">
              Uplift is a software technology provider and does not provide
              medical advice, physical therapy diagnoses, or medical treatment.
              All exercises, workout routines, and nutritional guidelines hosted
              on the platform are programmed by independent coaches. Clients
              should consult qualified physicians before commencing rigorous
              exercise regimens.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                4
              </span>
              Subscriptions, Billing & Cancellation
            </h2>
            <p className="text-sm sm:text-base">
              Coaching subscriptions are billed in advance on a recurring monthly
              or annual basis. You may cancel your subscription at any time via
              your billing settings. Upon cancellation, your account remains
              fully active until the conclusion of the paid billing period. We
              offer full data exports in CSV format at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                5
              </span>
              Intellectual Property & Content Ownership
            </h2>
            <p className="text-sm sm:text-base">
              You retain 100% intellectual property ownership of all custom
              workout programming, exercise videos, documents, and client photos
              uploaded to your account. Uplift claims no ownership rights over
              your proprietary training methodology.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#04441E] text-[#8EFF0A] text-xs font-bold flex items-center justify-center">
                6
              </span>
              Contact Information
            </h2>
            <p className="text-sm sm:text-base">
              Questions regarding these Terms of Service should be directed to our
              legal counsel at{" "}
              <a
                href="mailto:legal@upliftapp.com"
                className="text-[#04441E] font-semibold underline"
              >
                legal@upliftapp.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
