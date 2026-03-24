import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = req.headers.get("x-internal-secret");
  const expected = process.env.INTERNAL_SECRET?.trim();

  if (!expected || secret !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Placeholder — will be populated when Payment model exists (Session 6)
  return NextResponse.json({
    site: "jkw-academy",
    quarters: [],
    timestamp: new Date().toISOString(),
  });
}
