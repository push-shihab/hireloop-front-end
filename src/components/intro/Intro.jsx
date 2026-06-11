import React from "react";
import { Button } from "@heroui/react";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="w-full overflow-hidden bg-[#fafafa] pt-30 pb-16 px-4 md:px-6 min-h-100 flex flex-col items-center justify-start">
      {/* Hero Content Wrapper */}
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* 🧳 Pill Badge: "50,000+ New Jobs This Month" */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-4 py-2 border border-gray-200/80 rounded-full shadow-xs mb-8 transition-transform duration-300 hover:scale-[1.02]">
          <FiBriefcase className="text-[#f5a623] text-sm" />
          <span className="text-xs font-bold tracking-tight text-gray-900">
            50,000+
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
            New Jobs This Month
          </span>
        </div>

        {/* 🚀 Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 max-w-3xl leading-[1.1] mb-6">
          Find Your Dream Job Today
        </h1>

        {/* 📄 Descriptive Sub-headline */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl font-normal leading-relaxed mb-10 px-2">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* 🔍 Dynamic Search Container Bar */}
        <div className="w-full max-w-3xl bg-white border border-gray-200/80 rounded-2xl md:rounded-full p-2 pl-4 pr-2 shadow-md hover:shadow-lg hover:border-gray-300 transition-all duration-300 mb-8 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0">
          {/* Field 1: Job Title */}
          <div className="flex items-center gap-3 flex-1 py-1 md:py-0">
            <FiSearch className="text-gray-400 text-lg shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              disabled
              className="w-full bg-transparent text-sm font-medium text-gray-800 placeholder-gray-400 outline-hidden border-none cursor-not-allowed"
            />
          </div>

          {/* Desktop Inline Visual Separation Line */}
          <div className="hidden md:block h-6 w-px bg-gray-200 mx-4" />

          {/* Field 2: Location */}
          <div className="flex items-center gap-3 flex-1 border-t border-gray-100 pt-3 md:pt-0 md:border-t-0 py-1 md:py-0">
            <FiMapPin className="text-gray-400 text-lg shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              disabled
              className="w-full bg-transparent text-sm font-medium text-gray-800 placeholder-gray-400 outline-hidden border-none cursor-not-allowed"
            />
          </div>

          {/* Search Button Utility */}
          <Button
            isIconOnly
            radius="full"
            className="bg-linear-to-r from-[#635bff] to-[#4c40ff] text-white shadow-md hover:opacity-95 h-11 w-full md:w-11 min-w-11 mt-2 md:mt-0"
          >
            <FiSearch className="text-lg" />
          </Button>
        </div>

        {/* 🏷️ Trending Badges Section */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 px-4">
          <span className="text-[13px] font-semibold text-gray-400 mr-1.5">
            Trending Position
          </span>

          <span className="text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-xs cursor-pointer select-none transition-colors">
            Product Designer
          </span>

          <span className="text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-xs cursor-pointer select-none transition-colors">
            AI Engineering
          </span>

          <span className="text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-xs cursor-pointer select-none transition-colors">
            Dev-ops Engineer
          </span>
        </div>
      </div>
    </section>
  );
}
