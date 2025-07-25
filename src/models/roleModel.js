import { pool } from "../../db.js";

export async function createRole(name) {
  const result = await pool.query(
    "INSERT INTO roles (name) VALUES ($1) RETURNING *",
    [name]
  );
  return result.rows[0];
}

export async function getAllRoles() {
  const result = await pool.query("SELECT * FROM roles");
  return result.rows;
}

export async function getRoleById(id) {
  const result = await pool.query("SELECT * FROM roles WHERE id = $1", [id]);
  return result.rows[0];
}

export async function updateRole(id, name) {
  const result = await pool.query(
    "UPDATE roles SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  return result.rows[0];
}

export async function deleteRole(id) {
  const result = await pool.query(
    "DELETE FROM roles WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}
export async function updateRolePermissionsTable(roleId, permissions) {
  await pool.query("DELETE FROM role_permissions WHERE 'roleId' = $1", [
    roleId,
  ]);
  for (const permissionId of permissions) {
    await pool.query(
      "insert into role_permissions ('roleId', 'permissionId') values ($1, $2)",
      [roleId, permissionId]
    );
  }
  return true;
}
