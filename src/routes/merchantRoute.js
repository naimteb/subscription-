import { Router } from "express";
import {
  createMerchant,
  getMerchantById,
  getMerchantByName,
  getMerchants,
  updateMerchant,
  deactivateMerchant,
} from "../controllers/merchantController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = Router();

router.post("/", verifyToken, createMerchant);
router.get("/:id", verifyToken, getMerchantById);
router.get("/", verifyToken, getMerchants);
router.get("/name/:name", verifyToken, getMerchantByName);
router.put("/:id", verifyToken, updateMerchant);
router.delete("/:id", verifyToken, deactivateMerchant);
export default router;
