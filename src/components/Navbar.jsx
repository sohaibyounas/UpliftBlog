"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuChevronsRight, LuMenu, LuX } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";
import CustomButton from "./CustomButton";

const Logo = "/images/upliftlogo.svg";

const navLinks = [
  { label: "Features", href: "#", showPlus: true },
  { label: "Pricing", href: "/pricing", showPlus: false },
  { label: "Resource", href: "#", showPlus: true },
  { label: "About Company", href: "about-company", showPlus: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[9999] ">
      <div className="w-full mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Uplift"
            width={150}
            height={30}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-[#232323] hover:text-[#0A5A37] transition-colors"
            >
              {item.label}
              {item.showPlus && <HiPlus size={12} className="text-[#232323]" />}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="text-[16px] font-medium text-[#232323] hover:text-[#0A5A37] transition-colors border border-[#DCDCDC] rounded-full px-[10px] py-[3px]"
          >
            Login
          </Link>

          <CustomButton text="Start Free Trail" variant="green" />
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden p-2 text-[#232323] hover:text-[#0A5A37] focus:outline-none rounded-lg z-[10001] cursor-pointer transition-transform duration-200 active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <LuX
              size={30}
              className="transition-all duration-300 rotate-0 hover:rotate-90"
            />
          ) : (
            <LuMenu size={30} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-gray-100"
            : "grid-rows-[0fr] opacity-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex justify-between items-center py-4 border-b border-gray-100 text-[#232323] hover:text-[#0A5A37] font-medium transition-colors"
              >
                <span>{item.label}</span>

                {item.showPlus && (
                  <span className="w-7 h-7 border border-gray-200 rounded-full flex items-center justify-center text-[#0A5A37]">
                    <HiPlus size={12} />
                  </span>
                )}
              </Link>
            ))}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-4 font-medium text-[#232323] hover:text-[#0A5A37] transition-colors"
            >
              Login
            </Link>

            <div className="pt-2 pb-3">
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-[#8EFF0A] border-2 border-[#74D800] rounded-full py-3 hover:bg-[#7ce600] transition-colors cursor-pointer"
              >
                <span className="text-[#232323] text-[16px] font-semibold">
                  Start Free Trail
                </span>

                <span className="w-8 h-8 bg-[#191919] text-white rounded-full flex items-center justify-center">
                  <LuChevronsRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
