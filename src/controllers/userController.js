import {
  createUserService,
  getUserByEmailService,
  updateUserService,
  deactivateUserService,
  getUserByIdService,
  getActiveUsersService,
} from "../services/userService.js";

export async function createUser(req, res) {
  const { id, name, email, passwordHash, refreshToken } = req.body;
  try {
    const user = await createUserService(
      id,
      name,
      email,
      passwordHash,
      refreshToken
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserByEmail(req, res) {
  const { email } = req.params;
  try {
    const user = await getUserByEmailService(email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, passwordHash, refreshToken, updatedAt, isActive } =
    req.body;
  try {
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
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deactivateUser(req, res) {
  const { id } = req.params;
  try {
    const success = await deactivateUserService(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
export async function getActiveUsers(req, res) {
  try {
    const users = await getActiveUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
