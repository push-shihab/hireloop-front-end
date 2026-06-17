"use client";

import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import {
  FiCheck,
  FiBriefcase,
  FiZap,
  FiAward,
  FiTrendingUp,
  FiLayers,
  FiPieChart,
} from "react-icons/fi";
import PricingFAQ from "./PricingFAQ"; // Importing your new component

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("seekers");

  const jobSeekerPlans = [
    {
      name: "Free",
      id: "seeker_free",
      price: "$0",
      subtext: "forever",
      description:
        "Browse roles and launch your introductory applications profile.",
      icon: <FiBriefcase className="text-gray-500 text-lg" />,
      iconBg: "bg-gray-50 border-gray-100",
      isPopular: false,
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic candidate profile footprint",
        "Automated direct email alerts",
      ],
    },
    {
      name: "Pro",
      id: "seeker_pro",
      price: "$9.99",
      subtext: "/month",
      description:
        "Expand your pipeline bandwidth with tracking and insights tools.",
      icon: <FiTrendingUp className="text-[#5b4eff] text-lg" />,
      iconBg: "bg-indigo-50 border-indigo-100/50",
      isPopular: true,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs pipeline",
        "Advanced application tracking history",
        "Verified platform salary insights",
      ],
    },
    {
      name: "Premium",
      id: "seeker_premium",
      price: "$15.99",
      subtext: "/month",
      description:
        "Maximum application visibility and direct priority routing tags.",
      icon: <FiZap className="text-amber-500 text-lg" />,
      iconBg: "bg-amber-50 border-amber-100/50",
      isPopular: false,
      features: [
        "Everything included in Pro tier",
        "Unlimited job applications layout",
        "Profile boost visibility to recruiters",
        "Early access tokens to brand new jobs",
        "Priority 24/7 client support routing",
      ],
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      id: "recruiter_free",
      price: "$0",
      subtext: "forever",
      description:
        "Great for an emerging company's first baseline year of scaling.",
      icon: <FiLayers className="text-gray-500 text-lg" />,
      iconBg: "bg-gray-50 border-gray-100",
      isPopular: false,
      features: [
        "Up to 3 active job posts tracking",
        "Basic structural applicant management",
        "Standard public listing directory visibility",
      ],
    },
    {
      name: "Pro",
      id: "recruiter_pro",
      price: "$24.99",
      subtext: "/month",
      description:
        "Expand team sourcing capabilities with comprehensive analytics layers.",
      icon: <FiPieChart className="text-[#5b4eff] text-lg" />,
      iconBg: "bg-indigo-50 border-indigo-100/50",
      isPopular: true,
      features: [
        "Up to 10 active job posts tracking",
        "Full lifecycle applicant tracking pipeline",
        "Basic performance data analytics dashboard",
        "Direct email priority system support",
      ],
    },
    {
      name: "Premium",
      id: "recruiter_premium",
      price: "$40.00",
      subtext: "/month",
      description:
        "Full-scale sourcing operations with premium branding and alignment.",
      icon: <FiAward className="text-amber-500 text-lg" />,
      iconBg: "bg-amber-50 border-amber-100/50",
      isPopular: false,
      features: [
        "Up to 50 active job posts tracking",
        "Advanced custom analytics data dashboard",
        "Featured job tier listings amplification",
        "Cross-team multi-seat collaboration tools",
        "Custom workspace branding profiles",
        "Dedicated VIP priority system support",
      ],
    },
  ];

  const activePlans = activeTab === "seekers" ? jobSeekerPlans : recruiterPlans;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8f9ff] to-[#fafafa] py-24 px-4 md:px-8 overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-indigo-200/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[#5b4eff] rounded-full animate-pulse" />
            <p className="text-[11px] font-black uppercase tracking-widest text-[#5b4eff]">
              Subscription Tiers
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight text-gray-900 leading-[1.15]">
            Pay for the leverage, <br />
            not the listings
          </h2>
        </div>

        {/* Dynamic Interactive Tabs Toggle */}
        <div className="p-1.5 bg-gray-200/50 border border-gray-200/30 rounded-2xl shadow-inner inline-flex items-center gap-1 select-none">
          <button
            onClick={() => setActiveTab("seekers")}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
              activeTab === "seekers"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            For Job Seekers
          </button>
          <button
            onClick={() => setActiveTab("recruiters")}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
              activeTab === "recruiters"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            For Recruiters
          </button>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {activePlans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-6 md:p-8 bg-white border flex flex-col justify-between rounded-[32px] transition-all duration-300 relative ${
                plan.isPopular
                  ? "border-[#5b4eff] shadow-[0_20px_50px_rgba(91,78,255,0.06)] scale-[1.02] z-10"
                  : "border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)]"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest bg-[#5b4eff] text-white px-4 py-1 rounded-full shadow-md">
                  Most Popular choice
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${plan.iconBg}`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-base font-black tracking-tight text-gray-900">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline text-gray-900">
                    <span className="text-3xl font-black font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 font-mono pl-0.5 tracking-tight">
                      {plan.subtext}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 min-h-[32px]">
                  {plan.description}
                </p>
                <div className="w-full h-px bg-gray-50 mb-6" />

                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mt-0.5 shrink-0">
                        <FiCheck className="text-[10px] font-bold" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <form action="/api/checkout_sessions" method="POST">
                  <input type="hidden" name="plan_id" value={plan.id} />
                  <section>
                    <button
                      type="submit"
                      role="link"
                      className={`w-full font-bold text-xs h-11 rounded-xl transition-all duration-200 cursor-pointer ${
                        plan.isPopular
                          ? "bg-gray-900 text-white hover:bg-black shadow-md"
                          : "bg-gray-50 text-gray-700 border border-gray-200/60 hover:bg-gray-100"
                      }`}
                    >
                      {plan.name === "Free"
                        ? "Activate Free Access"
                        : "Upgrade Account Tier"}
                    </button>
                  </section>
                </form>
              </div>
            </Card>
          ))}
        </div>

        {/* Render New Decoupled Accordion Component */}
        <PricingFAQ />
      </div>
    </section>
  );
}
