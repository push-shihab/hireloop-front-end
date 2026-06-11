import React from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiBriefcase,
  FiBookmark,
  FiMousePointer,
  FiFileText,
  FiHexagon,
  FiZap,
} from "react-icons/fi";

export default function JobFeatures() {
  // Static dataset mapping out the exact 8 features from the image layout
  const features = [
    {
      icon: <FiSearch className="text-xl" />,
      title: "Smart Search",
      desc: "Find your ideal job with advanced filters.",
      colorClass: "text-blue-600 bg-blue-50/70 border-blue-100/50",
    },
    {
      icon: <FiTrendingUp className="text-xl" />,
      title: "Salary Insights",
      desc: "Get real salary data to negotiate confidently.",
      colorClass: "text-purple-600 bg-purple-50/70 border-purple-100/50",
    },
    {
      icon: <FiBriefcase className="text-xl" />,
      title: "Top Companies",
      desc: "Apply to vetted companies that are hiring.",
      colorClass: "text-indigo-600 bg-indigo-50/70 border-indigo-100/50",
    },
    {
      icon: <FiBookmark className="text-xl" />,
      title: "Saved Jobs",
      desc: "Manage apps & favorites on your dashboard.",
      colorClass: "text-pink-600 bg-pink-50/70 border-pink-100/50",
    },
    {
      icon: <FiMousePointer className="text-xl" />,
      title: "One-Click Apply",
      desc: "Simplify your job applications for an easier process!",
      colorClass: "text-amber-600 bg-amber-50/70 border-amber-100/50",
    },
    {
      icon: <FiFileText className="text-xl" />,
      title: "Resume Builder",
      desc: "Create professional resumes with modern templates.",
      colorClass: "text-emerald-600 bg-emerald-50/70 border-emerald-100/50",
    },
    {
      icon: <FiHexagon className="text-xl" />,
      title: "Skill-Based Matching",
      desc: "Discover jobs that match your skills and experience.",
      colorClass: "text-cyan-600 bg-cyan-50/70 border-cyan-100/50",
    },
    {
      icon: <FiZap className="text-xl" />,
      title: "Career Growth Resources",
      desc: "Boost your career with quick interview tips.",
      colorClass: "text-orange-600 bg-orange-50/70 border-orange-100/50",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-6 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* 🟪 Category Indicator Pill Badge */}
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#5b4eff]">
            Features Job
          </p>
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
        </div>

        {/* 🎯 Main Grid Title Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-gray-900 text-center max-w-2xl leading-[1.15] mb-20">
          Everything you need <br /> to succeed
        </h2>

        {/* 📋 Features Grid Structure (Responsive 1-col -> 2-col -> 4-col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 group hover:translate-y-[-2px] transition-transform duration-300"
            >
              {/* 🎴 Feature Icon Wrapper Box */}
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] ${item.colorClass}`}
              >
                {item.icon}
              </div>

              {/* 📝 Content Metadata Column */}
              <div className="flex flex-col">
                <h3 className="text-[16px] font-bold text-gray-900 tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
