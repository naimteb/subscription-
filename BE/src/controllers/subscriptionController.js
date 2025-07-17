import * as subscriptionService from "../services/subscriptionService.js";

export async function subscribe(req, res) {
  const userId = req.params.id;
  const { plan, startDate, endDate } = req.body;
  try {
    const subscription = await subscriptionService.updateSubscription(
      userId,
      plan,
      new Date(startDate),
      new Date(endDate)
    );
    res.json(subscription);
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Failed to subscribe user" });
  }
}

export async function cancelSubscription(req, res) {
  const userId = req.params.id;
  try {
    const subscription = await subscriptionService.cancelSubscription(userId);
    res.json(subscription);
  } catch (error) {
    console.error("Cancel subscription error:", error);
    res.status(500).json({ error: "Failed to cancel subscription" });
  }
}

export async function getSubscription(req, res) {
  const userId = req.params.id;
  try {
    const subscription = await subscriptionService.getSubscription(userId);
    res.json(subscription);
  } catch (error) {
    console.error("Get subscription error:", error);
    res.status(500).json({ error: "Failed to retrieve subscription" });
  }
}
