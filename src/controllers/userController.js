import {
  createUserService,
  getUserByEmailService,
  updateUserService,
  deactivateUserService,
  getUserByIdService,
  getActiveUsersService,
} from "../services/userService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createUser = asyncHandler(async (req, res) => {
  const data = req.body;
  const user = await createUserService(data);
  res.status(201).json(user);
});

export const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  console.log(email);
  const user = await getUserByEmailService(email);
  console.log(user);
  res.json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await getUserByIdService(id);
  res.json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  console.log("req", req);
  const { id } = req.params;
  const data = req.body;
  console.log("updates", data);
  const user = await updateUserService(id, data);
  res.json(user);
});

export const deactivateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await deactivateUserService(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await getActiveUsersService();
  res.json(users);
});
