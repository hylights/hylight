const projects: Array<{
  slug: string;
  name: string;
  description: string;
  thumbnail?: string;
}> = [
  {
    slug: "bakery",
    name: "Bakery",
    description:
      "Leverage creativity to craft mouthwatering designs, engaging layouts, and irresistible visuals.",
    thumbnail: "/projects/bakery.png",
  },
  {
    slug: "auto-dealer",
    name: "Auto Dealer",
    description:
      "Streamlined, user-friendly platform for browsing, buying, and financing vehicles with a modern, intuitive design.",
    thumbnail: "/projects/auto-dealer.png",
  },
  {
    slug: "yoga-studio",
    name: "Yoga Studio",
    description:
      "A serene, easy-to-navigate platform for discovering class schedules, booking sessions, and exploring wellness resources in a calming and visually appealing environment.",
    thumbnail: "/projects/yoga-studio.png",
  },
  {
    slug: "home-furniture",
    name: "Home Furniture",
    description:
      "Features a stylish and user-friendly interface for browsing, selecting, and purchasing a wide range of furniture and home décor items to suit various tastes and needs.",
    thumbnail: "/projects/home-furniture.png",
  },
  {
    slug: "landscape",
    name: "Landscape",
    description:
      "A clean, accessible platform for exploring and booking a variety of landscaping solutions, from design and installation to maintenance and upgrades, tailored to enhance outdoor spaces.",
    thumbnail: "/projects/landscape.png",
  },
  {
    slug: "coffee-shop",
    name: "Coffee Shop",
    description:
      "A cozy, inviting experience for exploring the menu, ordering beverages and snacks, and learning about the shop’s unique atmosphere and offerings.",
    thumbnail: "/projects/coffee-shop.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
            Projects
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Latest projects crafted with Hylight
          </h1>
          <p className="mt-3 text-sm text-slate-200/80">
            Explore a selection of recent website designs built through our
            subscription model—each one focused on clarity, conversion, and a
            tailored brand experience.
          </p>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.85)] transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_24px_60px_rgba(56,189,248,0.4)]"
            >
              <div className="relative mb-3 h-32 overflow-hidden rounded-xl bg-slate-800">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
                )}
              </div>
              <h2 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-sky-100">
                {project.name}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-300/85">
                {project.description}
              </p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

