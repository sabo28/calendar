import { FreshContext } from "$fresh/server.ts";
import { getDailySummary } from "../../utils/getDailySummary.ts";

export const handler = async (_req: Request, _ctx: FreshContext) => {
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const text = await getDailySummary(today);

  return new Response(JSON.stringify({ text }), {
    headers: { "Content-Type": "application/json" },
  });
};
