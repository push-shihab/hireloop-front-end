import React from "react";
import Image from "next/image";
import { Button, Link } from "@heroui/react";
import ctaBg from "../../../public/images/cta-bg.png";

export default function FooterCTA() {
  return (
    <section className="relative w-full bg-[#fafafa] pt-70 pb-28 px-4 md:px-6 flex flex-col items-center">
      {/* 🌐 Perspective Grid Mesh Background Overlay */}
      <div className="absolute top-0 opacity-45 mix-blend-multiply w-full h-full flex items-center justify-center">
        <Image
          src={ctaBg}
          alt="Perspective Wireframe Grid Curve"
          className="w-auto h-auto object-cover object-top filter grayscale invert"
          fill
        />
        {/* Soft, beautiful radial light-blue atmosphere glowing from beneath the grid dome */}
        <div className="absolute top-[10%] w-[75%] h-[150px] bg-indigo-500/10 rounded-full blur-[70px] z-0" />
      </div>

      {/* Ambient Top Blend Shield — prevents harsh layout borders from leaking into preceding sections */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fafafa] to-transparent z-20" />

      {/* 🎯 Content Center Wrapper */}
      <div className="relative z-30 max-w-3xl mx-auto text-center px-4 -mt-12 sm:-mt-20 md:-mt-28">
        {/* Main Section Headline Display */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight text-gray-900 leading-[1.2] mb-5">
          Your next role is <br /> already looking for you
        </h2>

        {/* Supporting Context Sub-text Paragraph */}
        <p className="text-[14px] sm:text-base text-gray-400 font-medium max-w-xl mx-auto leading-relaxed mb-10">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* 🎛️ Dual Action CTA Button Row Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Call-to-Action Button */}
          <Button
            as={Link}
            href="#"
            className="w-full sm:w-auto bg-linear-to-r from-[#635bff] to-[#4c40ff] text-white font-bold text-[14px] px-8 h-12 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
          >
            Create a free account
          </Button>

          {/* Secondary Outline Link Button */}
          <Button
            as={Link}
            href="#"
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 font-bold text-[14px] px-8 h-12 rounded-xl shadow-xs hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
