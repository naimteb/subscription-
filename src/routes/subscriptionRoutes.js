import express from "express";
import {
  subscribe,
  cancelSubscription,
  getSubscription,
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.post("/users/:id/subscribe", subscribe);
router.post("/users/:id/cancel", cancelSubscription);
router.get("/users/:id/subscription", getSubscription);

export default router;
