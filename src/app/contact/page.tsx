export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
            Contact
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A project? A question? Let&apos;s discuss.
          </h1>
          <p className="mt-3 text-sm text-slate-200/80">
            Share a bit about your business and what you&apos;re hoping to
            achieve. We&apos;ll get back to you within one business day.
          </p>
        </header>

        <section className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200/85">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Social media
              </h2>
              <p className="mt-2 text-xs text-slate-300/80">
                Connect with Hylight on your preferred platform.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://x.com/hylightio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400/50 hover:bg-slate-800/60 hover:text-sky-100"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
                <a
                  href="https://www.linkedin.com/company/hylightio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400/50 hover:bg-slate-800/60 hover:text-sky-100"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Send us a message
            </h2>
            <form className="mt-4 space-y-4 text-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-200/90"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-200/90"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-200/90"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Tell us about your project, goals, or questions."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

