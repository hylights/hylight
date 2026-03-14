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

/** Minimal type for Supabase client so .insert() and .update() are typed. */
export type BlogPostInsert = Pick<
  BlogPostRow,
  "title" | "slug" | "body" | "excerpt" | "status" | "published_at"
> & Partial<Pick<BlogPostRow, "cover_image_url" | "meta_title" | "meta_description">>;
export type BlogPostUpdate = Partial<BlogPostInsert>;

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPostRow;
        Insert: BlogPostInsert;
        Update: BlogPostUpdate;
      };
    };
  };
};

let client: SupabaseClient<Database> | null = null;

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (client) return client;
  client = createSupabaseClient<Database>(url, key);
  return client;
}
