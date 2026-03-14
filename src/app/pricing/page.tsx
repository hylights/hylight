const plans = [
  {
    name: "Starter",
    price: "$39",
    badge: "Try Starter free for 30 days",
    description:
      "For early-stage businesses that need a professional, conversion-ready website and consistent content.",
    features: [
      "One custom design website",
      "One SEO optimized content per week",
      "One design change request per year",
      "Unlimited revisions",
      "Email support",
    ],
    stripeUrl: "https://buy.stripe.com/6oEdTFeuX01gaEo14m",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    badge: "Most Popular · Try Pro free for 30 days",
    description:
      "Best for growing brands who want more content, more iteration, and an AI agent integrated into their experience.",
    features: [
      "One custom design website",
      "Two SEO optimized content per week",
      "Two design change request per year",
      "Unlimited revisions",
      "One programmable AI agent",
      "Email support",
    ],
    stripeUrl: "https://buy.stripe.com/28o3f1biL7tI4g08wP",
    highlight: true,
  },
  {
    name: "Platinum",
    price: "$149",
    badge: "Try Platinum free for 30 days",
    description:
      "For businesses ready to lean fully into design, content, and automation with access to future updates.",
    features: [
      "One custom design website",
      "Three SEO optimized content per week",
      "Two design change request per year",
      "Unlimited revisions",
      "One programmable AI agent",
      "Full access to future updates*",
      "Email support",
    ],
    stripeUrl: "https://buy.stripe.com/9AQ8zlbiL01gcMw4gA",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl text-center sm:mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
            Pricing
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing that works
          </h1>
          <p className="mt-3 text-sm text-slate-200/80">
            Cancel or change plan anytime. No strings attached. Choose the plan
            that matches where your business is today—knowing you can always
            scale up later.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border bg-slate-900/70 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.85)] ${
                plan.highlight
                  ? "border-sky-400/60 shadow-[0_24px_80px_rgba(56,189,248,0.5)]"
                  : "border-white/10"
              }`}
            >
              {plan.badge && (
                <p className="mb-3 text-[11px] font-medium text-sky-200">
                  {plan.badge}
                </p>
              )}
              <h2 className="text-sm font-semibold tracking-tight text-slate-50">
                {plan.name}
              </h2>
              <p className="mt-1 text-2xl font-semibold text-slate-50">
                {plan.price}
                <span className="text-xs font-normal text-slate-300">
                  {" "}
                  per month
                </span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300/85">
                Cancel or change plan anytime. No string attached!
              </p>

              <ul className="mt-4 flex-1 space-y-1.5 text-xs text-slate-200/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.stripeUrl}
                className={`mt-5 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition ${
                  plan.highlight
                    ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
                    : "border border-white/15 bg-slate-950/60 text-slate-50 hover:bg-white/5"
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </section>

        <section className="mt-10 max-w-3xl text-xs text-slate-300/80">
          <p>
            *Full access to future features. All prices are in USD and are
            charged per member with applicable taxes added at checkout.
          </p>
          <p className="mt-2">
            The &quot;Subscribe&quot; button will take you to the Stripe
            payment page. Please ensure that your email address is accurate, as
            you will access and manage your account details using the email
            address you have provided.
          </p>
        </section>
      </main>
    </div>
  );
}

