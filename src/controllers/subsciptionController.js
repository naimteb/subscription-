import {
  createSubscriptionService,
  getSubscriptionByUserIdService,
  getSubscriptionByMerchantIdService,
  getSubscriptionByPlanIdService,
  cancelSubscriptionService,
  getActiveSubscriptionsService,
} from "../services/subscriptionService.js";

export async function createSubscription(req, res) {
  const data = req.body;
  const subscription = await createSubscriptionService(data);
  res.status(201).json(subscription);
}
export async function getSubscriptionByUserId(req, res) {
  const { userId } = req.params;
  const subscription = await getSubscriptionByUserIdService(userId);
  res.status(200).json(subscription);
}
export async function getSubscriptionByMerchantId(req, res) {
  const { merchantId } = req.params;
  const subscription = await getSubscriptionByMerchantIdService(merchantId);
  res.status(200).json(subscription);
}
export async function getSubscriptionByPlanId(req, res) {
  const { planId } = req.params;
  const subscription = await getSubscriptionByPlanIdService(planId);
  res.status(200).json(subscription);
}
export async function cancelSubscription(req, res) {
  const { id } = req.params;
  const subscription = await cancelSubscriptionService(id);
  res.status(200).json(subscription);
}
export async function getActiveSubscriptions(req, res) {
  const subscriptions = await getActiveSubscriptionsService();
  res.status(200).json(subscriptions);
}
