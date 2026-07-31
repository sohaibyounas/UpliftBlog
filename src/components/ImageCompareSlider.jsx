"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { TbArrowsHorizontal } from "react-icons/tb";

export default function ImageCompareSlider({ beforeImg, afterImg }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.min(100, Math.max(0, percent));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsAnimating(false);
    updatePosition(e.clientX ?? e.touches?.[0]?.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      updatePosition(clientX);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [updatePosition]);

  const showBeforePill = sliderPos > 4;
  const showAfterPill = sliderPos < 96;

  const transitionClass = isAnimating
    ? "transition-all duration-500 ease-out"
    : "";

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden select-none cursor-default"
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    >
      {/* Before image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImg}
          alt="Before photo"
          fill
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* After image */}
      <div
        className={`absolute inset-0 ${transitionClass}`}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={afterImg}
          alt="After photo"
          fill
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className={`absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none ${transitionClass}`}
        style={{ left: `${sliderPos}%` }}
      />

      {/* Drag handle */}
      <div
        className={`absolute top-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md -translate-x-1/2 -translate-y-1/2 pointer-events-none ${transitionClass}`}
        style={{ left: `${sliderPos}%` }}
      >
        <TbArrowsHorizontal className="text-[#232323] text-[18px]" />
      </div>

      {/* Before pill */}
      <div
        className={`absolute bottom-3 left-3 w-[62px] h-[24px] rounded-full py-[2px] px-[10px] flex items-center justify-center text-white text-[12px] font-medium z-10 bg-[#FB3748] pointer-events-none transition-opacity duration-300 ${
          showBeforePill ? "opacity-100" : "opacity-0"
        }`}
      >
        Before
      </div>

      {/* After pill */}
      <div
        className={`absolute bottom-3 right-3 w-[62px] h-[24px] rounded-full py-[2px] px-[10px] flex items-center justify-center text-white text-[12px] font-medium z-10 bg-[#099742] pointer-events-none transition-opacity duration-300 ${
          showAfterPill ? "opacity-100" : "opacity-0"
        }`}
      >
        After
      </div>
    </div>
  );
}
