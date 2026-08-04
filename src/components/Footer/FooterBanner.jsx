"use client";

import Image from "next/image";
const FooterImage = "/images/FooterImage.svg";
const UplifttLogo = "/images/upliftt_logo.svg";

export default function FooterBanner() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={FooterImage}
        alt="Footer Banner"
        width={1440}
        height={150}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <Image
          src={UplifttLogo}
          alt="Upliftt Logo"
          width={529}
          height={117.9}
          className="w-[250px] md:w-[350px] lg:w-[529px] object-contain"
        />
      </div>
    </div>
  );
}
