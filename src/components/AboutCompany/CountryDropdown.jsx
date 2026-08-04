"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { countryOptions, flagUrl } from "@/hooks/countries";

export default function CountryDropdown({ selected, onSelect, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryOptions.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelect = (country) => {
    onSelect(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-[14px] font-medium text-[#4F4F4F] uppercase">
          Country <span className="text-red-500 font-bold"> *</span>
        </label>
        {error && (
          <span className="text-[12px] text-red-500 font-semibold">{error}</span>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[56px] px-3 rounded-[16px] border bg-white flex items-center justify-between outline-none transition-colors ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-[#191919]/14 focus:border-black"
        }`}
      >
        <span className="flex items-center gap-[10px] text-[#4F4F4F] text-[14px] font-medium leading-[22px]">
          {selected ? (
            <>
              <img
                src={flagUrl(selected.value)}
                alt={selected.label}
                className="w-6 h-6 object-cover rounded-full shrink-0"
              />
              <span className="text-[#4F4F4F] font-medium">{selected.label}</span>
            </>
          ) : (
            <span className="text-[#191919]/40">Detecting your country...</span>
          )}
        </span>
        <FiChevronDown
          className={`w-5 h-5 text-[#191919]/60 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <div className="flex items-center gap-2 border-2 border-[#95EA00] rounded-lg px-2 py-1.5 focus-within:border-[#74D800] transition-colors">
              <FiSearch className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm py-1 outline-none text-gray-700 bg-transparent"
                autoFocus
              />
            </div>
          </div>

          <ul className="max-h-56 overflow-y-auto py-1">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li
                  key={country.value}
                  onClick={() => handleSelect(country)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#4F4F4F] cursor-pointer hover:bg-gray-50 ${
                    selected?.value === country.value
                      ? "bg-gray-50 font-semibold"
                      : ""
                  }`}
                >
                  <img
                    src={flagUrl(country.value)}
                    alt={country.label}
                    className="w-6 h-6 object-cover rounded-full shrink-0"
                  />
                  <span>{country.label}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-400">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
