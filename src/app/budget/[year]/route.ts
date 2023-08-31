import { NextResponse } from "next/server";
import { getBudgets } from "../BudgetService";

export async function GET(
  _request: any,
  { params: { year } }: { params: { year: number } }
) {
  return NextResponse.json(await getBudgets(year));
}
