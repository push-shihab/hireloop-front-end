import React from "react";
import { FiBriefcase, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";

export default function Purpose() {
  return (
    <section className="w-full bg-[#fafafa] pt-75 pb-24 px-4 md:px-6 overflow-hidden flex flex-col items-center">
      {/* 📋 Section Floating Context Typography - Placed perfectly over the globe lower margins */}
      <div className="z-30 max-w-2xl mx-auto text-center px-4 -mt-16 sm:-mt-24 md:-mt-32 mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold tracking-tight text-black leading-[1.25]">
          Assisting over{" "}
          <span className="text-[#5b4eff] font-black underline">
            15,000 job seekers
          </span>{" "}
          <br className="hidden sm:inline" />
          find their dream positions.
        </h2>
      </div>

      {/* 📊 High-Contrast Layout Metrics Cards Grid */}
      <div className="z-30 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Active Jobs */}
        <div className="bg-white border border-gray-100/90 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[190px]">
          <div className="w-11 h-11 rounded-2xl bg-blue-50/70 border border-blue-100/50 flex items-center justify-center text-blue-600">
            <FiBriefcase className="text-xl" />
          </div>
          <div>
            <h3 className="text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-3">
              50K
            </h3>
            <p className="text-[13px] font-semibold text-gray-400 tracking-wide">
              Active Jobs
            </p>
          </div>
        </div>

        {/* Card 2: Companies */}
        <div className="bg-white border border-gray-100/90 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[190px]">
          <div className="w-11 h-11 rounded-2xl bg-purple-50/70 border border-purple-100/50 flex items-center justify-center text-purple-600">
            <FiTrendingUp className="text-xl" />
          </div>
          <div>
            <h3 className="text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-3">
              12K
            </h3>
            <p className="text-[13px] font-semibold text-gray-400 tracking-wide">
              Companies
            </p>
          </div>
        </div>

        {/* Card 3: Job Seekers */}
        <div className="bg-white border border-gray-100/90 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[190px]">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50/70 border border-emerald-100/50 flex items-center justify-center text-emerald-600">
            <FiUsers className="text-xl" />
          </div>
          <div>
            <h3 className="text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-3">
              2M
            </h3>
            <p className="text-[13px] font-semibold text-gray-400 tracking-wide">
              Job Seekers
            </p>
          </div>
        </div>

        {/* Card 4: Satisfaction Rate */}
        <div className="bg-white border border-gray-100/90 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[190px]">
          <div className="w-11 h-11 rounded-2xl bg-amber-50/70 border border-amber-100/50 flex items-center justify-center text-amber-600">
            <FiAward className="text-xl" />
          </div>
          <div>
            <h3 className="text-4xl md:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-3">
              97%
            </h3>
            <p className="text-[13px] font-semibold text-gray-400 tracking-wide">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
