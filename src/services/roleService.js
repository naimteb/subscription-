import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../models/roleModel.js";

export async function createRoleService(name) {
  return await createRole(name);
}

export async function getAllRolesService() {
  return await getAllRoles();
}

export async function getRoleByIdService(id) {
  return await getRoleById(id);
}

export async function updateRoleService(id, name) {
  return await updateRole(id, name);
}

export async function deleteRoleService(id) {
  return await deleteRole(id);
}
