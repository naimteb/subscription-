import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
  updateRolePermissionsTable,
} from "../models/roleModel.js";

export async function createRoleService(name, permissions) {
  const role = await createRole(name);

  if (permissions && permissions.length > 0) {
    await updateRolePermissionsTable(role.id, permissions);
  }

  return role;
}

export async function getAllRolesService() {
  return await getAllRoles();
}

export async function getRoleByIdService(id) {
  return await getRoleById(id);
}

export async function updateRoleService(id, name, permissions) {
  const role = await updateRole(id, name);
  if (permissions && permissions.length > 0) {
    await updateRolePermissionsTable(role.id, permissions);
  }
  return role;
}

export async function deleteRoleService(id) {
  return await deleteRole(id);
}
