"use client";

import Link from "next/link";

export default function FooterLinks() {
  const footerLinks = {
    Product: [
      { label: "Training", href: "#" },
      { label: "Forms & Check-Ins", href: "#" },
      { label: "Habits", href: "#" },
      { label: "All Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { label: "Blog", href: "/" },
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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-6 lg:gap-x-8">
      {Object.entries(footerLinks).map(([title, links]) => (
        <div key={title}>
          <h3 className="text-[#8CE100] text-[14px] font-bold">{title}</h3>
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
  );
}
