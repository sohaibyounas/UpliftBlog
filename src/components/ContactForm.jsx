"use client";

import React, { useState } from "react";
import IconBadge from "./IconBadge";
import FormField from "./FormField";
import CountryDropdown from "./CountryDropdown";
import CustomButton from "./CustomButton";
import { useCountryDetect } from "@/hooks/useCountryDetect";

export default function ContactForm() {
  const { detectedCountry, setDetectedCountry, markUserOverride } =
    useCountryDetect();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    audienceSize: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCountrySelect = (country) => {
    markUserOverride();
    setDetectedCountry(country);
    if (errors.country) setErrors((prev) => ({ ...prev, country: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.audienceSize) {
      newErrors.audienceSize = "Audience size is required";
    } else if (
      isNaN(formData.audienceSize) ||
      Number(formData.audienceSize) > 10000
    ) {
      newErrors.audienceSize =
        "Please enter a number less than or equal to 10,000";
    }
    if (!detectedCountry) newErrors.country = "Please select a country";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", {
        ...formData,
        country: detectedCountry,
      });
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <IconBadge text="Contact Us" />
      <h2 className="text-[20px] sm:text-[36px] font-semibold text-[#232323] uppercase mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-[628px] leading-snug">
        READY TO GROW YOUR COACHING BUSINESS?
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6"
        noValidate
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            placeholder="Enter your first name"
          />
          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            placeholder="Enter your last name"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your first name"
          />
          <CountryDropdown
            selected={detectedCountry}
            onSelect={handleCountrySelect}
            error={errors.country}
          />
        </div>

        <FormField
          label="Current Number of Clients"
          name="audienceSize"
          value={formData.audienceSize}
          onChange={handleChange}
          error={errors.audienceSize}
          placeholder="e.g. 35"
        />

        <CustomButton
          type="submit"
          text="Submit Form"
          variant="primary"
          fullWidth
          className="px-6 py-3 sm:py-4 text-[15px] sm:text-[18px] border-2 border-[#74D800]"
        />
      </form>
    </div>
  );
}
