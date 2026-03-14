const projects = [
  {
    slug: "bakery",
    name: "Bakery",
    description:
      "Leverage creativity to craft mouthwatering designs, engaging layouts, and irresistible visuals.",
  },
  {
    slug: "auto-dealer",
    name: "Auto Dealer",
    description:
      "Streamlined, user-friendly platform for browsing, buying, and financing vehicles with a modern, intuitive design.",
  },
  {
    slug: "yoga-studio",
    name: "Yoga Studio",
    description:
      "A serene, easy-to-navigate platform for discovering class schedules and booking sessions.",
  },
  {
    slug: "home-furniture",
    name: "Home Furniture",
    description:
      "Stylish, user-friendly experience for browsing and purchasing furniture and home décor.",
  },
  {
    slug: "landscape",
    name: "Landscape",
    description:
      "Clean, accessible layouts for exploring and booking landscaping solutions to enhance outdoor spaces.",
  },
  {
    slug: "coffee-shop",
    name: "Coffee Shop",
    description:
      "A cozy, inviting experience for exploring the menu and learning about the shop’s atmosphere.",
  },
];

const faqs = [
  {
    question: "What is Hylight?",
    answer:
      "Hylight is a subscription-based design studio that enhances your website and brand through continuous, on-demand design support.",
  },
  {
    question: "Does Hylight offer a free trial?",
    answer:
      "We do not offer a traditional free trial, but you can start with a smaller scope and upgrade as you see results.",
  },
  {
    question: "When will my MVP be ready?",
    answer:
      "MVP timelines depend on complexity, but most clients see an initial live version within a few weeks of onboarding.",
  },
  {
    question: "I like the demo! What’s next?",
    answer:
      "Choose a plan, complete checkout, and we will invite you to Trello where you can start submitting requests immediately.",
  },
  {
    question: "Do the plans include website hosting?",
    answer:
      "Yes. We can host your website for you or help you set it up on your preferred platform such as Vercel.",
  },
];

export default function Home() {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200/90">
              Subscription based design studio
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Your website is{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                enhanced
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-200/80 sm:text-base">
              Choose our smart subscription model to grow your business with
              on-demand design, continuous iteration, and a partner focused on
              your long-term success.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Get Started
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-100/90 transition hover:bg-white/5"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-900/10 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Current request board</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                Live updates
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                <p className="mb-1 text-[11px] font-medium text-slate-400">
                  Backlog
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-200/90">
                  <li className="rounded-lg bg-slate-800/60 px-2 py-1">
                    AI agent onboarding
                  </li>
                  <li className="rounded-lg bg-slate-800/60 px-2 py-1">
                    User profile UI
                  </li>
                  <li className="rounded-lg bg-slate-800/60 px-2 py-1">
                    New content hub
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-500/40 bg-slate-900/80 p-3 shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                <p className="mb-1 text-[11px] font-medium text-sky-200">
                  Current request
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-50">
                  <li className="rounded-lg bg-sky-500/10 px-2 py-1">
                    Landing page refresh
                  </li>
                  <li className="rounded-lg bg-sky-500/10 px-2 py-1">
                    Color system update
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/70 p-3">
                <p className="mb-1 text-[11px] font-medium text-emerald-200">
                  Approved
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-100/90">
                  <li className="rounded-lg bg-emerald-500/15 px-2 py-1">
                    Web design system
                  </li>
                  <li className="rounded-lg bg-emerald-500/15 px-2 py-1">
                    Brand guidelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects */}
        <section id="projects" className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Latest Projects
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-200/75">
                Real, conversion-focused websites for brands across different
                industries, all designed through our subscription model.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-100/80 transition hover:bg-white/5 sm:inline-flex"
            >
              View all projects
            </a>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.85)] transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_24px_60px_rgba(56,189,248,0.4)]"
              >
                <div className="mb-3 h-32 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
                <h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-sky-100">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/85">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Transform CTA */}
        <section
          id="pricing"
          className="mt-20 grid gap-8 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950 px-6 py-8 shadow-[0_28px_80px_rgba(56,189,248,0.35)] sm:px-10 sm:py-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100/80">
              Transform your presence
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Transform your online presence{" "}
              <span className="text-sky-100/90">for the better</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-100/80">
              Trade hourly estimates and one-off projects for a dedicated design
              partner. Submit unlimited requests, prioritize your roadmap, and
              ship new improvements every week.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-slate-950/90 px-5 py-2.5 text-xs font-semibold text-slate-50 ring-1 ring-white/20 transition hover:bg-slate-900"
              >
                View Pricing
              </a>
              <span className="text-[11px] text-slate-100/75">
                No long-term contracts. Pause or cancel anytime.
              </span>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/15 bg-slate-950/60 p-4 text-xs text-slate-100/90">
            <div className="flex items-center justify-between">
              <span>Active requests</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-200">
                3 slots left
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                <span>Website redesign</span>
                <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-200">
                  In progress
                </span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                <span>Landing page experiments</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-200">
                  Approved
                </span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                <span>Blog content visuals</span>
                <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] text-amber-200">
                  In review
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Latest Blogs */}
        <section id="blog" className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Latest Blogs
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-200/75">
                Insights on design, launches, and how to get more from your
                website subscription.
              </p>
            </div>
            <a
              href="/blog"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-100/80 transition hover:bg-white/5 sm:inline-flex"
            >
              All blogs
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                slug:
                  "why-regular-website-design-updates-are-vital-for-your-business",
                title:
                  "Why Regular Website Design Updates Are Vital for Your Business",
              },
              {
                slug:
                  "how-ai-and-automation-can-make-your-business-unstoppable-and-why-you-shouldnt-wait",
                title:
                  "How AI and Automation Can Make Your Business Unstoppable",
              },
              {
                slug:
                  "5-ways-ai-is-transforming-customer-service-for-small-businesses",
                title:
                  "5 Ways AI is Transforming Customer Service for Small Businesses",
              },
            ].map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:border-sky-400/60 hover:bg-slate-900"
              >
                <div className="mb-3 h-24 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
                <p className="text-xs font-medium text-sky-200">
                  Blog
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-2 text-sm font-semibold text-slate-50 hover:text-sky-100"
                >
                  {post.title}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-20 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-200/80">
              Hylight plugs into your workflow with a simple subscription and a
              transparent Trello board so you always know what&apos;s in
              progress.
            </p>
            <ol className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-slate-950">
                  1
                </span>
                <div>
                  <h3 className="font-semibold">Subscribe</h3>
                  <p className="mt-1 text-sm text-slate-200/80">
                    Choose the plan that fits your needs and complete checkout
                    in a few clicks.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-slate-950">
                  2
                </span>
                <div>
                  <h3 className="font-semibold">Trello access</h3>
                  <p className="mt-1 text-sm text-slate-200/80">
                    You&apos;ll receive access to a Trello workspace where you
                    can add requests, prioritize cards, and track progress in
                    real time.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-slate-950">
                  3
                </span>
                <div>
                  <h3 className="font-semibold">Review & iterate</h3>
                  <p className="mt-1 text-sm text-slate-200/80">
                    Review delivered work, request revisions, and mark tasks as
                    complete. We continuously refine your website and brand.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-100/90">
            <div className="flex items-center justify-between">
              <span className="font-medium">Request revision</span>
              <button className="rounded-full bg-slate-50/10 px-3 py-1 text-[11px] font-medium text-slate-100 hover:bg-slate-50/20">
                Mark as complete
              </button>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-950/70 p-3">
              <p className="text-[11px] text-slate-300">
                Write a detailed description about the revision request
              </p>
              <div className="mt-3 flex justify-end">
                <button className="rounded-full bg-sky-500 px-4 py-1.5 text-[11px] font-semibold text-slate-950 hover:bg-sky-400">
                  Submit
                </button>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              We keep you informed every step of the way to ensure your complete
              satisfaction.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-50">
                  <span>{faq.question}</span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs text-slate-200 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-200/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contact"
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-center sm:px-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-200/80">
            Start your enhanced website
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Start your enhanced website with Hylight
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-slate-200/80">
            Tell us about your business and we&apos;ll help you launch or
            upgrade your website with a flexible design subscription.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
