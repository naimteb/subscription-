import { pool } from "../../db.js";

export async function createMerchant(data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const columns = fields.map((field) => `"${field}"`).join(", ");
  const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");

  const query = `INSERT INTO merchant (${columns}) VALUES (${placeholders})  RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getMerchantById(id) {
  const query = `SELECT * FROM merchant WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

export async function getMerchantByName(name) {
  const query = `SELECT * FROM merchant WHERE name = $1 and "isActive" = true`;
  const result = await pool.query(query, [name]);
  return result.rows[0];
}

export async function getMerchants() {
  const query = `SELECT * FROM merchant where "isActive" = true`;
  const result = await pool.query(query);
  return result.rows;
}

export async function updateMerchant(id, data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const setClause = fields
    .map((field, index) => `"${field}" = $${index + 2}`)
    .join(", ");
  const timestampClause = `"updatedAt" = CURRENT_TIMESTAMP`;
  const query = `UPDATE merchant SET ${setClause}, ${timestampClause} WHERE id = $1 and "isActive" = TRUE RETURNING *`;
  const result = await pool.query(query, [id, ...values]);
  return result.rows[0];
}

export async function deactivateMerchant(id) {
  const query = `UPDATE merchant SET "isActive" = false WHERE id = $1 RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows;
}
