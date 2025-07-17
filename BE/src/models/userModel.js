import { pool } from "../../db.js";
export async function createUser(id, name, email, password_hash) {
  const result = await pool.query(
    "INSERT INTO users (id, name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, name, email, password_hash]
  );
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
}

export async function updateUser(id, name, email, password_hash) {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2, password_hash = $3 WHERE id = $4 RETURNING *",
    [name, email, password_hash, id]
  );
  return result.rows[0];
}

export async function deleteUser(id) {
  const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  return result.rowCount > 0;
}
export async function getUserById(id) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
}
