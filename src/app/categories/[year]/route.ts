import { NextResponse } from "next/server";
import { getCategories } from "../CategoryService";

export async function GET(
  _request: any,
  { params: { year } }: { params: { year: number } }
) {
  return NextResponse.json(await getCategories());
}
