"use client";

import React, { useState } from "react";
import IconBadge from "./IconBadge";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const NAVBAR_OFFSET_PX = 80;

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
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 w-full py-10">
      <div className="rounded-3xl bg-white">
        <div className="bg-white text-center pt-[12px] pb-2">
          <div className="inline-flex items-center justify-center mb-3">
            <IconBadge alt="Resource Center" text="COMPRESSION" />
          </div>
          <h2 className="text-[16px] sm:text-[36px] font-semibold text-[#232323]">
            Compare feature across subscription
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead
              className="sticky z-20 bg-white"
              style={{ top: NAVBAR_OFFSET_PX }}
            >
              <tr>
                <th className="p-4 w-2/6"></th>
                {plans.map((plan) => {
                  const isSelected = selectedPlan === plan.key;
                  return (
                    <th key={plan.key} className="p-4 text-center w-1/6">
                      <span className="block text-[20px] sm:text-[21px] font-semibold text-[#232323] mb-3">
                        {plan.label}
                      </span>
                      <button
                        onClick={() => setSelectedPlan(plan.key)}
                        className={`w-full h-[38px] px-4 rounded-full font-semibold text-[9px] lg:text-[14px] transition-colors flex items-center justify-center box-border ${isSelected
                          ? "bg-[#95EA00] text-[#232323] border-2 border-[#74D800] hover:bg-[#85d400]"
                          : "bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium hover:bg-gray-100"
                          }`}
                      >
                        Choose Plan
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {comparisonCategories.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr className="bg-[#FAFAFA] border-b border-[#EEEEEE]">
                    <td
                      colSpan={5}
                      className="py-2.5 px-6 text-[18px] font-medium text-[#404040] tracking-wide"
                    >
                      {category.title}
                    </td>
                  </tr>
                  {category.features.map((feature, featIdx) => (
                    <tr
                      key={featIdx}
                      className="border-b border-[#EEEEEE] hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-3.5 px-6 text-[13px] sm:text-[18px] font-medium text-[#404040]">
                        {feature.name}
                      </td>
                      {plans.map((plan, pIdx) => {
                        const val = feature[plan.key];
                        return (
                          <td
                            key={pIdx}
                            className="py-3.5 px-4 text-center text-xs font-medium"
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <div className="inline-flex items-center justify-center">
                                  <IoIosCheckmarkCircleOutline className="text-[#63B800] text-base" />
                                </div>
                              ) : (
                                <span className="text-[#404040] text-[20px] font-medium">
                                  —
                                </span>
                              )
                            ) : feature.badge && val ? (
                              <span className="inline-block px-3 py-0.5 text-[12px] font-medium text-[#529900] bg-[#86DF1F21] rounded-full">
                                {val}
                              </span>
                            ) : (
                              <span className="font-medium text-[#417900] text-[20px]">
                                {val}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
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
                  <button
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan.key)}
                    className={`w-[110px] shrink-0 h-[40px] px-1 rounded-full font-semibold text-[11px] whitespace-nowrap transition-colors flex items-center justify-center box-border text-center ${isSelected
                      ? "bg-[#95EA00] text-[#232323] border-2 border-[#74D800]"
                      : "bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium"
                      }`}
                  >
                    {plan.label}
                  </button>
                );
              })}
            </div>
          </div>

          {comparisonCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="bg-[#FAFAFA] border-b border-[#EEEEEE] py-2.5 px-2 text-[14px] font-medium text-[#404040] tracking-wide">
                {category.title}
              </div>
              {category.features.map((feature, featIdx) => {
                const val = feature[selectedPlan];
                return (
                  <div
                    key={featIdx}
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
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
