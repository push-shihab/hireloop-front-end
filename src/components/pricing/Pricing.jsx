import React from "react";
import Image from "next/image";
import { Button, Link } from "@heroui/react";
import {
  FiPlus,
  FiArrowRight,
  FiActivity,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      icon: <FiActivity className="text-pink-500 text-lg" />,
      iconBg: "bg-pink-50 border-pink-100/50",
      price: "$0",
      isPopular: false,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Growth",
      icon: <FiTrendingUp className="text-[#5b4eff] text-lg" />,
      iconBg: "bg-indigo-50 border-indigo-100/50",
      price: "$17",
      isPopular: true, // Marked as white/highlighted CTA button in the image
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Premium",
      icon: <FiZap className="text-amber-500 text-lg" />,
      iconBg: "bg-amber-50 border-amber-100/50",
      price: "$99",
      isPopular: false,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#fafafa] py-24 px-4 md:px-6 overflow-hidden flex flex-col items-center">
      {/* ✨ Ambient Light Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Core Component Block Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* 🟪 Small Tag Category Label */}
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#5b4eff]">
            Pricing
          </p>
          <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-xs" />
        </div>

        {/* 🎯 Section Headline Display */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-gray-900 text-center max-w-2xl leading-[1.15] mb-8">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* 🎛️ Static Layout Toggle Segment Bar */}
        <div className="inline-flex items-center p-1.5 bg-gray-200/60 border border-gray-200/30 rounded-full mb-16 shadow-inner select-none">
          <span className="bg-white text-gray-900 font-bold text-xs px-5 py-2.5 rounded-full shadow-xs">
            Monthly
          </span>
          <div className="flex items-center gap-1.5 pl-4 pr-3 py-2 cursor-pointer">
            <span className="text-gray-400 font-bold text-xs hover:text-gray-600 transition-colors">
              Yearly
            </span>
            <span className="bg-[#ff2aa4] text-white font-extrabold text-[9px] px-2 py-0.5 rounded-full tracking-wide">
              25%
            </span>
          </div>
        </div>

        {/* 🃏 Price Comparison Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white border p-8 rounded-3xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_-10px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[460px] ${
                plan.isPopular
                  ? "border-gray-300 ring-4 ring-gray-100/50"
                  : "border-gray-100"
              }`}
            >
              <div>
                {/* Card Title Header Layout Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${plan.iconBg}`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-gray-900">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Frame Configuration Display */}
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl md:text-[34px] font-black tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 tracking-tight">
                      /month
                    </span>
                  </div>
                </div>

                {/* Mid Divider Line */}
                <p className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">
                  Start building your insights hub:
                </p>

                {/* 📋 Features Grid Bullet Rows */}
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 mt-0.5 shrink-0 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors">
                        <FiPlus className="text-xs" />
                      </div>
                      <span className="text-[14px] text-gray-500 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🎛️ Action Button Bottom Wrapper Block */}
              <div className="pt-2">
                <Button
                  as={Link}
                  href="#"
                  className={`w-full font-bold text-[14px] h-12 rounded-xl transition-all duration-200 border ${
                    plan.isPopular
                      ? "bg-gray-900 text-white border-transparent hover:bg-black shadow-md shadow-gray-900/10"
                      : "bg-gray-50 text-gray-700 border-gray-200/70 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                  endContent={<FiArrowRight className="text-sm" />}
                >
                  Choose This Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
