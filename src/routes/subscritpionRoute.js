import { Router } from "express";
import {
  createSubscription,
  getSubscriptionByUserId,
  getSubscriptionByMerchantId,
  getSubscriptionByPlanId,
  cancelSubscription,
  getActiveSubscriptions,
} from "../controllers/subsciptionController.js";
const router = Router();

router.post("/", createSubscription);
router.get("/user/:userId", getSubscriptionByUserId);
router.get("/merchant/:merchantId", getSubscriptionByMerchantId);
router.get("/plan/:planId", getSubscriptionByPlanId);
router.delete("/:id", cancelSubscription);
router.get("/", getActiveSubscriptions);

export default router;
