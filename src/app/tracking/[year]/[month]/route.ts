import { NextResponse } from "next/server";
import { getTracking } from "../../TrackingService";

export async function GET(
  _request: any,
  { params: { year, month } }: { params: { year: number; month: number } }
) {
  return NextResponse.json(await getTracking(year, month));
}
