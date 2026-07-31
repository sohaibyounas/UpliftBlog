"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import IconBadge from "./IconBadge";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const NAVBAR_OFFSET_PX = 80;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const rowContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const rowItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ComparisonTable() {
  const [selectedPlan, setSelectedPlan] = useState("trial");

  const comparisonCategories = [
    {
      title: "Core tools",
      features: [
        {
          name: "Workout builder + exercise library",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Program templates",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Meal plans + food scanner",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Client check-ins + task system",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Progress + body metric tracking",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "In-app messaging",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Client payments",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Analytics dashboard",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
      ],
    },
    {
      title: "Growth & community",
      features: [
        {
          name: "Community feed + challenges",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Contests + leaderboards",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Group messaging",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Courses marketplace",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
        {
          name: "Automated check-in reminders",
          trial: true,
          starter: true,
          scale: true,
          pro: true,
        },
      ],
    },
    {
      title: "Scale & team",
      features: [
        {
          name: "Client cap",
          trial: "20",
          starter: "50",
          scale: "Unlimited",
          pro: "Unlimited",
          highlightValue: true,
        },
        {
          name: "Team member access",
          trial: false,
          starter: false,
          scale: true,
          pro: true,
        },
        {
          name: "Advanced automations",
          trial: false,
          starter: false,
          scale: true,
          pro: true,
        },
        {
          name: "Advanced analytics + reporting",
          trial: false,
          starter: false,
          scale: true,
          pro: true,
        },
        {
          name: "Dedicated support",
          trial: false,
          starter: false,
          scale: true,
          pro: true,
        },
      ],
    },
    {
      title: "Coming soon",
      features: [
        {
          name: "AI program + meal builder",
          trial: "Soon",
          starter: "Soon",
          scale: "Soon",
          pro: "Soon",
          badge: true,
        },
        {
          name: "AI business insights",
          trial: "Soon",
          starter: "Soon",
          scale: "Soon",
          pro: "Soon",
          badge: true,
        },
        {
          name: "Custom branding",
          trial: "Soon",
          starter: "Soon",
          scale: "Soon",
          pro: "Soon",
          badge: true,
        },
        {
          name: "White-label branded app",
          trial: false,
          starter: false,
          scale: "Soon",
          pro: "Soon",
          badge: true,
        },
        {
          name: "Zapier / API access",
          trial: false,
          starter: false,
          scale: "Soon",
          pro: "Soon",
          badge: true,
        },
      ],
    },
  ];

  const plans = [
    { key: "trial", label: "Free trail" },
    { key: "starter", label: "Starter" },
    { key: "scale", label: "Scale" },
    { key: "pro", label: "Pro" },
  ];

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-12 w-full py-10">
      <div className="rounded-3xl bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="bg-white text-center pt-6 pb-4 px-4 rounded-t-3xl"
        >
          <div className="inline-flex items-center justify-center mb-3">
            <IconBadge alt="Resource Center" text="COMPRESSION" />
          </div>
          <h2 className="text-[20px] sm:text-[28px] lg:text-[36px] font-semibold text-[#232323]">
            Compare feature across subscription
          </h2>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead
              className="sticky z-20 bg-white border-b border-[#EEEEEE]"
              style={{ top: NAVBAR_OFFSET_PX }}
            >
              <tr>
                <th className="p-3 lg:p-4 w-2/6"></th>
                {plans.map((plan) => {
                  const isSelected = selectedPlan === plan.key;
                  return (
                    <th key={plan.key} className="p-3 lg:p-4 text-center w-1/6">
                      <span className="block text-[17px] lg:text-[21px] font-semibold text-[#232323] mb-3">
                        {plan.label}
                      </span>
                      <motion.button
                        onClick={() => setSelectedPlan(plan.key)}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full h-[38px] px-2 lg:px-4 rounded-full font-semibold text-[11px] lg:text-[14px] transition-colors flex items-center justify-center box-border ${
                          isSelected
                            ? "bg-[#95EA00] text-[#232323] border-2 border-[#74D800] hover:bg-[#85d400]"
                            : "bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium hover:bg-gray-100"
                        }`}
                      >
                        Choose Plan
                      </motion.button>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {comparisonCategories.map((category, catIdx) => (
              <motion.tbody
                key={catIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={rowContainer}
              >
                <motion.tr
                  variants={categoryVariants}
                  className="bg-[#FAFAFA] border-b border-[#EEEEEE]"
                >
                  <td
                    colSpan={5}
                    className="py-2.5 px-4 lg:px-6 text-[15px] lg:text-[18px] font-medium text-[#404040] tracking-wide"
                  >
                    {category.title}
                  </td>
                </motion.tr>
                {category.features.map((feature, featIdx) => (
                  <motion.tr
                    key={featIdx}
                    variants={rowItem}
                    className="border-b border-[#EEEEEE] hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-4 lg:px-6 text-[13px] lg:text-[18px] font-medium text-[#404040]">
                      {feature.name}
                    </td>
                    {plans.map((plan, pIdx) => {
                      const val = feature[plan.key];
                      return (
                        <td
                          key={pIdx}
                          className="py-3.5 px-2 lg:px-4 text-center text-xs font-medium"
                        >
                          {typeof val === "boolean" ? (
                            val ? (
                              <div className="inline-flex items-center justify-center">
                                <IoIosCheckmarkCircleOutline className="text-[#63B800] text-base lg:text-xl" />
                              </div>
                            ) : (
                              <span className="text-[#404040] text-[18px] lg:text-[20px] font-medium">
                                —
                              </span>
                            )
                          ) : feature.badge && val ? (
                            <span className="inline-block px-2 lg:px-3 py-0.5 text-[11px] lg:text-[12px] font-medium text-[#529900] bg-[#86DF1F21] rounded-full">
                              {val}
                            </span>
                          ) : (
                            <span className="font-medium text-[#417900] text-[16px] lg:text-[20px]">
                              {val}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </motion.tbody>
            ))}
          </table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden px-4 pb-6">
          <div
            className="sticky z-20 bg-white pt-2 pb-3"
            style={{ top: NAVBAR_OFFSET_PX }}
          >
            <div className="flex flex-wrap justify-start gap-2">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan.key;
                return (
                  <motion.button
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan.key)}
                    whileTap={{ scale: 0.95 }}
                    className={`w-[110px] shrink-0 h-[40px] px-1 rounded-full font-semibold text-[11px] whitespace-nowrap transition-colors flex items-center justify-center box-border text-center ${
                      isSelected
                        ? "bg-[#95EA00] text-[#232323] border-2 border-[#74D800]"
                        : "bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium"
                    }`}
                  >
                    {plan.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {comparisonCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={rowContainer}
            >
              <motion.div
                variants={categoryVariants}
                className="bg-[#FAFAFA] border-b border-[#EEEEEE] py-2.5 px-2 text-[14px] font-medium text-[#404040] tracking-wide"
              >
                {category.title}
              </motion.div>
              {category.features.map((feature, featIdx) => {
                const val = feature[selectedPlan];
                return (
                  <motion.div
                    key={featIdx}
                    variants={rowItem}
                    className="flex items-center justify-between gap-3 border-b border-[#EEEEEE] py-3 px-2"
                  >
                    <span className="text-[13px] font-medium text-[#404040]">
                      {feature.name}
                    </span>
                    <span className="shrink-0 text-xs font-medium">
                      {typeof val === "boolean" ? (
                        val ? (
                          <IoIosCheckmarkCircleOutline className="text-[#63B800] text-xl" />
                        ) : (
                          <span className="text-[#404040] text-[18px] font-medium">
                            —
                          </span>
                        )
                      ) : feature.badge && val ? (
                        <span className="inline-block px-3 py-0.5 text-[12px] font-medium text-[#529900] bg-[#86DF1F21] rounded-full">
                          {val}
                        </span>
                      ) : (
                        <span className="font-medium text-[#417900] text-[16px]">
                          {val}
                        </span>
                      )}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
