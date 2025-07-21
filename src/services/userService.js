import {
  createUser,
  getUserByEmail,
  updateUser,
  deactivateUser,
  getUserById,
  getActiveUsers,
} from "../models/userModel.js";

export async function createUserService(createUserDto) {
  return await createUser(createUserDto);
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
