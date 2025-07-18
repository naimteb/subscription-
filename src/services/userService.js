import {
  createUser,
  getUserByEmail,
  updateUser,
  deactivateUser,
  getUserById,
  getActiveUsers,
} from "../models/userModel.js";

export async function createUserService(
  username,
  lastname,
  email,
  passwordHash,
  refreshToken
) {
  return await createUser(
    username,
    lastname,
    email,
    passwordHash,
    refreshToken
  );
}

export async function getUserByEmailService(email) {
  return await getUserByEmail(email);
}

export async function updateUserService(id, updates) {
  return await updateUser(id, updates);
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
