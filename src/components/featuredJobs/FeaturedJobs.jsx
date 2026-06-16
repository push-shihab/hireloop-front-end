import React from "react";
import { Button, Link } from "@heroui/react";
import ShowJobs from "./ShowJobs";
import { getAllJobs } from "@/utils/api/jobs";

export default async function FeaturedJobs() {
  const allJobs = (await getAllJobs()) || [];
  return (
    <section className="w-full bg-[#fafafa] py-24 px-4 md:px-6 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* 🟪 Small Upper Tracker Category Badge */}
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#5b4eff]">
            Smart Job Discovery
          </p>
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
        </div>

        {/* 🎯 Main Headline Display */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-gray-900 text-center max-w-2xl leading-[1.15] mb-16">
          The roles you&apos;d never find by searching
        </h2>

        {/* 🎴 Job Cards Structural Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {allJobs.slice(0, 6).map((job, i) => (
            <ShowJobs job={job} key={i}></ShowJobs>
          ))}
        </div>

        {/* 🎛️ Bottom Centered Main CTA Callout Button */}
        <Link
          href="/jobs"
          className="bg-white border border-gray-200 text-gray-800 font-bold text-[14px] px-8 h-12 rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 no-underline"
        >
          View all job open
        </Link>
      </div>
    </section>
  );
}
