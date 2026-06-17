"use client";

import React, { useState } from "react";
import { FiHelpCircle, FiPlus, FiMinus } from "react-icons/fi";

const faqItems = [
  {
    question: "Can I cancel my subscription whenever I want?",
    answer:
      "Absolutely. You can downgrade or cancel your subscription plan at any point directly from your dashboard billing tab settings with a single click. Your active features remain fully unlocked until the end of the current billing cycle.",
  },
  {
    question: "How do plan refunds work?",
    answer:
      "We offer a fully guaranteed 14-day window for complete refunds on subscription activations if our systems do not suit your active workflow environment. Reach out to our billing support team.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, and American Express, along with Apple Pay and Google Pay through our encrypted PCI-DSS secure pipeline.",
  },
  {
    question: "Can I switch between Job Seeker and Recruiter plans?",
    answer:
      "Accounts are tied to a single role — job seeker or recruiter — to keep your data clean. If you need both, register a second account or update your role via account settings.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`
        group border rounded-2xl overflow-hidden transition-all duration-200
        ${
          isOpen
            ? "border-[#5b4eff]/30 bg-[#5b4eff]/[0.03] shadow-[0_0_0_1px_rgba(91,78,255,0.12)]"
            : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4eff]/50 focus-visible:ring-offset-1 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold tracking-tight transition-colors duration-150 ${
            isOpen
              ? "text-[#5b4eff]"
              : "text-gray-800 group-hover:text-gray-900"
          }`}
        >
          {question}
        </span>
        <span
          className={`
            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200
            ${
              isOpen
                ? "bg-[#5b4eff] text-white rotate-0"
                : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
            }
          `}
        >
          {isOpen ? (
            <FiMinus size={11} strokeWidth={2.5} />
          ) : (
            <FiPlus size={11} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Answer — only rendered when open */}
      <div
        className={`
          grid transition-all duration-200 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-xs leading-relaxed text-gray-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl pt-12 border-t border-gray-100 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#5b4eff]/10 flex items-center justify-center mt-0.5">
          <FiHelpCircle className="text-[#5b4eff]" size={17} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-black tracking-tight text-gray-900">
            Frequently asked questions
          </h3>
          <p className="text-xs text-gray-400 max-w-sm">
            Everything you need to know about billing, cancellations, and
            switching plans.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-2.5">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Footer nudge */}
      <p className="text-xs text-gray-400 text-center sm:text-left">
        Still have questions?{" "}
        <a
          href="#"
          className="text-[#5b4eff] font-medium hover:underline underline-offset-2"
        >
          Talk to our support team →
        </a>
      </p>
    </div>
  );
}
