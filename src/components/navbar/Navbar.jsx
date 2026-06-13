"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Navbar() {
  // Simple layout toggle state for smaller devices
  const [isOpen, setIsOpen] = useState(false);
  // Session
  const { data } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <div className="">
      <nav className="fixed top-4 z-50 w-full px-4 sm:px-6">
        {/* Centered responsive container layer */}
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md px-6 h-16 flex items-center justify-between border border-gray-100 rounded-2xl relative">
          {/* Left: Mobile Toggle & Brand Logo Group */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle - Click handler changes the state */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>

            {/* Logo Branding Layout */}
            <Link
              href="/"
              className="flex items-center gap-1 cursor-pointer select-none"
            >
              <Image src={logo} alt="HireLoop Logo" priority />
            </Link>
          </div>

          {/* Center: Main Navigation Links - hidden on mobile viewports */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="#"
              className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="#"
              className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Right: Actions / Auth Button Group */}
          <div className="flex items-center gap-4">
            {/* Vertical layout divider - matches desktop design layout */}
            {data?.session && <h2>Hello {data.user.name}!</h2>}
            <div className="hidden sm:block h-5 w-px bg-gray-200 mr-1" />

            {data?.session ? (
              <Link
                onClick={handleSignOut}
                href="#"
                className="text-[15px] font-semibold text-[#ff4e4e] hover:text-[#cc3434] transition-colors px-2 py-1"
              >
                Sign Out
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-[15px] font-semibold text-[#5b4eff] hover:text-[#4034cc] transition-colors px-2 py-1"
                >
                  Sign In
                </Link>
                <Link href="/signup">
                  <Button
                    href="#"
                    className="bg-linear-to-r from-[#635bff] to-[#4c40ff] text-white font-semibold text-[14px] px-5 h-10 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                    endContent={<FiArrowUpRight className="text-base" />}
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu Container */}
        {isOpen && (
          <div className="sm:hidden absolute left-4 right-4 mt-2 p-5 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-gray-700 hover:text-black py-2 border-b border-gray-50 transition-colors w-full block"
              >
                Browse Jobs
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-gray-700 hover:text-black py-2 border-b border-gray-50 transition-colors w-full block"
              >
                Company
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-gray-700 hover:text-black py-2 pb-3 transition-colors w-full block"
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="h-24 border-b" />
    </div>
  );
}
