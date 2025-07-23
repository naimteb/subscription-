import { Router } from "express";
import {
  createPlan,
  updatePlan,
  getPlansByMerchantId,
  deactivatePlan,
  getActivePlans,
} from "../controllers/planController.js";

const router = Router();

router.post("/", createPlan);
router.put("/:id", updatePlan);
router.get("/merchant/:merchantId", getPlansByMerchantId);
router.delete("/:id", deactivatePlan);
router.get("/", getActivePlans);

export default router;
