"use client";
import React from "react";
import { Card } from "@heroui/react";
import { FiFileText, FiUsers, FiZap, FiCheckCircle } from "react-icons/fi";

export default function RecruiterStats() {
  // Array of data mapped exactly from your design
  const statsData = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: <FiFileText className="text-zinc-500 text-sm" />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <FiUsers className="text-zinc-500 text-sm" />,
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: <FiZap className="text-zinc-500 text-sm" />,
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: <FiCheckCircle className="text-zinc-500 text-sm" />,
    },
  ];

  return (
    /* ☀️ Outer wrapper set to a clean, soft light mode background canvas */
    <div className="w-full py-8">
      {/* Responsive Core Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {statsData.map((stat, idx) => (
          <Card
            key={idx}
            className="bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="p-6 flex flex-col justify-between h-38 w-full">
              {/* ☀️ Top Row: Light gray squared icon badge container */}
              <div className="w-9 h-9 flex items-center justify-center bg-zinc-100 border border-zinc-200 rounded-lg">
                {stat.icon}
              </div>

              {/* Bottom Text Stack Block */}
              <div className="flex flex-col gap-1">
                {/* ☀️ Muted slate text for titles */}
                <span className="text-zinc-500 text-xs font-medium tracking-wide">
                  {stat.title}
                </span>
                {/* ☀️ Rich off-black color for values */}
                <span className="text-zinc-900 text-2xl font-bold tracking-tight">
                  {stat.value}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
