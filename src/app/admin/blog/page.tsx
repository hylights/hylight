"use client";

import { useState } from "react";

export default function AdminBlogPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET ?? "";
    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-secret": secret },
        body: JSON.stringify({ title, slug, body, excerpt, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setMessage({ type: "ok", text: "Post saved." });
      if (status === "draft") setMessage({ type: "ok", text: "Draft saved. Publish from Supabase or edit and resubmit." });
    } catch (err) {
      setMessage({ type: "err", text: err instanceof Error ? err.message : "Failed to save" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Blog CMS</h1>
        <p className="mt-1 text-sm text-slate-400">
          Create or edit posts. Set ADMIN_SECRET and NEXT_PUBLIC_ADMIN_SECRET for protection.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400">Slug (URL)</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="my-post-title"
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400">Excerpt</label>
            <input
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400">Body (HTML allowed)</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          {message && (
            <p className={message.type === "ok" ? "text-green-400" : "text-red-400"}>{message.text}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 disabled:opacity-50"
          >
            {loading ? "Saving…" : "Save post"}
          </button>
        </form>

        <section className="mt-10 border-t border-white/10 pt-6">
          <h2 className="text-lg font-medium">AI-generated post (future)</h2>
          <p className="mt-1 text-sm text-slate-400">
            Call <code className="rounded bg-slate-800 px-1">POST /api/generate-post</code> with{" "}
            <code className="rounded bg-slate-800 px-1">{"{ \"topic\": \"your topic\" }"}</code> and{" "}
            <code className="rounded bg-slate-800 px-1">x-admin-secret</code> header. Set OPENAI_API_KEY to enable.
          </p>
        </section>
      </main>
    </div>
  );
}
