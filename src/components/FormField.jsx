import React from "react";

export default function FormField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = true,
  ...rest
}) {
  return (
    <div>
      <div className="flex justify-between items-center gap-2 mb-2">
        <label className="block text-[10px] sm:text-[14px] font-medium text-[#191919] uppercase whitespace-nowrap">
          {label}{" "}
          {required && <span className="text-red-500 font-bold"> *</span>}
        </label>
        {error && (
          <span className="text-[9px] sm:text-[12px] text-red-500 font-medium">
            {error}
          </span>
        )}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className={`w-full h-[46px] px-3 rounded-[16px] border bg-white outline-none transition-colors text-[16px] text-[#191919] placeholder:text-[#191919]/40 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-[#191919]/14 focus:border-black"
        }`}
      />
    </div>
  );
}
