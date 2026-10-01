"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LuMail,
  LuMessageSquare,
  LuBuilding2,
  LuHeadphones,
  LuSend,
  LuCircleCheck,
  LuClock,
  LuSparkles,
} from "react-icons/lu";
import IconBadge from "@/components/IconBadge";
import CustomButton from "@/components/CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Coach Platform Support",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const contactChannels = [
    {
      icon: LuHeadphones,
      title: "Coach Platform Support",
      email: "support@upliftapp.com",
      sla: "Average response: <15 mins",
      desc: "Live help with workout builder questions, client invitations, or billing sync.",
    },
    {
      icon: LuBuilding2,
      title: "Gyms & White-Glove Migration",
      email: "sales@upliftapp.com",
      sla: "Same-day booking",
      desc: "Coaching rosters with 20+ athletes qualify for automated CSV data migration.",
    },
    {
      icon: LuMessageSquare,
      title: "Partnerships & Press",
      email: "partners@upliftapp.com",
      sla: "24-48 business hours",
      desc: "Creator collaborations, athletic gear sponsorships, and wearable integrations.",
    },
  ];

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
          <IconBadge text="SUPPORT & INQUIRIES" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#232323] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          We're here to help you scale <br className="hidden sm:inline" />
          <span className="text-[#04441E] underline decoration-[#8EFF0A] decoration-4 underline-offset-8">
            your coaching practice.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed"
        >
          Have a question about our workout builder, client migration, or custom
          gym plans? Send us a message and our team will get right back to you.
        </motion.p>
      </section>

      {/* 3 Channels */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.title}
                variants={cardItem}
                className="bg-[#FAFAFA] border border-gray-200/90 rounded-3xl p-6 hover:shadow-lg hover:border-[#04441E]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#04441E] text-[#8EFF0A] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#232323] text-lg mb-1">
                  {channel.title}
                </h3>
                <div className="text-sm font-semibold text-[#04441E] mb-2">
                  {channel.email}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full w-fit mb-3 font-medium">
                  <LuClock className="w-3.5 h-3.5" /> {channel.sla}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {channel.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Main Contact Form Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-12 pb-24">
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <LuCircleCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#232323] mb-2">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto text-sm mb-6">
                Thank you, <strong>{formData.name}</strong>. Our coach support team
                has received your note and will reply directly to{" "}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    topic: "Coach Platform Support",
                    message: "",
                  });
                }}
                className="px-6 py-2.5 bg-[#04441E] text-white font-semibold rounded-full text-sm hover:bg-[#065b29] transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#232323]">
                  Direct Message Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill out the form below and an engineer will reply directly to your inbox.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Coach Jordan Reed"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@performance.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full p-3.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                >
                  <option>Coach Platform Support</option>
                  <option>White-Glove Roster Migration (From Sheets/Trainerize)</option>
                  <option>Gym Facility & Multi-Trainer Enterprise Plan</option>
                  <option>API & Webhook Integrations</option>
                  <option>Billing & Payment Processing</option>
                  <option>Other Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Message Details
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us what you're looking to achieve with your coaching business..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#04441E]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#04441E] hover:bg-[#065b29] text-white font-bold rounded-full text-base transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <LuSend className="w-5 h-5 text-[#8EFF0A]" />
                {isSubmitting ? "Transmitting Note..." : "Send Message to Uplift Team"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
