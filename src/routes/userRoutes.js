import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deactivateUser,
  getActiveUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/:email", getUserByEmail);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deactivateUser);
router.get("/active", getActiveUsers);

export default router;
