import Link from "next/link";
import React from "react";
import { Card, Avatar, Chip } from "@heroui/react";
import {
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiGift,
} from "react-icons/fi";

const ShowJobs = ({ job }) => {
  // Format workspace type layout
  const workplaceType = job?.isRemote
    ? "Remote"
    : job?.jobType
      ? job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)
      : "On-site";

  // Dynamic salary construction using exact keys
  const minSalaryFormatted = job?.minSalary
    ? parseInt(job.minSalary).toLocaleString()
    : "";
  const maxSalaryFormatted = job?.maxSalary
    ? parseInt(job.maxSalary).toLocaleString()
    : "";
  const currencySymbol =
    job?.currency === "EUR"
      ? "€"
      : job?.currency === "USD"
        ? "$"
        : `${job?.currency || ""} `;

  const salaryDisplay =
    minSalaryFormatted && maxSalaryFormatted
      ? `${currencySymbol}${minSalaryFormatted}–${maxSalaryFormatted}/yr`
      : "Salary Undisclosed";

  // Format Deadline Date safely
  const formattedDeadline = job?.deadline
    ? new Date(job.deadline).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Card className="w-full max-w-md bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_35px_-10px_rgba(0,0,0,0.06)] hover:border-gray-200/80 transition-all duration-300 flex flex-col justify-between min-h-[380px]">
      {/* 🏷️ Card Header Wrap */}
      <Card.Header className="flex justify-between items-start gap-3 pb-3">
        <Card.Title className="flex items-center gap-3">
          <Avatar
            src={job?.companyLogoUrl}
            name={job?.companyName}
            radius="xl"
            className="w-11 h-11 border border-gray-100 bg-gray-50 text-gray-600 font-bold text-sm shrink-0"
          />
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-gray-800 leading-tight">
              {job?.companyName}
            </h4>
            <span className="text-[11px] font-medium text-gray-400 lowercase">
              posted by @{job?.createdBy || "recruiter"}
            </span>
          </div>
        </Card.Title>

        <Card.Description>
          {job?.jobStatus && (
            <Chip
              size="sm"
              variant="flat"
              color={job.jobStatus === "active" ? "success" : "default"}
              className="capitalize text-[11px] font-bold px-2 h-6"
            >
              {job.jobStatus}
            </Chip>
          )}
        </Card.Description>
      </Card.Header>

      {/* 📄 Card Content Main Block */}
      <Card.Content className="py-2 flex flex-col gap-4">
        {/* Title and Category Stack */}
        <div>
          <span className="text-[10px] font-black tracking-widest text-[#5b4eff] uppercase bg-purple-50 px-2 py-0.5 rounded-md inline-block mb-1">
            {job?.jobCategory}
          </span>
          <h3 className="text-xl font-extrabold tracking-tight text-gray-900 leading-snug">
            {job?.jobTitle}
          </h3>
        </div>

        {/* Primary Responsibilities */}
        <p className="text-[13px] text-gray-500 font-normal leading-relaxed line-clamp-2">
          {job?.responsibilities}
        </p>

        {/* Key Requirements Snapshot */}
        {job?.requirements && (
          <div className="bg-gray-50/60 border border-gray-100 p-3 rounded-2xl flex items-start gap-2.5">
            <FiCheckCircle className="text-[#5b4eff] text-sm shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
                Requirements
              </span>
              <p className="text-[12px] text-gray-600 font-medium leading-normal line-clamp-1">
                {job.requirements}
              </p>
            </div>
          </div>
        )}

        {/* Strategic Benefits & Perks */}
        {job?.benefits && (
          <div className="flex items-center gap-2 px-1">
            <FiGift className="text-purple-500 text-xs shrink-0" />
            <p className="text-[12px] text-gray-400 font-medium line-clamp-1">
              <span className="text-gray-500 font-semibold">Perks:</span>{" "}
              {job.benefits}
            </p>
          </div>
        )}

        {/* Meta Information Badges Matrix */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <div className="inline-flex items-center gap-1 bg-gray-50/80 border border-gray-100 px-2.5 py-1 rounded-full">
            <FiMapPin className="text-gray-400 text-[11px] shrink-0" />
            <span className="text-[11px] font-bold text-gray-500">
              {job?.location}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 bg-gray-50/80 border border-gray-100 px-2.5 py-1 rounded-full">
            <FiClock className="text-gray-400 text-[11px] shrink-0" />
            <span className="text-[11px] font-bold text-gray-500">
              {workplaceType}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 bg-purple-50/40 border border-purple-100/30 px-2.5 py-1 rounded-full">
            <FiDollarSign className="text-purple-500 text-[11px] shrink-0" />
            <span className="text-[11px] font-extrabold text-purple-600">
              {salaryDisplay}
            </span>
          </div>
        </div>
      </Card.Content>

      {/* 📅 Card Footer Tracker Action Layer */}
      <Card.Footer className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
        <div className="flex items-center gap-1.5 text-gray-400">
          <FiCalendar className="text-xs shrink-0" />
          <span className="text-[11px] font-semibold">
            {formattedDeadline ? `Until ${formattedDeadline}` : "Open Ongoing"}
          </span>
        </div>

        <Link
          href="#"
          className="inline-flex items-center gap-1 text-[13px] font-bold text-gray-800 hover:text-[#5b4eff] transition-colors group cursor-pointer"
        >
          Apply Now
          <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ShowJobs;
