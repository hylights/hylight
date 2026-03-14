import { NextRequest, NextResponse } from "next/server";

/**
 * Generate blog post via AI and save to Supabase – stub until Supabase is configured.
 * When ready: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY,
 * then restore the real implementation (see git history).
 */
export async function POST(request: NextRequest) {
  const adminSecret = request.headers.get("x-admin-secret");
  if (process.env.ADMIN_SECRET && adminSecret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(
    {
      error:
        "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable post generation. You can add Supabase later.",
    },
    { status: 503 }
  );
}
