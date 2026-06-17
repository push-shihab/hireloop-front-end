"use client";
import React, { useState } from "react";

import { Card, Button, Chip } from "@heroui/react";
import {
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiExternalLink,
  FiShield,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const JobDetailsClient = ({ job }) => {
  const detailsList = (text) => text.split(",").map((item) => item.trim());

  return (
    <main className="w-full bg-[#fafafa] min-h-screen py-16 px-4 md:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: PRIMARY PROFILE & DESCRIPTION ARCHITECTURE */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Identity Core */}
          <Card className="p-6 md:p-8 border border-gray-100 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] rounded-3xl">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center bg-gray-50 shrink-0 overflow-hidden">
                  <Image
                    src={job.companyLogoUrl}
                    alt={job.companyName}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
                    {job.jobTitle}
                  </h1>
                  <a
                    href={`${job.companyWebsite ? `http://${job.companyWebsite}` : ""}`}
                    className="text-sm font-semibold text-[#5b4eff] flex items-center gap-1.5 mt-1"
                  >
                    {job.companyName}
                    <FiExternalLink className="text-xs" />
                  </a>
                </div>
              </div>

              {/* Status Indicator Badges Matrix */}
              <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                <Chip
                  variant="flat"
                  className="bg-[#5b4eff]/10 text-[#5b4eff] font-bold text-xs capitalize px-3 py-1 rounded-full border-none"
                >
                  {job.jobType.replace("-", " ")}
                </Chip>
                <Chip
                  variant="flat"
                  className={`font-bold text-xs capitalize px-3 py-1 rounded-full border-none ${
                    job.isRemote
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {job.isRemote ? "Remote" : "On-site"}
                </Chip>
              </div>
            </div>

            {/* Quick Core Meta Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50 text-gray-500">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#5b4eff] shrink-0 text-lg" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    Location
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    {job.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiLayers className="text-[#5b4eff] shrink-0 text-lg" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    Category
                  </span>
                  <span className="text-xs font-semibold text-gray-700 capitalize">
                    {job.jobCategory}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiDollarSign className="text-[#5b4eff] shrink-0 text-lg" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    Salary Range
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    {Number(job.minSalary).toLocaleString()} -{" "}
                    {Number(job.maxSalary).toLocaleString()} {job.currency}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-[#5b4eff] shrink-0 text-lg" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    Published
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    {new Date(job.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Granular Scope Requirements Blocks */}
          <Card className="p-6 md:p-8 border border-gray-100 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] rounded-3xl space-y-8">
            {/* Core Segment: Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#5b4eff] rounded-full" />
                Core Operations & Responsibilities
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-3">
                {job.responsibilities}
              </p>
            </div>

            {/* Core Segment: Target Requirements */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#5b4eff] rounded-full" />
                Required Credentials & Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-2.5 pl-3">
                {detailsList(job.requirements).map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <FiCheckCircle className="text-emerald-500 shrink-0 mt-0.5 text-base" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Segment: Benefits Ecosystem */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#5b4eff] rounded-full" />
                Perks & Compensations Ecosystem
              </h3>
              <div className="flex flex-wrap gap-2 pl-3">
                {detailsList(job.benefits).map((benefit, i) => (
                  <Chip
                    key={i}
                    variant="flat"
                    className="bg-gray-100 text-gray-700 font-medium text-xs rounded-lg border-none px-3 py-1.5"
                  >
                    {benefit}
                  </Chip>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN: ACTION RADIAL PANELS & META PERSISTENCE */}
        <div className="lg:col-span-4 space-y-6">
          {/* CTA Gateway Container Component */}
          <Card className="p-6 border border-gray-100 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] rounded-3xl text-center space-y-4">
            <div className="text-left bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center gap-3">
              <FiCalendar className="text-red-500 text-xl shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                  Application Window Closes
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {new Date(job.deadline).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <Link href={`/jobs/${job._id}/apply`}>
              <Button className="w-full h-12 bg-[#5b4eff] text-white font-bold rounded-2xl text-sm transition-transform active:scale-[0.98] shadow-lg shadow-[#5b4eff]/20 hover:bg-[#493ce6]">
                Apply For Position
              </Button>
            </Link>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              By proceeding, your profile ecosystem payload will be submitted
              directly to recruiter account identifier{" "}
              <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-600">
                {job.createdBy}
              </span>
              .
            </p>
          </Card>

          {/* Secure System Identity Card */}
          <Card className="p-6 border border-gray-100 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] rounded-3xl space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <FiShield className="text-[#5b4eff]" /> Metadata Verification
            </h4>
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>Ecosystem Status</span>
                <span className="font-bold text-emerald-600 uppercase tracking-widest text-[10px]">
                  ● {job.jobStatus}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>Deployment Scope</span>
                <span className="font-mono text-gray-700">
                  {job.companyId.slice(0, 12)}...
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Node System Reference</span>
                <span className="font-mono text-gray-700">
                  {job.recruiterId.slice(0, 12)}...
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsClient;
