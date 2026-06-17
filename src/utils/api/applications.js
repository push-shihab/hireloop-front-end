import { getData } from "../actions/server";

export async function getAllApplications(path) {
  return await getData(path);
}

export async function getAllApplicationsByApplicantId(applicantId) {
  return await getData(applicantId);
}
