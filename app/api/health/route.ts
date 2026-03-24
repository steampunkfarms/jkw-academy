import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const start = Date.now();
  const checks: Record<string, string> = {};

  try {
    await prisma.$queryRaw`SELECT 1`;
    checks.database = "ok";
  } catch {
    checks.database = "error";
  }

  const responseTimeMs = Date.now() - start;
  const allOk = Object.values(checks).every((v) => v === "ok");

  return NextResponse.json(
    {
      status: allOk ? "ok" : "degraded",
      site: "jkw-academy",
      checks,
      response_time_ms: responseTimeMs,
      timestamp: new Date().toISOString(),
    },
    { status: allOk ? 200 : 503 },
  );
}
