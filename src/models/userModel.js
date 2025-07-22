import { pool } from "../../db.js";
import camelcaseKeys from "camelcase-keys";
export async function createUser(data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  // wrapped each field in double quotes for case-sensitive column names
  const columns = fields.map((field) => `"${field}"`).join(", ");
  const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");
  const query = `INSERT INTO users (${columns}) VALUES (${placeholders}) RETURNING *`;
  const result = await pool.query(query, values);
  return camelcaseKeys(result.rows[0], { deep: true });
}

export async function getUserByEmail(email) {
  const result = await pool.query(
    'SELECT * FROM users WHERE "email" = $1 AND "isActive" = TRUE',
    [email]
  );
  return camelcaseKeys(result.rows[0], { deep: true });
}

export async function updateUser(id, updates) {
  const fields = Object.keys(updates);
  const values = Object.values(updates);
  if (fields.length === 0) throw new Error("No updates provided");
  // SET clause with quoted column names
  const setClause = fields
    .map((field, index) => `"${field}" = $${index + 1}`)
    .join(", ");
  const timestampClause = `"updatedAt" = CURRENT_TIMESTAMP`;
  const query = `UPDATE users SET ${setClause}, ${timestampClause} WHERE "id" = $${
    fields.length + 1
  } AND "isActive" = TRUE RETURNING *`;
  const result = await pool.query(query, [...values, id]);
  return camelcaseKeys(result.rows[0], { deep: true });
}

export async function deactivateUser(id) {
  const result = await pool.query(
    'UPDATE users SET "isActive" = FALSE WHERE "id" = $1',
    [id]
  );
  return camelcaseKeys(result.rows[0], { deep: true });
}
export async function getUserById(id) {
  const result = await pool.query('SELECT * FROM users WHERE "id" = $1', [id]);
  return camelcaseKeys(result.rows[0], { deep: true });
}

export async function getActiveUsers() {
  const result = await pool.query(
    'SELECT "firstName", "lastName", "email" FROM users WHERE "isActive" = TRUE'
  );
  return camelcaseKeys(result.rows, { deep: true });
}
