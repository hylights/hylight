import { createClient as createSupabaseClient, SupabaseClient } from "@supabase/supabase-js";

export type BlogPostRow = {
  id: string;
  title: string;
  slug: string;
  body: string | null;
  excerpt: string | null;
  cover_image_url: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  meta_title: string | null;
  meta_description: string | null;
};

let client: SupabaseClient<{ blog_posts: BlogPostRow }> | null = null;

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (client) return client;
  client = createSupabaseClient<{ blog_posts: BlogPostRow }>(url, key);
  return client;
}
