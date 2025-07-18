import { pool } from "../../db.js";

export async function updateSubscription(
  userId,
  plan,
  status,
  startDate,
  endDate
) {
  const result = await pool.query(
    "UPDATE users SET subscription_plan = $1, subscription_status = $2, subscription_start_date = $3, subscription_end_date = $4 WHERE id = $5 RETURNING *",
    [plan, status, startDate, endDate, userId]
  );
  return result.rows[0];
}

export async function cancelSubscription(userId, status) {
  const result = await pool.query(
    "UPDATE users SET subscription_status = $1 WHERE id = $2 RETURNING *",
    [status, userId]
  );
  return result.rows[0];
}

export async function getSubscription(userId) {
  const result = await pool.query(
    "SELECT subscription_plan, subscription_status, subscription_start_date, subscription_end_date FROM users WHERE id = $1",
    [userId]
  );
  return result.rows[0];
}
