"use client";

import React, { useEffect, useRef } from "react";
import IconBadge from "./IconBadge";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function ComparisonTable() {
  const sectionRef = useRef(null);
  const tableScrollRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const scrollEl = tableScrollRef.current;
    if (!sectionEl || !scrollEl) return;

    const onWheel = (event) => {
      if (!sectionEl.contains(event.target)) return;

      const deltaY = event.deltaY;
      const atTop = scrollEl.scrollTop <= 0;
      const atBottom =
        scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight;

      if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      scrollEl.scrollTop += deltaY;
    };

    sectionEl.addEventListener("wheel", onWheel, {
      passive: false,
      capture: true,
    });
    return () =>
      sectionEl.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

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

  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-[12px]">
      <div ref={sectionRef} className="rounded-3xl bg-white">
        {/* header */}
        <div className="bg-white text-center pt-[12px] pb-2">
          <div className="inline-flex items-center justify-center mb-3">
            <IconBadge alt="Resource Center" text="COMPRESSION" />
          </div>
          <h2 className="text-[16px] sm:text-[36px] font-semibold text-[#232323]">
            Compare feature across subscription
          </h2>
        </div>

        <div
          ref={tableScrollRef}
          className="max-h-[520px] overflow-y-auto overflow-x-auto scrollbar-hidden"
        >
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead className="sticky top-0 z-20 bg-white">
              <tr>
                <th className="p-4 w-2/6"></th>
                <th className="p-4 text-center w-1/6">
                  <span className="block text-[20px] sm:text-[22px] font-semibold text-[#232323] mb-3">
                    Free trail
                  </span>
                  <button className="w-full h-[38px] px-4 rounded-full bg-[#95EA00] text-[#232323] font-semibold text-[9px] sm:text-[16px] border-2 border-[#74D800] transition-colors hover:bg-[#85d400] flex items-center justify-center box-border">
                    Choose Plan
                  </button>
                </th>
                <th className="p-4 text-center w-1/6">
                  <span className="block text-[20px] sm:text-[22px] font-semibold text-[#232323] mb-3">
                    Starter
                  </span>
                  <button className="w-full h-[38px] px-4 rounded-full bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium text-[9px] sm:text-[16px] hover:bg-gray-100 transition-colors flex items-center justify-center box-border">
                    Choose plan
                  </button>
                </th>
                <th className="p-4 text-center w-1/6">
                  <span className="block text-[20px] sm:text-[22px] font-semibold text-[#232323] mb-3">
                    Scale
                  </span>
                  <button className="w-full h-[38px] px-4 rounded-full bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium text-[9px] sm:text-[16px] hover:bg-gray-100 transition-colors flex items-center justify-center box-border">
                    Choose plan
                  </button>
                </th>
                <th className="p-4 text-center w-1/6">
                  <span className="block text-[20px] sm:text-[22px] font-semibold text-[#232323] mb-3">
                    Pro
                  </span>
                  <button className="w-full h-[38px] px-4 rounded-full bg-gray-50/50 border border-[#CBCBCB] text-[#4F4F4F] font-medium text-[9px] sm:text-[16px] hover:bg-gray-100 transition-colors flex items-center justify-center box-border">
                    Choose plan
                  </button>
                </th>
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
                      {["trial", "starter", "scale", "pro"].map(
                        (planKey, pIdx) => {
                          const val = feature[planKey];
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
                        },
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
