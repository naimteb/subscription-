import {
  createUser,
  getUserByEmail,
  updateUser,
  deactivateUser,
  getUserById,
  getActiveUsers,
} from "../models/userModel.js";

export async function createUserService(
  id,
  name,
  email,
  passwordHash,
  refreshToken
) {
  return await createUser(id, name, email, passwordHash, refreshToken);
}

export async function getUserByEmailService(email) {
  return await getUserByEmail(email);
}

export async function updateUserService(
  id,
  name,
  email,
  passwordHash,
  refreshToken,
  updatedAt,
  isActive
) {
  return await updateUser(
    id,
    name,
    email,
    passwordHash,
    refreshToken,
    updatedAt,
    isActive
  );
}

export async function deactivateUserService(id) {
  return await deactivateUser(id);
}

export async function getUserByIdService(id) {
  return await getUserById(id);
}
export async function getActiveUsersService() {
  return await getActiveUsers();
}
