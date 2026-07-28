import React from "react";
import { LuChevronsRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function CustomButton({
  text,
  variant = "dark",
  fullWidth = false,
  className = "",
  onClick,
  icon,
  ...props
}) {
  const baseButtonStyles =
    "flex items-center gap-3 rounded-full text-[15px] transition-colors focus:outline-none";

  const variants = {
    dark: "bg-black text-white hover:bg-gray-900 p-[6px] pl-6",
    primary: "bg-[#95EA00] text-[#18181b] hover:bg-[#85d400] p-[6px] pl-6",
    outline:
      "border-2 border-[#DCDCDC] hover:bg-gray-50 py-[6px] pl-[10px] pr-[5px] gap-2",
    green:
      "bg-[#8EFF0A] border-2 border-[#74D800] hover:bg-[#7ce600] px-[10px] py-[3px] gap-2",
    white:
      "bg-white border-2 border-[#C6C6C6] hover:bg-gray-50 px-[10px] py-[3px] gap-2",
    black: "bg-black border-none hover:bg-gray-900 px-[10px] py-[3px] gap-2",
  };

  const iconVariants = {
    dark: "bg-[#95EA00] text-black w-8 h-8",
    primary: "bg-[#18181b] text-white w-8 h-8",
    outline:
      "bg-[#232323] text-white w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]",
    green: "bg-[#191919] text-white w-8 h-8",
    white: "bg-transparent w-8 h-8",
    black: "bg-[#93FF16] text-black w-8 h-8",
  };

  const textVariants = {
    dark: "text-white font-bold",
    primary: "text-[#18181b] font-bold",
    outline: "text-[16px] font-semibold text-[#232323]",
    green: "text-[#232323] text-[16px] font-semibold",
    white: "text-[#232323] text-[16px] font-semibold",
    black: "text-white text-[16px] font-semibold",
  };

  const iconSizeVariants = {
    dark: "w-4 h-4",
    primary: "w-4 h-4",
    outline: "text-[16px] sm:text-[24px] text-white",
    green: "w-4 h-4",
    white: "w-4 h-4",
    black: "w-4 h-4",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        clsx(
          baseButtonStyles,
          variants[variant],
          fullWidth ? "w-full justify-between" : "inline-flex",
        ),
        className,
      )}
      {...props}
    >
      <span className={`${textVariants[variant]}`}>{text}</span>

      <div
        className={`rounded-full flex items-center justify-center shrink-0 transition-colors ${iconVariants[variant]}`}
      >
        {icon ?? <LuChevronsRight className={iconSizeVariants[variant]} />}
      </div>
    </button>
  );
}
