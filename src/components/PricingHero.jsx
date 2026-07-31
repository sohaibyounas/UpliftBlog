"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import IconBadge from "./IconBadge";
import { IoIosCheckmarkCircleOutline, IoIosArrowDown } from "react-icons/io";
import CustomButton from "./CustomButton";
import { fadeUp, cardContainer, cardItem } from "@/hooks/animations";

export default function PricingHero() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [expandedPlans, setExpandedPlans] = useState({});

  const plans = [
    // trail
    {
      name: "Trial",
      description:
        "Try everything free. Full access for 14 days, no limits, no commitments.",
      price: isYearly ? "$0" : "$0",
      period: isYearly ? "/year" : "/month",
      badge: "14-day free trial",
      buttonText: "Start with free Trail",
      info: "No credit card needed",
      clientCapValue: "20",
      features: [
        "Unlimited coaches",
        "Unlimited clients",
        "All Pro features",
        "Reminder before it ends",
        "Advanced analytics + reportings",
        "Progress + body metric tracking",
        "Dedicated support",
        "No credit card required",
      ],
    },

    // starter
    {
      id: "starter",
      name: "Starter",
      popularBadge: null,
      info: "Up to 20 clients",
      description:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$29" : "$39",
      period: isYearly ? "/year" : "/month",
      badge: "Start with starter",
      buttonText: "Start with starter",
      clientCap: "20",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Analytics dashboard",
        "Client cap",
      ],
      extraFeatures: [
        "In-app messaging",
        "Client payments",
        "Automated check-in reminders",
      ],
    },

    // scale
    {
      id: "scale",
      name: "Scale",
      popularBadge: "Most popular",
      info: "Up to 50 clients",
      description:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$39" : "$49",
      period: isYearly ? "/year" : "/month",
      badge: "Start with scale",
      buttonText: "Start with scale",
      clientCap: "50",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Analytics dashboard",
        "Client cap",
      ],
      extraFeatures: [
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
      ],
    },

    // pro
    {
      id: "pro",
      name: "Pro",
      popularBadge: null,
      info: "Unlimited",
      description:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$69" : "$79",
      period: isYearly ? "/year" : "/month",
      badge: "Choose pro plan",
      buttonText: "Start with pro",
      clientCap: "Unlimited",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Team member access",
        "Advanced automations",
        "Advanced analytics + reporting",
        "Client cap",
      ],
      extraFeatures: [
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
        "Priority support",
      ],
    },
  ];

  const getDisplayPrice = (plan) => {
    if (typeof plan.price === "string") {
      return { amount: plan.price, period: plan.period };
    }
    const amount = isYearly ? plan.price.yearly : plan.price.monthly;
    return { amount: `$${amount}`, period: isYearly ? "/year" : "/month" };
  };

  const toggleExpand = (e, planIdx) => {
    e.stopPropagation();
    setExpandedPlans((prev) => ({ ...prev, [planIdx]: !prev[planIdx] }));
  };

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-10 md:px-12 sm:pt-8 sm:pb-2">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        {/* header & title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-5">
            <IconBadge alt="Resource Center" text="Pricing" />
          </div>

          <div>
            <h1 className="text-[24px] sm:text-[36px] font-semibold text-[#232323] tracking-tight leading-tight">
              Simple pricing.
              <br />
              No Surprises.
            </h1>
          </div>
        </motion.div>

        {/* tabs monthly / yearly */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.15}
          variants={fadeUp}
          className="relative flex flex-col items-end md:flex-row md:items-center gap-2 md:gap-4 self-start md:self-center w-full md:w-auto"
        >
          <span className="group relative inline-flex items-center gap-1.5 text-[12px] sm:text-[14px] font-semibold text-[#365314] bg-gradient-to-r from-[#bef264] to-[#95EA00] px-3.5 py-1.5 rounded-full shadow-sm shadow-[#95EA00]/20 border border-white/40 shrink-0 transition-transform duration-300 hover:scale-105">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#365314] animate-pulse"></span>
            Save 20%
          </span>

          <div className="relative flex items-center bg-[#f4f4f5] border border-[#e4e4e7] shadow-inner rounded-full w-full md:w-auto p-1.5">
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#18181b] shadow-md rounded-full transition-all duration-300 ease-out ${
                isYearly ? "left-[calc(50%+3px)]" : "left-1.5"
              }`}
            />

            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 flex-1 flex items-center justify-center px-6 py-2 rounded-full font-medium text-[15px] transition-colors duration-200 ${
                !isYearly ? "text-white" : "text-[#71717a] hover:text-[#18181b]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 flex-1 flex items-center justify-center px-6 py-2 rounded-full font-medium text-[15px] transition-colors duration-200 ${
                isYearly ? "text-white" : "text-[#71717a] hover:text-[#18181b]"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>
      </div>

      {/* packages */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
      >
        {plans.map((plan, planIdx) => {
          const isSelected = selectedPlanIndex === planIdx;
          const isExpanded = !!expandedPlans[planIdx];
          const hasExtra = plan.extraFeatures && plan.extraFeatures.length > 0;

          const visibleFeatures =
            isExpanded && hasExtra
              ? [...plan.features, ...plan.extraFeatures]
              : plan.features;

          const clientCapIdx = plan.features.findIndex(
            (f) => f.toLowerCase() === "client cap",
          );

          const isTrial = planIdx === 0;

          const clientCapDisplayValue = plan.clientCapValue || plan.clientCap;

          const { amount: displayPrice, period: displayPeriod } =
            getDisplayPrice(plan);

          return (
            <motion.div
              key={planIdx}
              variants={cardItem}
              onClick={() => setSelectedPlanIndex(planIdx)}
              layout
              className={`relative rounded-[24px] p-6 sm:p-[20px] flex flex-col justify-between cursor-pointer transition-colors duration-300 ease-in-out ${
                isSelected
                  ? "border-2 border-[#63B800] bg-white"
                  : "border-2 border-[#EEEEEE] bg-white"
              }`}
            >
              <AnimatePresence>
                {isSelected && plan.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute -top-4.5 left-1/2 -translate-x-1/2 bg-[#95EA00] text-white text-[14px] font-semibold px-3 py-1 rounded-full border-2 border-[#74D800] z-20 whitespace-nowrap truncate"
                  >
                    {plan.badge}
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-[#232323]">
                      {plan.name}
                    </h3>
                    <span className="text-[12px] font-semibold text-[#232323]">
                      {plan.info}
                    </span>
                  </div>
                  <p className="text-[12px] font-medium text-[#4F4F4F] mt-1 min-h-[32px]">
                    {plan.description}
                  </p>
                  <div className="flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={displayPrice + displayPeriod}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="text-[34px] sm:text-[40px] font-semibold tracking-tight text-[#232323]"
                      >
                        {displayPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-[16px] font-medium text-[#4F4F4F] ml-1">
                      {displayPeriod}
                    </span>
                  </div>
                </div>

                <CustomButton
                  type="submit"
                  text={plan.buttonText}
                  fullWidth
                  variant={isSelected ? "green" : "outline"}
                  className="py-[4px] pr-[9px] pl-[10px] mb-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanIndex(planIdx);
                  }}
                />

                <div className="border-t border-[#EEEEEE] pt-6">
                  <p className="text-[16px] font-semibold text-[#232323] tracking-wider mb-4">
                    Features
                  </p>
                  <ul className="space-y-3">
                    {visibleFeatures.map((feature, idx) => {
                      const isClientCap =
                        feature.toLowerCase() === "client cap";
                      const isAfterClientCap =
                        clientCapIdx !== -1 && idx > clientCapIdx;

                      const isDisabled = isTrial && isAfterClientCap;
                      const isExtra = idx >= plan.features.length;

                      return (
                        <motion.li
                          key={idx}
                          initial={
                            isExtra ? { opacity: 0, height: 0, y: -6 } : false
                          }
                          animate={
                            isExtra
                              ? { opacity: 1, height: "auto", y: 0 }
                              : { opacity: 1 }
                          }
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="flex items-center justify-between gap-2.5 text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            {isDisabled ? (
                              <span className="w-4 h-4 flex items-center justify-center text-[12px] text-[#B5B5B5] font-medium shrink-0">
                                —
                              </span>
                            ) : (
                              <IoIosCheckmarkCircleOutline className="text-[#63B800] text-base" />
                            )}
                            <span
                              className={`text-[13.5px] font-medium ${
                                isDisabled ? "text-[#B5B5B5]" : "text-[#404040]"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>

                          {isClientCap && (
                            <span className="text-[14px] font-semibold text-[#232323] shrink-0">
                              {clientCapDisplayValue}
                            </span>
                          )}
                        </motion.li>
                      );
                    })}
                  </ul>

                  {hasExtra && (
                    <button
                      onClick={(e) => toggleExpand(e, planIdx)}
                      className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#232323] hover:text-[#63B800] transition-colors duration-200"
                    >
                      <span className="hover:underline cursor-pointer">
                        {isExpanded ? "See less" : "See more"}
                      </span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <IoIosArrowDown className="text-base" />
                      </motion.span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
