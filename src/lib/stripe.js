import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TjJEP0KH6vv355TyyG7rk6J",
  seeker_premium: "price_1TjJdo0KH6vv355T8XRmytlU",
  recruiter_pro: "price_1TjJet0KH6vv355TWDQC8UDe",
  recruiter_premium: "price_1TjJfc0KH6vv355TwthlM0xC",
};
