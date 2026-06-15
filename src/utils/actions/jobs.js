import { createNewData } from "./server";
export async function createNewJob(newJob) {
  return await createNewData("/api/jobs/new", newJob);
}
