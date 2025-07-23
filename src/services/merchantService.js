import {
  createMerchant,
  getMerchantById,
  getMerchantByName,
  getMerchants,
  updateMerchant,
  deactivateMerchant,
} from "../models/merchantModel.js";

export async function createMerchantService(data) {
  return await createMerchant(data);
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

export async function updateMerchantService(id, data) {
  return await updateMerchant(id, data);
}

export async function deactivateMerchantService(id) {
  return await deactivateMerchant(id);
}
