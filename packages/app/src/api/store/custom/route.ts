import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.json({ok: true});
  res.sendStatus(200);
}
