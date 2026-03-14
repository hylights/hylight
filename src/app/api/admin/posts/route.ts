import { NextRequest, NextResponse } from "next/server";

/**
 * Admin blog posts API – stub until Supabase is configured.
 * When ready: add NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and
 * restore the real implementation (see git history or Supabase docs).
 */
export async function POST(request: NextRequest) {
  const adminSecret = request.headers.get("x-admin-secret");
  if (process.env.ADMIN_SECRET && adminSecret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(
    {
      error:
        "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable admin posts. You can add Supabase later.",
    },
    { status: 503 }
  );
}
