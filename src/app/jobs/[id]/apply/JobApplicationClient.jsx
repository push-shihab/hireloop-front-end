"use client";

import { useSession } from "@/lib/auth-client";
import { applyForJob } from "@/utils/actions/applications";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import {
  FiFileText,
  FiGithub,
  FiGlobe,
  FiMessageSquare,
  FiSend,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

// ── URL validation pattern ────────────────────────────────────────────────────
const URL_PATTERN = /^(https?:\/\/)?([\w.-]+)+([:\d]+)?(\/.*)?$/i;

// ── FieldWrapper ──────────────────────────────────────────────────────────────
function FieldWrapper({ label, hint, required, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between mb-1">
        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          {label}
          {required && (
            <span className="text-blue-500 ml-0.5 normal-case tracking-normal text-xs">
              *
            </span>
          )}
        </label>
        {hint && (
          <span className="text-[10px] font-medium text-slate-300 bg-slate-100 px-2 py-0.5 rounded-full">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-[11px] text-red-500 font-medium mt-1">
          <FiAlertCircle className="shrink-0" />
          {error.message}
        </p>
      )}
    </div>
  );
}

// ── TextInput ─────────────────────────────────────────────────────────────────
function TextInput({ icon: Icon, error, registration }) {
  return (
    <div
      className={`flex items-center gap-3 bg-white border-b-2 px-0 py-2.5 transition-all duration-200 focus-within:border-blue-500 ${
        error ? "border-red-400" : "border-slate-200"
      }`}
    >
      {Icon && (
        <Icon
          className={`shrink-0 text-base transition-colors ${
            error ? "text-red-400" : "text-slate-300"
          }`}
        />
      )}
      <input
        {...registration}
        type="url"
        className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-300 outline-none font-medium"
      />
    </div>
  );
}

// ── TextAreaInput ─────────────────────────────────────────────────────────────
function TextAreaInput({ icon: Icon, error, registration, placeholder }) {
  return (
    <div
      className={`flex gap-3 bg-white border-b-2 px-0 py-2.5 transition-all duration-200 focus-within:border-blue-500 ${
        error ? "border-red-400" : "border-slate-200"
      }`}
    >
      {Icon && <Icon className="shrink-0 text-base text-slate-300 mt-0.5" />}
      <textarea
        {...registration}
        placeholder={placeholder}
        rows={4}
        className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-300 outline-none font-medium resize-none"
      />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function JobApplicationClient({ job }) {
  const { data: session } = useSession();
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    const payload = {
      applicantId: session?.user.id,
      applicantName: session?.user.name,
      applicantEmail: session?.user.email,
      jobTitle: job.jobTitle,
      companyId: job.companyId,
      companyName: job.companyName,
      companyLogoUrl: job.companyLogoUrl,
      jobId: job._id,
      recruiterId: job.recruiterId,
      appliedAt: new Date(),
      resumeLink: data.resumeLink.trim(),
      githubLink: data.githubLink.trim(),
      portfolioLink: data.portfolioLink?.trim() || "",
      shortNote: data.shortNote?.trim() || "",
    };
    const res = await applyForJob(payload);
    if (res.acknowledged) {
      alert("Application submitted successfully!");
    } else {
      alert("Failed to submit application. Please try again.");
    }
  };

  // ── Main Form ─────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#F7F6F3] py-16 px-4 flex items-start justify-center">
      <div className="w-full max-w-xl space-y-6">
        {/* ── Page Header ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              You&apos;re applying for
            </p>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {job.jobTitle}
            </h1>
            <p className="text-sm text-slate-500 pt-0.5">
              at{" "}
              <span className="font-semibold text-blue-600">
                {job.companyName}
              </span>
            </p>
          </div>
          <span className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open Role
          </span>
        </div>

        {/* ── Form Card ── */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Card accent bar + title */}
          <div className="flex items-center gap-4 px-6 md:px-8 py-5 border-b border-slate-100">
            <div className="w-1 self-stretch bg-blue-500 rounded-full" />
            <div>
              <h2 className="text-sm font-bold text-slate-800">
                Submit your application
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Fields marked with{" "}
                <span className="text-blue-500 font-bold">*</span> are required.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 md:px-8 py-7 space-y-9"
          >
            {/* ─ Required Links ─ */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Professional Links
              </p>

              <FieldWrapper label="Resume" required error={errors.resumeLink}>
                <TextInput
                  icon={FiFileText}
                  error={errors.resumeLink}
                  registration={register("resumeLink", {
                    required: "Resume link is required",
                    pattern: {
                      value: URL_PATTERN,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
              </FieldWrapper>

              <FieldWrapper
                label="GitHub Profile"
                required
                error={errors.githubLink}
              >
                <TextInput
                  icon={FiGithub}
                  error={errors.githubLink}
                  registration={register("githubLink", {
                    required: "GitHub URL is required",
                    pattern: {
                      value: URL_PATTERN,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
              </FieldWrapper>
            </div>

            {/* ─ Optional ─ */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Optional — but recommended
              </p>

              <FieldWrapper
                label="Portfolio / Website"
                hint="optional"
                error={errors.portfolioLink}
              >
                <TextInput
                  icon={FiGlobe}
                  error={errors.portfolioLink}
                  registration={register("portfolioLink", {
                    pattern: {
                      value: URL_PATTERN,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
              </FieldWrapper>

              <FieldWrapper label="Short Pitch" hint="optional">
                <TextAreaInput
                  icon={FiMessageSquare}
                  placeholder="What makes you a standout fit for this role?"
                  registration={register("shortNote")}
                />
              </FieldWrapper>
            </div>

            {/* ─ Terms ─ */}
            <div
              className={`flex items-start gap-3 py-4 border-t transition-colors ${
                errors.agreedToTerms ? "border-red-200" : "border-slate-100"
              }`}
            >
              <div className="relative flex items-center mt-0.5">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("agreedToTerms", {
                    required: "You must confirm before submitting",
                  })}
                  className="sr-only peer"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label
                  htmlFor="terms"
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center cursor-pointer transition-all duration-150 ${
                    isChecked ? "bg-blue-500 border-blue-500" : ""
                  } peer-focus-visible:ring-2 peer-focus-visible:ring-blue-300 peer-focus-visible:ring-offset-1 ${
                    errors.agreedToTerms
                      ? "border-red-400 bg-red-50"
                      : !isChecked
                        ? "border-slate-300 bg-white hover:border-blue-400"
                        : ""
                  }`}
                >
                  {isChecked && <FaCheck className="w-2.5 h-2.5 text-white" />}
                </label>
              </div>
              <div>
                <label
                  htmlFor="terms"
                  className={`text-xs leading-relaxed font-medium cursor-pointer select-none ${
                    errors.agreedToTerms ? "text-red-500" : "text-slate-500"
                  }`}
                >
                  I confirm that the links above accurately represent my
                  credentials and professional history.
                </label>
                {errors.agreedToTerms && (
                  <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1">
                    <FiAlertCircle className="shrink-0" />
                    {errors.agreedToTerms.message}
                  </p>
                )}
              </div>
            </div>

            {/* ─ Submit ─ */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.99] shadow-md shadow-blue-100 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending application…
                </>
              ) : (
                <>
                  Submit Application
                  <FiArrowRight className="text-base" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
