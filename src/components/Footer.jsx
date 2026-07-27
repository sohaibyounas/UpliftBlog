"use client";

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

const footerLinks = {
  Product: [
    "Training",
    "Forms & Check-Ins",
    "Habits",
    "All Features",
    "Pricing",
  ],
  Resources: ["Blog", "Help Center", "Watch a Demo", "Find a Coach"],
  Company: ["About", "Team", "Careers", "Contact", "Partners"],
  Legal: ["Terms", "Privacy", "Cookies", "DPA", "Security"],
};

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const languages = ["English", "German"];
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
    <footer className="bg-[#054B1F] mt-14">
      <div className="w-full mx-auto px-6 lg:px-8 pt-12">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-[302px_1fr] gap-[50px] md:gap-[140px]">
          {/* Left */}
          <div>
            <img
              src={PlayReel}
              alt="Play Reel"
              className="w-[302px] h-[240px] rounded-[16px] object-cover"
            />

            <button className="flex items-center gap-2 mt-4 text-white text-[16px] font-medium">
              <img src={PlayButton} alt="" className="w-[15px] h-[16px]" />
              Play Reel
            </button>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[#8EFF0A] text-[14px] font-semibold mb-6">
                  {title}
                </h3>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white hover:text-white/80 text-[16px] transition underline-offset-4 hover:underline cursor-pointer"
                      >
                        {link}
                      </a>
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
            {/* Copyright */}
            <p className="text-white text-sm text-center lg:text-left">
              © {new Date().getFullYear()} Uplift Inc. All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              {/* Language Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 px-4 py-2 border border-[#3D865B] rounded-[12px] text-white text-[14px]"
                >
                  {language}

                  <IoChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute left-0 mt-1 w-32 overflow-hidden rounded-2xl bg-white z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setLanguage(lang);
                          setOpen(false);
                        }}
                        className={`w-full px-5 py-3 text-left text-[#232323] hover:bg-[#85d42a] transition-colors ${
                          language === lang
                            ? "bg-white font-normal"
                            : "hover:bg-[#85d42a]"
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
                <a
                  href="#"
                  className="text-white hover:text-white/80 text-[12px] sm:text-[14px] underline underline-offset-2 transition-colors"
                >
                  App Store
                </a>

                <a
                  href="#"
                  className="text-white hover:text-white/80 text-[12px] sm:text-[14px] underline underline-offset-2 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div>
        <img
          src={FooterImage}
          alt="Footer Banner"
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
}
