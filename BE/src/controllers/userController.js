import {
  createUserService,
  getUserByEmailService,
  updateUserService,
  deleteUserService,
  getUserByIdService,
} from "../services/userService.js";

export async function createUser(req, res) {
  const { id, name, email, password_hash } = req.body;
  const user = await createUserService(id, name, email, password_hash);
  res.status(201).json(user);
}

export async function getUserByEmail(req, res) {
  const { email } = req.params;
  const user = await getUserByEmailService(email);
  res.json(user);
}

export async function getUserById(req, res) {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  res.json(user);
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password_hash } = req.body;
  const user = await updateUserService(id, name, email, password_hash);
  res.json(user);
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  const success = await deleteUserService(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
