"use client";

import Link from "next/link";

export default function FooterLinks() {
  const footerLinks = {
    Product: [
      { label: "Training", href: "/training" },
      { label: "Forms & Check-Ins", href: "/forms-and-check-ins" },
      { label: "Habits", href: "/habits" },
      { label: "All Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help-center" },
      { label: "Watch a Demo", href: "/watch-a-demo" },
      { label: "Find a Coach", href: "/find-a-coach" },
    ],
    Company: [
      { label: "About", href: "/about-company" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
    ],
    Legal: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "DPA", href: "/dpa" },
      { label: "Security", href: "/security" },
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
