import { pool } from "../../db.js";
import {
  sqlifyKeyValuePairsForCreate,
  sqlifyKeyValuePairsForUpdate,
} from "../../utils/sqlUtils.js";

export async function createUser(data) {
  const { values, columns, placeholders } = sqlifyKeyValuePairsForCreate(data);
  const query = `INSERT INTO users (${columns}) VALUES (${placeholders}) RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await pool.query(
    'SELECT * FROM users WHERE "email" = $1 AND "isActive" = TRUE',
    [email]
  );
  return result.rows[0];
}

export async function updateUser(id, data) {
  const { setClause, timestampClause, fields, values } =
    sqlifyKeyValuePairsForUpdate(data);
  const query = `UPDATE users SET ${setClause}, ${timestampClause} WHERE "id" = $${
    fields.length + 1
  } AND "isActive" = TRUE RETURNING *`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
}

export async function deactivateUser(id) {
  const result = await pool.query(
    'UPDATE users SET "isActive" = FALSE WHERE "id" = $1',
    [id]
  );
  return result.rows[0];
}
export async function getUserById(id) {
  const result = await pool.query('SELECT * FROM users WHERE "id" = $1', [id]);
  return result.rows[0];
}

export async function getActiveUsers() {
  const result = await pool.query(
    'SELECT "firstName", "lastName", "email" FROM users WHERE "isActive" = TRUE'
  );
  return result.rows;
}
