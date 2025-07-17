import {
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
  getUserById,
} from "../models/userModel.js";

export async function createUserService(id, name, email, password_hash) {
  return await createUser(id, name, email, password_hash);
}

export async function getUserByEmailService(email) {
  return await getUserByEmail(email);
}

export async function updateUserService(id, name, email, password_hash) {
  return await updateUser(id, name, email, password_hash);
}

export async function deleteUserService(id) {
  return await deleteUser(id);
}

export async function getUserByIdService(id) {
  return await getUserById(id);
}
