"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import IconBadge from "@/components/IconBadge";
import FormField from "@/components/FormField";
import CountryDropdown from "@/components/AboutCompany/CountryDropdown";
import CustomButton from "@/components/CustomButton";
import { useCountryDetect } from "@/hooks/useCountryDetect";

export default function ContactForm() {
  const { detectedCountry, setDetectedCountry, markUserOverride } =
    useCountryDetect();

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      audienceSize: 0,
      country: "",
    },
  });

  useEffect(() => {
    if (detectedCountry) {
      setValue("country", detectedCountry);
      trigger("country");
    }
  }, [detectedCountry, setValue, trigger]);

  // Custom validation function
  const validateForm = (data) => {
    const newErrors = {};

    if (!data.firstName?.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!data.lastName?.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!data.audienceSize && data.audienceSize !== 0) {
      newErrors.audienceSize = "Audience size is required";
    } else if (data.audienceSize > 10000) {
      newErrors.audienceSize =
        "Please enter a number less than or equal to 10,000";
    }

    if (!data.country) {
      newErrors.country = "Please select a country";
    }

    // Set errors in react-hook-form
    Object.keys(newErrors).forEach((field) => {
      setError(field, { type: "manual", message: newErrors[field] });
    });

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (data) => {
    // Validate before submission
    const isValid = validateForm(data);

    if (!isValid) {
      return;
    }

    try {
      console.log("Form Submitted Successfully:", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleCountrySelect = (country) => {
    markUserOverride();
    setDetectedCountry(country);
    setValue("country", country);
    trigger("country");
    clearErrors("country");
  };

  return (
    <div>
      <IconBadge text="Contact Us" />
      <h2 className="text-[20px] sm:text-[36px] font-semibold text-[#232323] uppercase mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-[628px] leading-snug">
        READY TO GROW YOUR COACHING BUSINESS?
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormField
                label="First Name"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.firstName?.message}
                placeholder="Enter your first name"
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <FormField
                label="Last Name"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.lastName?.message}
                placeholder="Enter your last name"
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormField
                label="Email Address"
                name={field.name}
                type="email"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.email?.message}
                placeholder="Enter your email address"
              />
            )}
          />

          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <CountryDropdown
                selected={field.value}
                onSelect={handleCountrySelect}
                error={errors.country?.message}
              />
            )}
          />
        </div>

        <Controller
          name="audienceSize"
          control={control}
          render={({ field }) => (
            <FormField
              label="Current Number of Clients"
              name={field.name}
              type="number"
              min="0"
              max="10000"
              value={field.value}
              onChange={(e) => {
                // Allow empty string for backspace
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                field.onChange(value);
              }}
              onBlur={(e) => {
                // On blur, if empty, set to 0
                if (e.target.value === "") {
                  field.onChange(0);
                }
                field.onBlur();
              }}
              onKeyDown={(e) => {
                // Allow Backspace, Delete, Tab, Arrow keys
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "Tab",
                  "ArrowLeft",
                  "ArrowRight",
                  "ArrowUp",
                  "ArrowDown",
                  "Home",
                  "End",
                ];

                if (allowedKeys.includes(e.key)) {
                  return; // Allow these keys
                }

                // Prevent e, E, +, -, .
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onInput={(e) => {
                // Ensure no negative values
                if (e.target.value < 0) {
                  e.target.value = 0;
                  field.onChange(0);
                }
              }}
              error={errors.audienceSize?.message}
              placeholder="e.g. 35"
            />
          )}
        />

        <CustomButton
          type="submit"
          text="Submit Form"
          variant="primary"
          fullWidth
          className="pr-[14px] py-[6px] text-[15px] pl-[8px] sm:text-[18px] font-medium"
          isLoading={isSubmitting}
          loadingText="Submitting..."
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}
