"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuLock, LuShieldCheck, LuEye, LuDatabase, LuClock } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import { fadeUp } from "@/hooks/animations";

export default function PrivacyPage() {
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
            <IconBadge text="DATA PRIVACY & GDPR" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-[#232323] tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <LuClock className="w-4 h-4 text-[#04441E]" /> Last Revised: March
              2026
            </span>
            <span>•</span>
            <span>GDPR & CCPA Compliant</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 py-16">
        <div className="space-y-10 text-[#4F4F4F] leading-relaxed text-sm sm:text-base">
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950">
            <strong>Commitment to Privacy:</strong> We never sell personal data,
            biometrics, or athlete transformation photos to advertising brokers.
            All client data belongs solely to the coach and athlete.
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <LuDatabase className="w-6 h-6 text-[#04441E]" />
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly when creating accounts,
              inviting clients, logging workouts, or integrating wearable devices:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>
                <strong>Account Data:</strong> Name, email address, password hash,
                billing credentials (processed via Stripe PCI-DSS Level 1).
              </li>
              <li>
                <strong>Biometric & Performance Data:</strong> Workout logs,
                exercise tonnage, body weight, RPE ratings, sleep hours, and check-in
                questionnaires.
              </li>
              <li>
                <strong>Progress Media:</strong> Front, back, and side athlete
                transformation photos uploaded strictly under coach-athlete
                permissions.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <LuLock className="w-6 h-6 text-[#04441E]" />
              2. How We Safeguard Sensitive Health Data
            </h2>
            <p>
              All personal metrics and progress media are encrypted using AES-256
              at rest and TLS 1.3 in transit. Access is restricted via role-based
              access controls (RBAC) ensuring coaches only view their assigned
              athletes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <LuEye className="w-6 h-6 text-[#04441E]" />
              3. Your Rights Under GDPR & CCPA
            </h2>
            <p>
              Coaches and athletes retain complete rights over their personal
              records, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Right to access and download a full JSON/CSV data export.</li>
              <li>Right to rectify incorrect physiological metrics.</li>
              <li>
                Right to erasure ("Right to be Forgotten") deleting all athlete
                records and uploaded media within 30 days.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323] flex items-center gap-2">
              <LuShieldCheck className="w-6 h-6 text-[#04441E]" />
              4. Contacting the Data Protection Officer (DPO)
            </h2>
            <p>
              If you have inquiries or wish to submit a data deletion request,
              contact our Data Protection Officer at{" "}
              <a
                href="mailto:privacy@upliftapp.com"
                className="text-[#04441E] font-semibold underline"
              >
                privacy@upliftapp.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
