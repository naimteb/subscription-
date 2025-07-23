import { pool } from "../../db.js";
import {
  sqlifyKeyValuePairsForCreate,
  sqlifyKeyValuePairsForUpdate,
} from "../../utils/sqlUtils.js";
export async function createMerchant(data) {
  const { values, columns, placeholders } = sqlifyKeyValuePairsForCreate(data);
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
  const { setClause, timestampClause, fields, values } =
    sqlifyKeyValuePairsForUpdate(data);
  const query = `UPDATE merchant SET ${setClause}, ${timestampClause} WHERE id = $${
    fields.length + 1
  } AND "isActive" = TRUE RETURNING *`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
}

export async function deactivateMerchant(id) {
  const query = `UPDATE merchant SET "isActive" = false WHERE id = $1 RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows;
}
