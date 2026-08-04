"use client";

import PlayReelSection from "./Footer/PlayReelSection";
import FooterLinks from "./Footer/FooterLinks";
import FooterBottom from "./Footer/FooterBottom";
import FooterBanner from "./Footer/FooterBanner";

export default function Footer() {
  return (
    <footer className="bg-[#04441E] mt-14">
      <div className="w-full mx-auto px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[302px_1fr] gap-[50px] sm:gap-[40px] lg:gap-16 xl:gap-24">
          <PlayReelSection />
          <FooterLinks />
        </div>
        <FooterBottom />
      </div>
      <FooterBanner />
    </footer>
  );
}
