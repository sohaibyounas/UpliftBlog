"use client";

import { LuChevronsRight } from "react-icons/lu";
import CustomButton from "./CustomButton";

export default function NewsletterSection() {
  return (
    <section className="bg-[#054B1F] py-12 sm:py-16 lg:py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-white font-semibold leading-tight text-[24px] xs:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]">
              Subscribe to our weekly
              <br className="hidden sm:block" />
              <span className="sm:inline block">newsletter today!</span>
            </h2>
          </div>

          {/* Right Form */}
          <div className="w-full lg:max-w-[560px]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-white rounded-[20px] sm:rounded-full p-2 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 sm:px-5 py-3 text-white text-[15px] sm:text-base outline-none placeholder:text-white/80"
              />

              <CustomButton
                text="Subscribe"
                variant="green"
                className="pr-[6px] pl-[8px] py-[4px] text-[15px] sm:text-base whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
