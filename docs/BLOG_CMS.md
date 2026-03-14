# Blog CMS (Supabase + AI)

## Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com).

2. **Run the schema**  
   In Supabase: SQL Editor → paste and run `supabase/schema.sql`. This creates the `blog_posts` table and RLS so only published posts are public.

3. **Environment variables**  
   Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL` – Project URL (Settings → API)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` – anon public key
   - `SUPABASE_SERVICE_ROLE_KEY` – service_role key (Settings → API; keep secret)
   - Optional: `ADMIN_SECRET` and `NEXT_PUBLIC_ADMIN_SECRET` (same value) to protect the admin API.
   - Optional: `OPENAI_API_KEY` to enable AI-generated posts.

## Using the CMS

- **Public blog**  
  `/blog` lists published posts from Supabase. `/blog/[slug]` shows the post body (HTML). If Supabase isn’t configured or a slug isn’t in the DB, the app falls back to the static post list and in-code content.

- **Admin UI**  
  Go to `/admin/blog` to create posts: title, slug, excerpt, body (HTML), and status (draft or published). Saving calls `POST /api/admin/posts` (send `x-admin-secret` if you set `ADMIN_SECRET`).

- **AI-generated posts**  
  `POST /api/generate-post` with JSON body `{ "topic": "your topic" }` and header `x-admin-secret: <ADMIN_SECRET>`. Requires `OPENAI_API_KEY`. Creates a **draft** post; publish from Supabase or the admin UI. You can call this from a cron job (e.g. Vercel Cron) or a script for automated content.

## Securing the admin

- Use `ADMIN_SECRET` and `NEXT_PUBLIC_ADMIN_SECRET` so only your admin UI (or scripts that know the secret) can create/update posts.
- For production, add proper auth (e.g. NextAuth) and protect `/admin` and the admin API so only logged-in editors can access them.
