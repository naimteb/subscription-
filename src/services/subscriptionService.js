import {
  updateSubscription as updateSubscriptionQuery,
  cancelSubscription as cancelSubscriptionQuery,
  getSubscription as getSubscriptionQuery,
} from "../models/subscriptionModel.js";

export async function updateSubscription(userId, plan, startDate, endDate) {
  const status = "active";
  return await updateSubscriptionQuery(
    userId,
    plan,
    status,
    startDate,
    endDate
  );
}

export async function cancelSubscription(userId) {
  const status = "canceled";
  return await cancelSubscriptionQuery(userId, status);
}

export async function getSubscription(userId) {
  return await getSubscriptionQuery(userId);
}
