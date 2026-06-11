import React from "react";
import { Link } from "@heroui/react";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function Footer() {
  // Navigation links structured exactly like the footer image columns
  const links = {
    product: [
      { name: "Job discovery", href: "#" },
      { name: "Worker AI", href: "#" },
      { name: "Companies", href: "#" },
      { name: "Salary data", href: "#" },
    ],
    navigations: [
      { name: "Help center", href: "#" },
      { name: "Career library", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Brand Guideline", href: "#" },
      { name: "Newsroom", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#fafafa] border-t border-gray-200/60 pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* 🗺️ Main Top Links and Info Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          {/* Brand Info Block Column (Takes 5 slots out of 12 on desktop) */}
          <div className="md:col-span-5 flex flex-col items-start max-w-sm">
            {/* Logo Layout Header Wrapper */}
            <div className="flex items-center gap-2 mb-6 select-none font-black text-2xl tracking-tight text-gray-900">
              <Image src={logo} alt="HireLoop Logo"></Image>
            </div>

            {/* Brand Descriptive Summary Text */}
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Desktop Whitespace Filler Column Layout Block (Takes 1 spacer slot) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Column 1: Product links */}
          <div className="grid grid-cols-3 gap-6 col-span-12 md:col-span-6">
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold text-[#5b4eff] tracking-wide uppercase">
                Product
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.product.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Navigations links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold text-[#5b4eff] tracking-wide uppercase">
                Navigations
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.navigations.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold text-[#5b4eff] tracking-wide uppercase">
                Resources
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.resources.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors font-medium block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 📝 Bottom Utility & Trademark Metadata Row Layout */}
        <div className="pt-8 border-t border-gray-200/50 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* 👥 Social Networking Group List */}
          <div className="flex items-center gap-3">
            {/* Facebook Action Link */}
            <Link
              href="#"
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 flex items-center justify-center transition-all shadow-2xs"
            >
              <FaFacebookF className="text-sm" />
            </Link>

            {/* Pinterest Action Link */}
            <Link
              href="#"
              className="w-9 h-9 rounded-xl bg-[#5b4eff] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
            >
              <FaPinterestP className="text-sm" />
            </Link>

            {/* LinkedIn Action Link */}
            <Link
              href="#"
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-blue-700 hover:border-blue-200 flex items-center justify-center transition-all shadow-2xs"
            >
              <FaLinkedinIn className="text-sm" />
            </Link>
          </div>

          {/* 🏷️ Trademark and Rights Block Container */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs font-semibold text-gray-400">
            <p>© 2026 HireLoop. All rights reserved.</p>
            <Link
              href="#"
              className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors"
            >
              Terms & Policy
            </Link>
            <Link
              href="#"
              className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
