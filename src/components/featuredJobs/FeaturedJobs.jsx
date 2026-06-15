import React from "react";
import { Button, Link } from "@heroui/react";
import ShowJobs from "./ShowJobs";

export default function FeaturedJobs() {
  // Static array containing diverse tech roles to populate the pixel-perfect layout grid
  const jobs = [
    {
      name: "Backend Engineer",
      responsibilities:
        "Design, build, and maintain highly scalable core server-side applications, data pipelines, and robust system APIs.",
      location: "San Francisco, USA",
      type: "Full-Time",
      salary: "$120k–$150k/year",
    },
    {
      name: "DevOps Specialist",
      responsibilities:
        "Automate infrastructure provisioning, optimize continuous deployment pipelines, and maintain high system availability.",
      location: "Remote, Global",
      type: "Full-Time",
      salary: "$130k–$160k/year",
    },
    {
      name: "Data Scientist",
      responsibilities:
        "Leverage advanced statistical modeling, machine learning algorithms, and deep analytics to extract critical business insights.",
      location: "London, UK",
      type: "Hybrid",
      salary: "£75k–£95k/year",
    },
    {
      name: "Product Designer",
      responsibilities:
        "Craft intuitive design systems, interactive web user flows, and modern wireframe experiences driven by user research.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$110k–$140k/year",
    },
    {
      name: "Cybersecurity Analyst",
      responsibilities:
        "Implement defense layers, manage risk strategies, monitor vulnerability assessments, and mitigate enterprise security threads.",
      location: "Berlin, DE",
      type: "Full-Time",
      salary: "€80k–€100k/year",
    },
    {
      name: "AI Prompt Engineer",
      responsibilities:
        "Optimize natural language generation models, configure model tokens, and guide semantic structures for specialized internal software.",
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
          The roles you&apos;d never find by searching
        </h2>

        {/* 🎴 Job Cards Structural Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {jobs.map((job, i) => (
            <ShowJobs job={job} key={i}></ShowJobs>
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
