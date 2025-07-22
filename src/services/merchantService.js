import {
  createMerchant,
  getMerchantById,
  getMerchantByName,
  getMerchants,
  updateMerchant,
  deactivateMerchant,
} from "../models/merchantModel.js";

export async function createMerchantService(name) {
  return await createMerchant(name);
}

export async function getMerchantByIdService(id) {
  return await getMerchantById(id);
}

export async function getMerchantByNameService(name) {
  return await getMerchantByName(name);
}

export async function getMerchantsService() {
  return await getMerchants();
}

export async function updateMerchantService(id, name) {
  return await updateMerchant(id, name);
}

export async function deactivateMerchantService(id) {
  return await deactivateMerchant(id);
}
