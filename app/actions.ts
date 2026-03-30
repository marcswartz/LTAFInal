"use server";

import { addDeal, type DealRecord } from "@/components/stitch/data";
import { revalidatePath } from "next/cache";

export async function addInvestmentAction(deal: DealRecord) {
  addDeal(deal);
  revalidatePath("/dashboard");
  revalidatePath("/admin");
}