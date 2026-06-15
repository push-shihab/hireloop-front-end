"use client";

import React, { useState, useMemo } from "react";
import { Input, Select, ListBox } from "@heroui/react";
import { FiSearch, FiBriefcase, FiChevronDown } from "react-icons/fi";
import ShowJobs from "@/components/featuredJobs/ShowJobs";

// Reusable Select dropdown built with HeroUI v3 compound API
function FilterSelect({ label, value, onChange, options, getLabel }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Select value={value} onChange={onChange} className="w-full">
        <Select.Trigger className="w-full flex items-center justify-between border border-gray-200 hover:border-gray-300 px-3 h-11 rounded-xl bg-white outline-none transition-colors text-sm text-gray-800 cursor-pointer">
          <Select.Value className="capitalize truncate">
            {getLabel(value)}
          </Select.Value>
          <Select.Indicator>
            <FiChevronDown className="text-gray-400 text-base shrink-0" />
          </Select.Indicator>
        </Select.Trigger>
        <Select.Popover className="bg-white border border-gray-100 shadow-xl rounded-2xl p-1.5 min-w-[200px] z-50">
          <ListBox
            selectionMode="single"
            selectedKeys={new Set([value])}
            onSelectionChange={(keys) => {
              const val = Array.from(keys)[0];
              if (val !== undefined) onChange(String(val));
            }}
            aria-label={label}
          >
            {options.map((opt) => (
              <ListBox.Item
                key={opt}
                id={opt}
                textValue={getLabel(opt)}
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-xl cursor-pointer outline-none capitalize data-[selected=true]:text-violet-600 data-[selected=true]:font-semibold data-[selected=true]:bg-violet-50"
              >
                {getLabel(opt)}
                <ListBox.ItemIndicator className="text-violet-500 text-sm ml-2" />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}

export default function FilteredJobsClient({ initialJobs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Derive unique filter options from job data
  const categories = useMemo(() => {
    const unique = new Set(
      initialJobs.map((j) => j.jobCategory).filter(Boolean),
    );
    return ["all", ...Array.from(unique)];
  }, [initialJobs]);

  const jobTypes = useMemo(() => {
    const unique = new Set(initialJobs.map((j) => j.jobType).filter(Boolean));
    return ["all", ...Array.from(unique)];
  }, [initialJobs]);

  // Location options: all, remote, on-site
  const locationOptions = ["all", "remote", "on-site"];

  // Filter logic
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        job.jobTitle?.toLowerCase().includes(q) ||
        job.companyName?.toLowerCase().includes(q) ||
        job.location?.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "all" || job.jobCategory === selectedCategory;

      const matchesType =
        selectedJobType === "all" || job.jobType === selectedJobType;

      const matchesLocation =
        selectedLocation === "all" ||
        (selectedLocation === "remote" && job.isRemote === true) ||
        (selectedLocation === "on-site" && job.isRemote !== true);

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [
    initialJobs,
    searchQuery,
    selectedCategory,
    selectedJobType,
    selectedLocation,
  ]);

  return (
    <div className="space-y-8">
      {/* ── Filter Panel ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5">
        {/* Search — plain native input with HeroUI Input (v3 API) */}
        <div className="relative w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Search
          </label>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
            <Input
              type="text"
              placeholder="Job title, company, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-9 pr-4 rounded-xl border border-gray-200 hover:border-gray-300 focus-visible:border-violet-500 focus-visible:outline-none bg-white text-sm text-gray-800 placeholder:text-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Select Filters row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FilterSelect
            label="Category"
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categories}
            getLabel={(v) =>
              v === "all" ? "All Categories" : v.replace(/-/g, " ")
            }
          />
          <FilterSelect
            label="Job Type"
            value={selectedJobType}
            onChange={setSelectedJobType}
            options={jobTypes}
            getLabel={(v) => (v === "all" ? "All Types" : v.replace(/-/g, " "))}
          />
          <FilterSelect
            label="Location"
            value={selectedLocation}
            onChange={setSelectedLocation}
            options={locationOptions}
            getLabel={(v) =>
              v === "all"
                ? "Remote & On-site"
                : v.charAt(0).toUpperCase() + v.slice(1)
            }
          />
        </div>

        {/* Results count */}
        <div className="flex items-center justify-end pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            Showing{" "}
            <span className="text-violet-600 font-bold">
              {filteredJobs.length}
            </span>{" "}
            {filteredJobs.length === 1 ? "result" : "results"}
          </p>
        </div>
      </div>

      {/* ── Job Grid / Empty State ── */}
      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-md mx-auto px-8">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-full text-gray-300 mb-4">
            <FiBriefcase size={30} />
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-1.5">
            No jobs match these filters
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Try broadening your search — adjust the keyword, category, or job
            type to see more listings.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((job, i) => (
            <ShowJobs job={job} key={job._id || i} />
          ))}
        </div>
      )}
    </div>
  );
}
