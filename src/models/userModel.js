import { pool } from "../../db.js";
export async function createUser(id, name, email, passwordHash, refreshToken) {
  const result = await pool.query(
    "INSERT INTO users (id, name, email, passwordHash, refreshToken) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [id, name, email, passwordHash, refreshToken]
  );
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
}

export async function updateUser(
  id,
  name,
  email,
  passwordHash,
  refreshToken,
  updatedAt,
  isActive
) {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2, passwordHash = $3, refreshToken = $4, updatedAt = $5, isActive = $6 WHERE id = $7 AND isActive=TRUE RETURNING *",
    [name, email, passwordHash, refreshToken, updatedAt, isActive, id]
  );
  return result.rows[0];
}

export async function deactivateUser(id) {
  const result = await pool.query(
    "UPDATE users SET isActive = FALSE WHERE id = $1",
    [id]
  );
  return result.rows[0];
}
export async function getUserById(id) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
}

export async function getActiveUsers() {
  const result = await pool.query("SELECT * FROM users WHERE isActive = TRUE");
  return result.rows;
}
