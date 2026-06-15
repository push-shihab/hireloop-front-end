import { createNewData, getData } from "./server";

export async function createNewCompany(newCompany) {
  return await createNewData("/api/companies/new", newCompany);
}

export async function getRecruiterCopmany(recruiterId) {
  return await getData(`/api/company/self?recruiterId=${recruiterId}`);
}
