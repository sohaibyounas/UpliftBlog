"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuFileCheck, LuServer, LuShieldCheck, LuClock, LuDownload } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import { fadeUp } from "@/hooks/animations";

const subprocessors = [
  {
    name: "Amazon Web Services (AWS)",
    purpose: "Cloud infrastructure, database hosting & encrypted S3 storage",
    location: "US-East (N. Virginia), EU (Frankfurt)",
  },
  {
    name: "Stripe, Inc.",
    purpose: "Subscription billing & coach merchant payout processing",
    location: "United States (Global PCI Level 1)",
  },
  {
    name: "Twilio",
    purpose: "Automated SMS check-in reminder notifications to athletes",
    location: "United States",
  },
  {
    name: "Cloudflare",
    purpose: "DDoS mitigation, web application firewall (WAF) & edge caching",
    location: "Global Edge Network",
  },
];

export default function DpaPage() {
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
            <IconBadge text="GDPR & UK COMPLIANCE" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-[#232323] tracking-tight mb-4"
          >
            Data Processing Addendum (DPA)
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <LuClock className="w-4 h-4 text-[#04441E]" /> Standard Contractual
              Clauses (SCCs) Active
            </span>
            <span>•</span>
            <span>GDPR Art. 28 Compliant</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 py-16">
        <div className="space-y-10 text-[#4F4F4F] leading-relaxed text-sm sm:text-base">
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <strong>Contractual Status:</strong> This DPA automatically forms
              an integral part of the Uplift Terms of Service between the Coach
              (Data Controller) and Uplift Inc. (Data Processor).
            </div>
            <a
              href="mailto:legal@upliftapp.com?subject=DPA Counter-Signed Copy Request"
              className="shrink-0 px-4 py-2 bg-[#04441E] text-white text-xs font-semibold rounded-full hover:bg-[#065b29] transition-all flex items-center gap-1.5"
            >
              <LuDownload className="w-3.5 h-3.5 text-[#8EFF0A]" /> Request PDF
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323]">
              1. Scope and Roles of the Parties
            </h2>
            <p>
              In providing the Uplift platform to your clients, you (the Coach or
              Gym Organization) act as the <strong>Data Controller</strong>,
              determining the purposes and means of processing athlete personal
              and health data. Uplift acts as the <strong>Data Processor</strong>,
              handling data exclusively in accordance with your documented
              instructions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323]">
              2. Technical and Organizational Measures (TOMs)
            </h2>
            <p>
              Uplift implements and maintains robust physical, technical, and
              administrative safeguards to ensure a level of security
              appropriate to the risk, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Pseudonymization and AES-256 encryption of sensitive biometric media.</li>
              <li>Continuous vulnerability scanning and automated intrusion detection.</li>
              <li>Strict least-privilege internal employee access controls.</li>
              <li>Daily encrypted off-site database backups with tested point-in-time recovery.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323]">
              3. Authorized Subprocessors
            </h2>
            <p className="mb-4">
              The Controller acknowledges and agrees that Uplift engages the
              following third-party subprocessors to deliver platform capabilities:
            </p>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-100 text-gray-700 font-bold">
                  <tr>
                    <th className="p-3">Subprocessor</th>
                    <th className="p-3">Service Provided</th>
                    <th className="p-3">Entity Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subprocessors.map((sub) => (
                    <tr key={sub.name}>
                      <td className="p-3 font-semibold text-[#232323]">
                        {sub.name}
                      </td>
                      <td className="p-3 text-gray-600">{sub.purpose}</td>
                      <td className="p-3 text-gray-600">{sub.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#232323]">
              4. Security Incident Notification
            </h2>
            <p>
              In the event of a confirmed personal data breach affecting your
              athlete records, Uplift shall notify you without undue delay and in
              any event within forty-eight (48) hours of becoming aware of the
              incident.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
