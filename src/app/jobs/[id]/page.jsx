import { getJobDetailsById } from "@/utils/api/jobs";
import JobDetailsClient from "./JobDetailsClient";

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const getJobDetails = await getJobDetailsById(id);

  return <JobDetailsClient job={getJobDetails}></JobDetailsClient>;
}
