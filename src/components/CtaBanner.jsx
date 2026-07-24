import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const MaskGroup = "/images/Maskgroup.svg";
const Headphone = "/images/headphone.svg";

export default function CtaBanner() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 pt-10 sm:pt-15">
      <div className="bg-[#04441E] rounded-[32px] sm:rounded-[54px] px-6 py-12 sm:p-16 md:p-20 text-center relative overflow-hidden min-h-[420px] sm:min-h-[323px] flex items-center">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{
            backgroundImage: `url(${MaskGroup})`,
          }}
        />

        <div className="relative z-10 w-full">
          <h2 className="text-[24px] leading-tight sm:text-[44px] font-semibold text-white mb-3 sm:mb-2">
            Come build the next chapter with us.
          </h2>
          <p className="text-white text-[14px] sm:text-[20px] mb-8 max-w-[542px] mx-auto leading-relaxed">
            Whether you're a coach ready to switch or just curious how it works
            — we'd love to show you around.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <CustomButton
              text="Talk to sales"
              variant="white"
              icon={<Image src={Headphone} alt="" width={16} height={16} />}
              className="w-full sm:w-auto justify-between sm:justify-start px-6 py-3 sm:py-1 gap-2"
            />
            <CustomButton
              text="Start Free Trial"
              variant="green"
              className="w-full sm:w-auto justify-between sm:justify-start px-6 py-3 sm:py-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
