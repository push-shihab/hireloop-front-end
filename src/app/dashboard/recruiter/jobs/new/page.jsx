import React from "react";
import PostJobForm from "./PostJobForm";
import { getRecruiterCopmany } from "@/utils/actions/companies";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PostJobPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const recruiterCompany = await getRecruiterCopmany(user.id);
  return (
    <div>
      <PostJobForm company={recruiterCompany}></PostJobForm>
    </div>
  );
};

export default PostJobPage;
