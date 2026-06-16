import React from "react";
import { getAllJobs } from "@/utils/api/jobs";
import FilteredJobsClient from "./FilteredJobsClient";

export default async function AllJobsPage() {
  const allJobs = (await getAllJobs()) || [];

  return (
    <section className="w-full bg-[#fafafa] py-24 px-4 md:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        {/* Upper Category Badge Indicator */}
        <div className="flex items-center justify-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#5b4eff]">
            Exploration Dashboard
          </p>
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
        </div>

        {/* 🎯 Headline Banner Section */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-gray-900 text-center max-w-2xl leading-[1.15] mx-auto mb-16">
          Explore All Verified Career Ecosystems
        </h1>

        {/* ⚙️ Pass pure server data directly to the client layer */}
        <FilteredJobsClient initialJobs={allJobs} />
      </div>
    </section>
  );
}
