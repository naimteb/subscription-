import {
  createPlanService,
  updatePlanService,
  getPlansByMerchantIdService,
  deactivatePlanService,
  getActivePlansService,
} from "../services/planService.js";

export async function createPlan(req, res) {
  const data = req.body;
  const plan = await createPlanService(data);
  res.status(201).json(plan);
}
export async function updatePlan(req, res) {
  const { id } = req.params;
  const data = req.body;
  const plan = await updatePlanService(id, data);
  res.status(200).json(plan);
}
export async function getPlansByMerchantId(req, res) {
  const { merchantId } = req.params;
  const plans = await getPlansByMerchantIdService(merchantId);
  res.status(200).json(plans);
}
export async function deactivatePlan(req, res) {
  const { id } = req.params;
  const plan = await deactivatePlanService(id);
  res.status(200).json(plan);
}
export async function getActivePlans(req, res) {
  const plans = await getActivePlansService();
  res.status(200).json(plans);
}
