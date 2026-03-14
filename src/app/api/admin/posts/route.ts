import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  const adminSecret = request.headers.get("x-admin-secret");
  if (process.env.ADMIN_SECRET && adminSecret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  let body: { id?: string; title: string; slug: string; body?: string; excerpt?: string; status?: "draft" | "published" };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { id, title, slug, body: postBody, excerpt, status = "draft" } = body;
  if (!title?.trim() || !slug?.trim()) {
    return NextResponse.json({ error: "title and slug required" }, { status: 400 });
  }

  const row = {
    title: title.trim(),
    slug: slug.trim().toLowerCase().replace(/\s+/g, "-"),
    body: postBody?.trim() ?? null,
    excerpt: excerpt?.trim() ?? null,
    status,
    ...(status === "published" ? { published_at: new Date().toISOString() } : {}),
  };

  if (id) {
    const { data, error } = await supabase
      .from("blog_posts")
      .update(row)
      .eq("id", id)
      .select("id")
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ id: data.id, updated: true });
  }

  const { data, error } = await supabase.from("blog_posts").insert(row).select("id").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ id: data.id, created: true });
}
