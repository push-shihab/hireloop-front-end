import { getData } from "../actions/server";

export async function getCompanyJobs(companyId) {
  return await getData(`/api/jobs?companyId=${companyId}`);
}

export async function getAllJobs() {
  return await getData("/api/all-jobs");
}

export async function getJobDetailsById(id) {
  return await getData(`/api/jobs/${id}`);
}
