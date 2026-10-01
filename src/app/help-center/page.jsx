"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  LuSearch,
  LuBookOpen,
  LuUsers,
  LuCreditCard,
  LuDumbbell,
  LuSmartphone,
  LuCpu,
  LuCircleHelp,
  LuChevronDown,
  LuMail,
  LuMessageCircle,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

const categories = [
  {
    icon: LuBookOpen,
    title: "Getting Started",
    articles: 14,
    description: "Account creation, brand customization, and quick onboarding.",
  },
  {
    icon: LuUsers,
    title: "Client Management",
    articles: 22,
    description: "Inviting athletes, organizing roster groups, and client permissions.",
  },
  {
    icon: LuDumbbell,
    title: "Workout Programming",
    articles: 31,
    description: "Building supersets, video library, RPE setup, and periodization.",
  },
  {
    icon: LuCreditCard,
    title: "Billing & Subscriptions",
    articles: 18,
    description: "Stripe integration, invoices, coupon codes, and recurring plans.",
  },
  {
    icon: LuSmartphone,
    title: "Mobile Client App",
    articles: 19,
    description: "iOS and Android apps, offline logging, and device sync troubleshooting.",
  },
  {
    icon: LuCpu,
    title: "Integrations & API",
    articles: 12,
    description: "Apple Health, Whoop, Garmin, Zapier, and custom webhooks.",
  },
];

const faqs = [
  {
    category: "General",
    q: "How do I migrate my existing clients from spreadsheets or Trainerize?",
    a: "We offer an automated CSV roster importer and complimentary VIP white-glove migration for coaches with 15+ athletes. Your clients will receive a seamless invite without losing past exercise logs.",
  },
  {
    category: "Workouts",
    q: "Can I upload my own custom branded exercise videos?",
    a: "Yes! Uplift allows you to upload unlimited custom HD MP4 videos or embed unlisted YouTube/Vimeo URLs directly into your private coach movement vault.",
  },
  {
    category: "Billing",
    q: "Does Uplift take any transaction fees from client payments?",
    a: "Zero percent. Uplift charges a flat monthly platform software fee. You keep 100% of your coaching earnings, subject only to standard Stripe processing rates (2.9% + 30¢).",
  },
  {
    category: "Mobile",
    q: "Can clients log workouts offline without an internet connection?",
    a: "Yes. The Uplift mobile app supports full local caching. Clients can log reps, sets, and rest timers inside basements or underground gyms, and data auto-syncs as soon as Wi-Fi or cellular reconnects.",
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-[#04441E] text-white pt-16 pb-24 px-4 sm:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex justify-center mb-4"
          >
            <span className="bg-[#8EFF0A]/20 text-[#8EFF0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              24/7 Knowledge Base
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-6"
          >
            How can we help your coaching business?
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-white/80 text-base sm:text-lg mb-8"
          >
            Search guides, video walkthroughs, API docs, and step-by-step
            tutorials.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="relative max-w-2xl mx-auto"
          >
            <LuSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for articles, billing, workout imports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-4 py-4 rounded-full bg-white text-[#232323] placeholder-gray-400 font-medium text-sm sm:text-base shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8EFF0A]/40"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 -mt-10 relative z-20 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardItem}
                className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-md hover:shadow-xl hover:border-[#04441E]/40 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-gray-200 text-[#04441E] flex items-center justify-center mb-5 group-hover:bg-[#04441E] group-hover:text-[#8EFF0A] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#232323] group-hover:text-[#04441E] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">
                    {cat.articles} docs
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Popular Guides & FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 pb-24">
        <div className="text-center mb-12">
          <IconBadge text="TOP ANSWERS" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mt-3">
            Frequently Asked Help Questions
          </h2>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl p-5 bg-[#FAFAFA] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-[#232323] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <LuChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#04441E]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Need Help Support Card */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 pb-24">
        <div className="bg-[#032B13] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <LuCircleHelp className="w-12 h-12 text-[#8EFF0A] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Still couldn't find what you need?
          </h2>
          <p className="text-white/80 max-w-lg mx-auto text-sm sm:text-base mb-8">
            Our specialized coach support engineers respond in under 8 minutes
            during business hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <CustomButton
                text="Message Support"
                variant="green"
                className="py-2.5 px-6 font-semibold"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
