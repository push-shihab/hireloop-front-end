import CompanyAllJobTable from "@/components/jobs/CompanyAllJobTable";
import { auth } from "@/lib/auth";
import { getCompanyJobs } from "@/utils/api/jobs";
import { headers } from "next/headers";

export default async function AllJobs() {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  const jobs = await getCompanyJobs(user.id);

  return (
    <div className="space-y-5 p-5">
      <div className="space-y-1">
        <h2 className="font-semibold text-2xl">Manage All Jobs</h2>
        <p className="text-zinc-500 font-medium text-[14px]">
          View, update and manage your current job postings
        </p>
      </div>
      <div>
        <CompanyAllJobTable jobs={jobs}></CompanyAllJobTable>
      </div>
    </div>
  );
}
