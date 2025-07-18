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
  const { username, lastname, email, passwordHash, refreshToken } = req.body;
  const user = await createUserService(
    username,
    lastname,
    email,
    passwordHash,
    refreshToken
  );
  res.status(201).json(user);
});

export const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await getUserByEmailService(email);
  res.json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  res.json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const user = await updateUserService(id, updates);
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

export const getActiveUsers = asyncHandler(async (req, res) => {
  const users = await getActiveUsersService();
  res.json(users);
});

// create and update user fileds are username and lastname
