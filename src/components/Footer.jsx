"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Twitter = "/images/Twitter.svg";
const Instagram = "/images/Instagram.svg";
const Facebook = "/images/Facebook.svg";
const Youtube = "/images/Youtube.svg";
const Linkedin = "/images/Linkedin.svg";
const PlayReel = "/images/PlayReel.svg";
const FooterImage = "/images/FooterImage.svg";
const PlayButton = "/images/PlayButton.svg";
const UplifttLogo = "/images/upliftt_logo.svg";

const footerLinks = {
  Product: [
    { label: "Training", href: "#" },
    { label: "Forms & Check-Ins", href: "#" },
    { label: "Habits", href: "#" },
    { label: "All Features", href: "#" },
    { label: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { label: "Blog", href: "/website/blog" },
    { label: "Help Center", href: "#" },
    { label: "Watch a Demo", href: "#" },
    { label: "Find a Coach", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about-company" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "DPA", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const languages = ["English", "German", "Urdu"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="bg-[#04441E] mt-14">
      <div className="w-full mx-auto px-6 lg:px-8 pt-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[302px_1fr] gap-[50px] sm:gap-[40px] lg:gap-16 xl:gap-24">
          {/* Left - Play Reel */}
          <div>
            <Image
              src={PlayReel}
              alt="Play Reel"
              width={220}
              height={165}
              className="w-[220px] h-[165px] rounded-[16px] object-cover"
            />

            <button className="flex items-center gap-2 mt-4 text-white text-[16px] font-medium">
              <img src={PlayButton} alt="" className="w-[13px] h-[14px]" />
              Play Reel
            </button>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-6 lg:gap-x-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[#8CE100] text-[14px] font-bold">
                  {title}
                </h3>

                <ul className="flex flex-col gap-3 sm:gap-0">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="relative text-white/85 hover:text-white text-[16px] transition-[color] duration-200 cursor-pointer inline-block mt-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:bg-[#74D800]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          {/* Full Width Border */}
          <div className="border-t border-white/10 mx-[-30px]" />

          {/* Content */}
          <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Left - Copyright */}
              <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
                <p className="text-white/85 hover:text-white text-sm text-center lg:text-left">
                  @ {new Date().getFullYear()} Uplift Inc. All Rights Reserved
                </p>
              </div>

              {/* Center - Social Icons */}
              <div className="flex items-center justify-center gap-5">
                {[
                  { icon: Twitter, label: "X (Twitter)", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Youtube, label: "YouTube", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                ].map((social) => (
                  <div
                    key={social.label}
                    className="group relative inline-block"
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center transition-all duration-300 hover:scale-110 rounded-full border border-[#437356] w-9 h-9 hover:border-[#8ce100] bg-transparent"
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-[15px] h-[15px] transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:sepia-0 group-hover:saturate-1000 group-hover:hue-rotate-80"
                      />
                    </a>
                    {/* Tooltip */}
                    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-medium text-black bg-[#8ce100] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 whitespace-nowrap">
                      {social.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Language & Store Links */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center lg:justify-end">
              {/* Language Dropdown */}
              <div ref={dropdownRef} className="relative w-auto">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#3D865B] rounded-full text-white text-[14px] w-full sm:w-auto hover:border-white/70 transition-colors"
                >
                  {language}

                  <IoChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute bottom-0 mb-12 w-full sm:w-26 overflow-hidden rounded-2xl bg-[#04441E] z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setLanguage(lang);
                          setOpen(false);
                        }}
                        className={`w-full px-5 py-1.5 text-left hover:bg-[#1E5735] transition-colors ${
                          language === lang
                            ? "font-normal text-[#8ce100]"
                            : "text-white/85"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Store Links */}
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="relative text-white/85 hover:text-white text-[12px] sm:text-[14px] transition-[color] duration-200 cursor-pointer inline-block py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:bg-[#85d42a]"
                >
                  App Store
                </Link>

                <Link
                  href="#"
                  className="relative text-white/85 hover:text-white text-[12px] sm:text-[14px] transition-[color] duration-200 cursor-pointer inline-block py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:bg-[#85d42a]"
                >
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative w-full h-[150px]">
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
            className="w-[250px] md:w-[350px] lg:w-[529px] h-[117.9px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
