import React from "react";
import { Button, Link } from "@heroui/react";
import { FiMapPin, FiClock, FiDollarSign, FiArrowRight } from "react-icons/fi";

export default function FeaturedJobs() {
  // Static array containing diverse tech roles to populate the pixel-perfect layout grid
  const jobs = [
    {
      title: "Backend Engineer",
      desc: "Design, build, and maintain highly scalable core server-side applications, data pipelines, and robust system APIs.",
      location: "San Francisco, USA",
      type: "Full-Time",
      salary: "$120k–$150k/year",
    },
    {
      title: "DevOps Specialist",
      desc: "Automate infrastructure provisioning, optimize continuous deployment pipelines, and maintain high system availability.",
      location: "Remote, Global",
      type: "Full-Time",
      salary: "$130k–$160k/year",
    },
    {
      title: "Data Scientist",
      desc: "Leverage advanced statistical modeling, machine learning algorithms, and deep analytics to extract critical business insights.",
      location: "London, UK",
      type: "Hybrid",
      salary: "£75k–£95k/year",
    },
    {
      title: "Product Designer",
      desc: "Craft intuitive design systems, interactive web user flows, and modern wireframe experiences driven by user research.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$110k–$140k/year",
    },
    {
      title: "Cybersecurity Analyst",
      desc: "Implement defense layers, manage risk strategies, monitor vulnerability assessments, and mitigate enterprise security threads.",
      location: "Berlin, DE",
      type: "Full-Time",
      salary: "€80k–€100k/year",
    },
    {
      title: "AI Prompt Engineer",
      desc: "Optimize natural language generation models, configure model tokens, and guide semantic structures for specialized internal software.",
      location: "Austin, USA",
      type: "Remote",
      salary: "$115k–$145k/year",
    },
  ];

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
          The roles you'd never find by searching
        </h2>

        {/* 🎴 Job Cards Structural Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] hover:border-gray-200/60 transition-all duration-300 flex flex-col justify-between min-h-[310px]"
            >
              <div>
                {/* Job Card Title */}
                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                  {job.title}
                </h3>

                {/* Job Card Description Paragraph */}
                <p className="text-[14px] text-gray-400 font-normal leading-relaxed mb-6 line-clamp-3">
                  {job.desc}
                </p>

                {/* 🏷️ Meta Data Pills Wrapper Layout */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {/* Location Meta Label */}
                  <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                    <FiMapPin className="text-gray-400 text-xs shrink-0" />
                    <span className="text-xs font-semibold text-gray-500">
                      {job.location}
                    </span>
                  </div>

                  {/* Workplace Configuration Meta Label */}
                  <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                    <FiClock className="text-gray-400 text-xs shrink-0" />
                    <span className="text-xs font-semibold text-gray-500">
                      {job.type}
                    </span>
                  </div>

                  {/* Compensation / Salary Meta Label */}
                  <div className="inline-flex items-center gap-1.5 bg-purple-50/50 border border-purple-100/40 px-3 py-1.5 rounded-full">
                    <FiDollarSign className="text-purple-500 text-xs shrink-0" />
                    <span className="text-xs font-semibold text-purple-600/90">
                      {job.salary}
                    </span>
                  </div>
                </div>
              </div>

              {/* ➡️ Action Link Layer */}
              <div className="pt-2 border-t border-gray-50/60">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[14px] font-bold text-gray-800 hover:text-[#5b4eff] transition-colors group cursor-pointer"
                >
                  Apply Now
                  <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 🎛️ Bottom Centered Main CTA Callout Button */}
        <Button
          as={Link}
          href="#"
          className="bg-white border border-gray-200 text-gray-800 font-bold text-[14px] px-8 h-12 rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          View all job open
        </Button>
      </div>
    </section>
  );
}
