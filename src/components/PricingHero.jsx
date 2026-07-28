"use client";

import React, { useState } from "react";
import { LuChevronsRight } from "react-icons/lu";
import IconBadge from "./IconBadge";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function PricingHero() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const plans = [
    {
      name: "Trial",
      subtitle:
        "Try everything free. Full access for 14 days, no limits, no commitments.",
      price: isYearly ? "$0" : "$0",
      period: isYearly ? "/year" : "/month",
      buttonText: "Start with free Trail",
      badge: "14-day free trial",
      info: "No credit card needed",
      clientCapValue: "20",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Client payments",
        "Analytics dashboard",
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
        "Client cap",
        "Team member access",
        "Advanced automations",
        "Team member access",
        "Advanced analytics + reporting",
        "Dedicated support",
      ],
    },
    {
      name: "Starter",
      subtitle:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$23" : "$29",
      period: isYearly ? "/year" : "/month",
      buttonText: "Start with Starter",
      badge: "Popular Choice",
      info: "Up to 20 clients",
      clientCapValue: "20",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Client payments",
        "Analytics dashboard",
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
        "Client cap",
        "Team member access",
        "Advanced automations",
        "Team member access",
        "Advanced analytics + reporting",
        "Dedicated support",
      ],
    },
    {
      name: "Scale",
      subtitle:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$39" : "$49",
      period: isYearly ? "/year" : "/month",
      buttonText: "Start with Scale",
      badge: "Best Value",
      info: "Up to 50 clients",
      clientCapValue: "50",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Client payments",
        "Analytics dashboard",
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
        "Client cap",
        "Team member access",
        "Advanced automations",
        "Team member access",
        "Advanced analytics + reporting",
        "Dedicated support",
      ],
    },
    {
      name: "Pro",
      subtitle:
        "For coaches building their online business and taking their first clients fully digital.",
      price: isYearly ? "$63" : "$79",
      period: isYearly ? "/year" : "/month",
      buttonText: "Start with Pro",
      badge: "Enterprise",
      info: "Unlimited",
      clientCapValue: "Unlimited",
      features: [
        "Workout builder + exercise library",
        "Program templates",
        "Meal plans + food scanner",
        "Client check-ins + task system",
        "Progress + body metric tracking",
        "Client payments",
        "Analytics dashboard",
        "Community feed + challenges",
        "Contests + leaderboards",
        "Group messaging",
        "Courses marketplace",
        "Automated check-in reminders",
        "Client cap",
        "Team member access",
        "Advanced automations",
        "Team member access",
        "Advanced analytics + reporting",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 sm:pt-8 sm:pb-2">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        {/* header & title */}
        <div>
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
        </div>

        {/* tabs monthly / yearly */}
        <div className="relative flex flex-col items-end md:flex-row md:items-center gap-2 md:gap-4 self-start md:self-center w-full md:w-auto">
          <span className="text-[13px] sm:text-[20px] font-medium text-[#18181b] bg-[#95EA00]/20 text-[#426a00] px-3 py-1.5 rounded-full border border-[#95EA00]/40 shrink-0 absolute -top-3 right-0 md:static md:top-auto md:right-auto">
            Save 20%
          </span>

          <div className="relative flex items-center bg-white border border-[#232323] rounded-full mt-6 md:mt-0 w-full md:w-auto p-1">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#18181b] border border-[#808080] rounded-full transition-all duration-300 ease-in-out ${
                isYearly ? "left-[calc(50%+2px)]" : "left-1"
              }`}
            />

            {/* Monthly Button */}
            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 flex-1 flex items-center justify-center px-6 py-2 rounded-full font-medium text-[16px] transition-colors duration-300 ${
                !isYearly ? "text-white" : "text-[#4F4F4F]"
              }`}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 flex-1 flex items-center justify-center px-6 py-2 rounded-full font-medium text-[16px] transition-colors duration-300 ${
                isYearly ? "text-white" : "text-[#4F4F4F]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2 sm:mb-10 pt-4">
        {plans.map((plan, planIdx) => {
          const isSelected = selectedPlanIndex === planIdx;
          const clientCapIdx = plan.features.findIndex(
            (f) => f.toLowerCase() === "client cap",
          );

          return (
            <div
              key={planIdx}
              onClick={() => setSelectedPlanIndex(planIdx)}
              className={`relative rounded-[24px] p-6 sm:p-[20px] flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out transform ${
                isSelected
                  ? "border-2 border-[#63B800] bg-white"
                  : "border border-[#EEEEEE] bg-white hover:border-gray-300"
              }`}
            >
              {isSelected && (
                <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 bg-[#95EA00] text-black text-[14px] font-semibold px-3 py-1 rounded-full border-2 border-[#74D800] transition-all duration-300 z-20 whitespace-nowrap">
                  {plan.buttonText}
                </div>
              )}
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
                    {plan.subtitle}
                  </p>
                  <div className="flex items-center">
                    <span className="text-[34px] sm:text-[40px] font-semibold tracking-tight text-[#232323] transition-all duration-300">
                      {plan.price}
                    </span>
                    <span className="text-[16px] font-medium text-[#4F4F4F] ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanIndex(planIdx);
                  }}
                  className={`w-full py-[6px] pr-[6px] pl-[12px] rounded-full text-[14px] font-medium transition-all duration-300 mb-8 flex items-center justify-between gap-2 ${
                    isSelected
                      ? "bg-black text-white border-2 border-[#8F8F8F]"
                      : "bg-transparent text-[#232323] border border-[#EEEEEE]"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <span
                    className={`w-[31px] h-[31px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isSelected ? "bg-[#93FF16]" : "bg-transparent"
                    }`}
                  >
                    <LuChevronsRight
                      className={isSelected ? "text-black" : "text-[#232323]"}
                    />
                  </span>
                </button>

                <div className="border-t border-[#EEEEEE] pt-6">
                  <p className="text-[16px] font-semibold text-[#232323] tracking-wider mb-4">
                    Features
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => {
                      const isClientCap =
                        feature.toLowerCase() === "client cap";
                      const isAfterClientCap =
                        clientCapIdx !== -1 && idx > clientCapIdx;

                      const isDisabled = planIdx < 3 && isAfterClientCap;

                      return (
                        <li
                          key={idx}
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
                              {plan.clientCapValue}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
