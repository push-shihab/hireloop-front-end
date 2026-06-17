import { getData } from "../actions/server";

export async function getPlanById(plan_id) {
  return await getData(`/api/plans?plan_id=${plan_id}`);
}
