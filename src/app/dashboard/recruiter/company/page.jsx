import React from "react";
import CompanyDashboardClient from "./CompanyDashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getRecruiterCopmany } from "@/utils/actions/companies";

const CompanyDashboardPage = async () => {
  const { user } = await auth.api.getSession({ headers: await headers() });
  const recruiterCompany = await getRecruiterCopmany(user?.id);
  return (
    <div>
      <CompanyDashboardClient
        session={user}
        recruiterCompany={recruiterCompany}
      ></CompanyDashboardClient>
    </div>
  );
};

export default CompanyDashboardPage;
