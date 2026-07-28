"use client";

import IconBadge from "./IconBadge";
import CustomButton from "./CustomButton";

const Resources = "/icons/resource-center.svg";
const Image = "/images/image-33.svg";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl xl:max-w-7xl text-white px-8 sm:px-10 md:px-12 py-10 sm:py-12 md:py-14">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-0 mb-9">
        <div className="flex flex-col gap-2 sm:gap-3">
          <IconBadge
            src={Resources}
            alt="Resource Center"
            text="Resource Center"
          />
          <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-semibold text-[#232323]">
            Articles & News
          </h1>
        </div>

        <div className="w-full sm:w-auto flex justify-start sm:justify-end">
          <CustomButton
            text="Browse articles"
            variant="outline"
            onClick={() =>
              document
                .getElementById("latest-articles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full px-[14px] py-[10px] text-[15px] sm:text-base whitespace-nowrap"
          />
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-white rounded-[32px]">
        <div className="relative overflow-hidden rounded-[28px] h-80 sm:h-105 lg:h-130">
          <img src={Image} alt="Image" className="w-full h-full object-cover" />

          {/* Badge */}
          <div className="absolute left-4 right-4 top-15 sm:top-1/2 sm:-translate-y-1/2 sm:left-[80px] sm:right-auto w-auto sm:w-[516px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-8">
            <span className="inline-flex items-center justify-center h-8.5 px-3.5 py-1.5 rounded-full bg-[#0A5A37] text-white text-[16px] font-medium leading-5 tracking-[-0.01em]">
              Featured
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-[#232323] text-[16px] sm:text-[24px] font-bold leading-[120%] tracking-[-0.02em]">
              Mind &amp; Body Wellness for Balance and Well-Being
            </h2>

            {/* Description */}
            <p className="mt-4 text-[#5E5E5E] text-[12px] sm:text-[18px] font-normal leading-[100%] tracking-[-0.01em]">
              Discover practical tips, healthy habits, and simple lifestyle
              changes to improve your physical health, mental clarity, and
              overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
