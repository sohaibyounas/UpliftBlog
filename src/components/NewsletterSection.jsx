"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    alert("Subscribed successfully!");
    setEmail("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <section className="bg-[#054B1F] py-10 sm:py-16 lg:py-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-white font-semibold leading-tight text-[24px] xs:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]">
              Subscribe to our weekly
              <br className="hidden sm:block" />
              <span className="sm:inline block">newsletter today!</span>
            </h2>
          </div>

          {/* Form */}
          <div className="w-full lg:max-w-[560px]">
            <div
              className={`flex flex-col sm:flex-row items-center border rounded-[20px] sm:rounded-full p-2 gap-2 sm:gap-0 transition-colors ${
                error ? "border-red-400" : "border-white"
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-transparent px-4 sm:px-5 py-3 text-white text-[15px] sm:text-base outline-none placeholder:text-white/80"
              />

              <CustomButton
                text={loading ? "Subscribing..." : "Subscribe"}
                variant="green"
                fullWidth={true}
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full sm:w-auto p-[8px] text-[15px] sm:text-base whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <p className="text-red-300 text-sm mt-2 text-center lg:text-left">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
