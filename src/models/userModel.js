import { pool } from "../../db.js";
export async function createUser(data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const query = `INSERT INTO users (${fields.join(", ")}) VALUES (${values
    .map((_, index) => `$${index + 1}`)
    .join(", ")}) RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1 AND isActive = TRUE",
    [email]
  );
  return result.rows[0];
}

export async function updateUser(id, updates) {
  const fields = Object.keys(updates);
  const values = Object.values(updates);
  if (fields.length === 0) {
    throw new Error("No updates provided");
  }
  //dynamic sql set clause where each field in the request body comes a part of the sql update with the parametrized value
  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");
  console.log("setClause", setClause);
  //  update  timestamp on each update
  const timestampClause = "updatedAt = CURRENT_TIMESTAMP";
  const query = `UPDATE users SET ${setClause}, ${timestampClause} WHERE id = $${
    fields.length + 1
  } AND isActive=TRUE RETURNING *`;

  const result = await pool.query(query, [...values, id]);
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
  const result = await pool.query(
    "SELECT firstName, lastName, email FROM users WHERE isActive = TRUE"
  );
  return result.rows;
}
