const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export async function createNewJob(newJob) {
  const fetchUrl = await fetch(`${baseUrl}/api/jobs/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  const res = await fetchUrl.json();
  return res;
}
