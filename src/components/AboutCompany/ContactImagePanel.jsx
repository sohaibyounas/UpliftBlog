import React from "react";
import Image from "next/image";

const Jogging = "/images/woman-jogging.svg";
const Headset = "/images/headset.svg";
const Email = "/images/email.svg";

export default function ContactImagePanel() {
  return (
    <div className="relative w-full h-[380px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
      <Image
        src={Jogging}
        alt="Jogging"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 flex flex-col gap-2 sm:gap-3">
        {/* Phone Card */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-[180px] sm:w-[210px] md:w-[225px]">
          <Image
            src={Headset}
            alt="Headset"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
          />
          <div>
            <p className="text-[11px] sm:text-[13px] md:text-[14px] text-[#404040] font-medium tracking-wide">
              Phone Number
            </p>
            <p className="text-[13px] sm:text-[15px] md:text-[16px] font-semibold text-[#232323] whitespace-nowrap">
              +1 (800) 123-4567
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-[#93FF16] rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-[180px] sm:w-[210px] md:w-[225px]">
          <Image
            src={Email}
            alt="Email"
            width={22}
            height={16}
            className="w-5 sm:w-6 h-auto shrink-0"
          />
          <div>
            <p className="text-[11px] sm:text-[13px] md:text-[14px] text-[#404040] font-medium tracking-wide">
              Email Us
            </p>
            <p className="text-[13px] sm:text-[15px] md:text-[16px] font-semibold text-[#232323] whitespace-nowrap">
              info@upliftt.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
