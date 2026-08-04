"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { socialLinks, languages } from "./data";

export default function FooterBottom() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
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
    <div className="mt-12">
      <div className="border-t border-white/10 mx-[-30px]" />

      <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative">
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto z-10">
          <p className="text-white/85 hover:text-white text-sm text-center lg:text-left">
            @ {new Date().getFullYear()} Uplift Inc. All Rights Reserved
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 w-full lg:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-0">
          {socialLinks.map((social) => (
            <div key={social.label} className="group relative inline-block">
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
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-medium text-black bg-[#8ce100] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 whitespace-nowrap">
                {social.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center lg:justify-end z-10">
          <div ref={dropdownRef} className="relative w-auto">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-[#3D865B] rounded-full text-white text-[14px] w-full sm:w-auto hover:border-white/70 transition-colors"
            >
              {language}
              <IoChevronDown
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
  );
}
