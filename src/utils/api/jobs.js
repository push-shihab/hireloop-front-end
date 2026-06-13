const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export async function getCompanyJobs(companyId) {
  const fetchUrl = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}`);
  const res = await fetchUrl.json();
  return res;
}
