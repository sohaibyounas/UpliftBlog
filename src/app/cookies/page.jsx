"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LuCookie, LuCircleCheck, LuClock, LuShieldCheck } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import { fadeUp } from "@/hooks/animations";

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    analytics: true,
    functional: true,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

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
            <IconBadge text="COOKIE PREFERENCES" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-[#232323] tracking-tight mb-4"
          >
            Cookie Policy
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
          </motion.div>
        </div>
      </section>

      {/* Interactive Cookie Preference Matrix */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 py-16">
        <div className="bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <LuCookie className="w-7 h-7 text-[#04441E]" />
            <div>
              <h2 className="text-xl font-bold text-[#232323]">
                Manage Your Tracker Preferences
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Customize which tracking technologies Uplift may store on your device.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Essential */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[#232323] text-sm sm:text-base">
                    Strictly Necessary Cookies
                  </h3>
                  <span className="text-[10px] font-bold bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Required for secure authentication, CSRF token validation, and
                  persisting coach session state.
                </p>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                className="w-5 h-5 accent-[#04441E] cursor-not-allowed opacity-60"
              />
            </div>

            {/* Analytics */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-[#232323] text-sm sm:text-base">
                  Performance & Error Diagnostics
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Helps us monitor sub-second page response speeds and catch
                  programming builder bugs before they affect coaches.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({ ...preferences, analytics: e.target.checked })
                }
                className="w-5 h-5 accent-[#04441E] cursor-pointer"
              />
            </div>

            {/* Functional */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-[#232323] text-sm sm:text-base">
                  Functional & Workout Draft Caching
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Remembers your local workout drafts in case you accidentally
                  close your browser tab during program design.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) =>
                  setPreferences({ ...preferences, functional: e.target.checked })
                }
                className="w-5 h-5 accent-[#04441E] cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-[#232323] text-sm sm:text-base">
                  Marketing & Referral Attribution
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Allows coach affiliate referral links to properly attribute
                  commissions when colleagues sign up.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({ ...preferences, marketing: e.target.checked })
                }
                className="w-5 h-5 accent-[#04441E] cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-[#04441E] text-white hover:bg-[#065b29] text-sm font-semibold rounded-full transition-all cursor-pointer shadow-sm"
            >
              {saved ? "Preferences Saved!" : "Save Cookie Preferences"}
            </button>
            {saved && (
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <LuCircleCheck className="w-4 h-4" /> Updated locally
              </span>
            )}
          </div>
        </div>

        {/* Informational Clauses */}
        <div className="space-y-8 text-[#4F4F4F] leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-[#232323] mb-2">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text fragments stored in your web browser by
              websites you visit. They allow websites to remember your device,
              maintain active authenticated sessions, and understand user
              journeys.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#232323] mb-2">
              How Can You Clear Cookies?
            </h2>
            <p>
              In addition to our preference manager above, you can delete or
              block cookies directly in your browser settings (Chrome, Safari,
              Firefox, or Edge). Note that disabling strictly necessary cookies
              will prevent you from logging into your Uplift coach account.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
