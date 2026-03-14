-- Run this in Supabase SQL Editor to create the blog posts table.

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  body text,
  excerpt text,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  meta_title text,
  meta_description text
);

-- Index for listing published posts and looking up by slug.
create index if not exists blog_posts_status_published_at
  on public.blog_posts (status, published_at desc);
create unique index if not exists blog_posts_slug on public.blog_posts (slug);

-- Allow public read for published posts only (anon key).
alter table public.blog_posts enable row level security;

create policy "Public can read published posts"
  on public.blog_posts for select
  using (status = 'published');

-- Writes (insert/update/delete) only via service role in API routes (bypasses RLS).

-- Optional: trigger to update updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();
