import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import JobApplicationClient from "./JobApplicationClient";
import { getJobDetailsById } from "@/utils/api/jobs";
import { Card, Button } from "@heroui/react";
import {
  FiAlertTriangle,
  FiLock,
  FiArrowLeft,
  FiActivity,
} from "react-icons/fi";
import Link from "next/link";
import { getAllApplicationsByApplicantId } from "@/utils/api/applications";
import { getPlanById } from "@/utils/api/plans";

const JobApplyPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    const { id } = await params;
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  if (session.user.role !== "job_seeker") {
    return (
      <main className="w-full bg-[#fafafa] min-h-screen py-20 px-4 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-[24px] space-y-5">
          <div className="mx-auto w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
            <FiLock className="text-xl" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-gray-900">
              Account Access Restricted
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Only registered job seeker accounts are permitted to dispatch
              applications to open listings.
            </p>
          </div>
          <Link href="/jobs" passHref className="w-full block">
            <Button
              variant="flat"
              radius="lg"
              size="sm"
              className="w-full font-semibold"
              startContent={<FiArrowLeft />}
            >
              Return to Job Board
            </Button>
          </Link>
        </Card>
      </main>
    );
  }

  const { id } = await params;

  const [applicantApplications, appliedJob] = await Promise.all([
    getAllApplicationsByApplicantId(
      `/api/applications/self?applicantId=${session.user.id}`,
    ),
    getJobDetailsById(id),
  ]);

  if (!appliedJob) {
    redirect("/jobs");
  }
  const plan = await getPlanById(session?.user?.plan || "seeker_free");

  const currentCount = applicantApplications?.length || 0;
  const isOutOfLimit = currentCount >= plan.maxApplication;

  return (
    <div className="w-full bg-[#F7F6F3] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 md:px-0 pt-8 -mb-12 z-10">
        <div className="w-full bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.012)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5b4eff]/5 text-[#5b4eff] rounded-xl hidden sm:block">
              <FiActivity className="text-sm" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Application Tracking Tracker
              </p>
              <h3 className="text-xs font-semibold text-gray-700 mt-0.5">
                Using{" "}
                <span className="font-bold text-gray-900">
                  {plan.plan} tier
                </span>{" "}
                tokens
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:justify-end flex-1 max-w-xs">
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${isOutOfLimit ? "bg-red-500" : "bg-[#5b4eff]"}`}
                style={{
                  width: `${Math.min((currentCount / plan.maxApplication) * 100, 100)}%`,
                }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-gray-600 shrink-0">
              {currentCount}/{plan.maxApplication} Used
            </span>
          </div>
        </div>
      </div>

      {isOutOfLimit ? (
        <main className="w-full flex-1 flex items-center justify-center px-4 py-24">
          <Card className="w-full max-w-md p-8 text-center border border-red-100 bg-white shadow-[0_20px_50px_rgba(239,68,68,0.02)] rounded-[24px] space-y-5">
            <div className="mx-auto w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
              <FiAlertTriangle className="text-xl" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-gray-900">
                Application Threshold Reached
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                You have deployed {currentCount} out of your{" "}
                {plan.maxApplication} free limit tier allocations. Upgrade your
                pipeline tier profile to unlock additional applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/plan" passHref className="w-full">
                <Button className="w-full bg-gray-900 text-white font-bold text-xs h-10 rounded-xl shadow-md">
                  View Account Upgrades
                </Button>
              </Link>
              <Link href="/jobs" passHref className="w-full">
                <Button
                  variant="light"
                  className="w-full font-semibold text-xs h-10 text-gray-500 rounded-xl"
                >
                  Back to Opportunities
                </Button>
              </Link>
            </div>
          </Card>
        </main>
      ) : (
        <div className="w-full flex-1">
          <JobApplicationClient job={appliedJob} />
        </div>
      )}
    </div>
  );
};

export default JobApplyPage;
