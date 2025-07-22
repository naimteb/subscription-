import { pool } from "../../db.js";

export async function createMerchant(name) {
  const query = `INSERT INTO merchant (name) VALUES ($1) RETURNING *`;
  const result = await pool.query(query, [name]);
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

export async function updateMerchant(id, name) {
  const query = `UPDATE merchant SET name = $1 WHERE id = $2  and "isActive" = true RETURNING *`;
  const result = await pool.query(query, [name, id]);
  return result.rows[0];
}

export async function deactivateMerchant(id) {
  const query = `UPDATE merchant SET "isActive" = false WHERE id = $1 RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows;
}
