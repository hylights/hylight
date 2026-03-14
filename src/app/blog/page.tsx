import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts } from "@/lib/supabase-server";
import { STATIC_BLOG_POSTS, POSTS_WITH_IMAGES } from "@/content/blog-posts";

export default async function BlogPage() {
  const cmsPosts = await getPublishedPosts();
  const useStatic = cmsPosts.length === 0;
  const posts = useStatic
    ? STATIC_BLOG_POSTS.map((p) => ({ id: p.slug, slug: p.slug, title: p.title, excerpt: null, cover_image_url: null }))
    : cmsPosts.map((p) => ({ ...p, cover_image_url: (p as { cover_image_url?: string | null }).cover_image_url ?? null }));

  const getImageConfig = (slug: string) => POSTS_WITH_IMAGES.find((e) => e.slug === slug);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
            Blog
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Insights on design, AI, and subscription-based websites
          </h1>
          <p className="mt-3 text-sm text-slate-200/80">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </header>

        <section className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex items-center rounded-full border border-white/15 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-white/5">
            Subscribe
          </button>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imageConfig = getImageConfig(post.slug);
            const coverUrl = post.cover_image_url || null;
            const hasImage = !!coverUrl || !!imageConfig;

            return (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition-colors hover:border-sky-400/40 hover:bg-slate-900"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {hasImage && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                      {coverUrl ? (
                        <Image
                          src={coverUrl}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : imageConfig ? (
                        <Image
                          src={`/blog/${post.slug}.${imageConfig.ext ?? "jpg"}`}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : null}
                    </div>
                  )}
                  <div className="px-4 py-3">
                    <h2 className="font-medium text-slate-50 group-hover:text-sky-200/90">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-1 line-clamp-2 text-xs text-slate-400">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
