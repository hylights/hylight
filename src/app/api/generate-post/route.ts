import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  const adminSecret = request.headers.get("x-admin-secret");
  if (process.env.ADMIN_SECRET && adminSecret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { topic: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { topic } = body;
  if (!topic?.trim()) {
    return NextResponse.json({ error: "topic required" }, { status: 400 });
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    return NextResponse.json(
      {
        error: "AI generation not configured. Set OPENAI_API_KEY in .env.local to enable automated posts.",
      },
      { status: 501 }
    );
  }

  const supabase = createAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase not configured." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a blog writer for Hylight, a subscription-based design studio. Write clear, helpful, SEO-friendly blog posts. Output valid HTML for the article body (use <p>, <h2>, <h3>, <ul>, <li>).",
          },
          {
            role: "user",
            content: `Write a short blog post (about 300–400 words) on this topic: ${topic.trim()}. Reply with a JSON object only, no markdown, with keys: "title" (string), "slug" (URL-safe slug, lowercase, hyphens), "body" (HTML string), "excerpt" (1–2 sentences).`,
          },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: "OpenAI request failed", details: err }, { status: 502 });
    }

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content;
    if (!text) return NextResponse.json({ error: "No content from OpenAI" }, { status: 502 });

    const parsed = JSON.parse(text) as { title?: string; slug?: string; body?: string; excerpt?: string };
    const title = parsed.title ?? topic;
    const slug = (parsed.slug ?? topic.toLowerCase().replace(/\s+/g, "-")).replace(/[^a-z0-9-]/g, "-");
    const postBody = parsed.body ?? "";
    const excerpt = parsed.excerpt ?? "";

    const { data: row, error } = await supabase
      .from("blog_posts")
      .insert({
        title,
        slug,
        body: postBody,
        excerpt: excerpt || null,
        status: "draft",
      })
      .select("id, slug")
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ id: row.id, slug: row.slug, title, created: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: "Generation failed", details: message }, { status: 500 });
  }
}
