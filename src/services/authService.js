import { createUser, getUserByEmail, updateUser } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export async function registerUserService(data) {
  const existing = await getUserByEmail(data.email);
  if (existing) {
    throw new Error("User already exists");
  }
  const hashed = await bcrypt.hash(data.passwordHash, 10);
  return await createUser({
    ...data,
    passwordHash: hashed,
  });
}

export async function loginUserService(data) {
  const user = await getUserByEmail(data.email);
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(data.passwordHash, user.passwordhash);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  await updateUser(user.id, {
    refreshToken: token,
  });
  return token;
}

export async function logoutUserService(data) {
  const user = await getUserByEmail(data.email);
  if (!user) {
    throw new Error("User not found");
  }
  return await updateUser(user.id, {
    refreshToken: null,
  });
}
