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
  const { id, name, email, passwordHash, refreshToken } = req.body;
  const user = await createUserService(
    id,
    name,
    email,
    passwordHash,
    refreshToken
  );
  res.status(201).json(user);
});

// export async function createUser(req, res) {
//   const { id, name, email, passwordHash, refreshToken } = req.body;
//   try {
//     const user = await createUserService(
//       id,
//       name,
//       email,
//       passwordHash,
//       refreshToken
//     );
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }

export const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await getUserByEmailService(email);
  res.json(user);
});
// export async function getUserByEmail(req, res) {
//   const { email } = req.params;
//   try {
//     const user = await getUserByEmailService(email);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  res.json(user);
});

// export async function getUserById(req, res) {
//   const { id } = req.params;
//   try {
//     const user = await getUserByIdService(id);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, passwordHash, refreshToken, updatedAt, isActive } =
    req.body;
  const user = await updateUserService(
    id,
    name,
    email,
    passwordHash,
    refreshToken,
    updatedAt,
    isActive
  );
  res.json(user);
});

// export async function updateUser(req, res) {
//   const { id } = req.params;
//   const { name, email, passwordHash, refreshToken, updatedAt, isActive } =
//     req.body;
//   try {
//     const user = await updateUserService(
//       id,
//       name,
//       email,
//       passwordHash,
//       refreshToken,
//       updatedAt,
//       isActive
//     );
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }

export const deactivateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await deactivateUserService(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// export async function deactivateUser(req, res) {
//   const { id } = req.params;
//   try {
//     const success = await deactivateUserService(id);
//     if (success) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }

export const getActiveUsers = asyncHandler(async (req, res) => {
  const users = await getActiveUsersService();
  res.json(users);
});

// export async function getActiveUsers(req, res) {
//   try {
//     const users = await getActiveUsersService();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//     console.error(error);
//   }
// }
