import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deactivateUser,
  getAllUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createUser);
router.get("/email/:email", verifyToken, getUserByEmail);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deactivateUser);
router.get("/", verifyToken, getAllUsers);

export default router;
