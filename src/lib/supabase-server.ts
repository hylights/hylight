import { createClient } from "./supabase";
import type { BlogPostRow } from "./supabase";

export async function getPublishedPosts(): Promise<
  Pick<BlogPostRow, "id" | "title" | "slug" | "excerpt" | "published_at" | "cover_image_url">[]
> {
  const supabase = createClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, published_at, cover_image_url")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as Pick<
    BlogPostRow,
    "id" | "title" | "slug" | "excerpt" | "published_at" | "cover_image_url"
  >[];
}

export async function getPostBySlug(slug: string): Promise<BlogPostRow | null> {
  const supabase = createClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .eq("slug", slug)
    .single();
  if (error || !data) return null;
  return data as BlogPostRow;
}
