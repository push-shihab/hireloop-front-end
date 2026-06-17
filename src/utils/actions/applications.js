import { createNewData } from "./server";

export async function applyForJob(applicationData) {
  return await createNewData("/api/jobs/apply", applicationData);
}
