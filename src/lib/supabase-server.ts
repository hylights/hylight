import { createClient } from "./supabase";

export async function getPublishedPosts() {
  const supabase = createClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, published_at, cover_image_url")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) return [];
  return data ?? [];
}

export async function getPostBySlug(slug: string) {
  const supabase = createClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .eq("slug", slug)
    .single();
  if (error || !data) return null;
  return data;
}
