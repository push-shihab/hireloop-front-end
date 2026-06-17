import { createNewData } from "./server";

export async function createNewSubscription(subInfo) {
  return await createNewData("/api/subscription/new", subInfo);
}
