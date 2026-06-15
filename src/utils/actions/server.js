const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export async function createNewData(path, newData) {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  return res.json();
}

export async function getData(path) {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
}
