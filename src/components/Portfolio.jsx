export default function Portfolio() {
  const items = [
    {
      title: 'Retail Brand Site & Store',
      desc: 'Modern brand site with Shopify storefront, optimized for conversions.',
      stack: ['Shopify', 'Tailwind', 'N8N'],
    },
    {
      title: 'No-Code SaaS Platform',
      desc: 'Rapid MVP with Bubble.io and Supabase auth, ready for early adopters.',
      stack: ['Bubble.io', 'Supabase'],
    },
    {
      title: 'B2B Analytics Dashboard',
      desc: 'Custom web app with role-based access and realtime charts.',
      stack: ['React', 'Supabase'],
    },
    {
      title: 'On‑Demand Delivery App',
      desc: 'Flutter app with Firebase backend, push notifications, and maps.',
      stack: ['Flutter', 'Firebase'],
    },
  ];

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Portfolio</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-400">Recent highlights across web design, web apps, and mobile apps. Each project blends craft, speed, and scalability.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 transition hover:border-neutral-700">
            <div className="h-44 w-full bg-[linear-gradient(120deg,#0b132b_0%,#252b46_40%,#0b132b_100%)]"></div>
            <div className="p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">{s}</span>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">View Project →</button>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-900 bg-neutral-950 p-6 text-center">
        <h3 className="text-base font-semibold">Have a project in mind?</h3>
        <p className="mt-2 text-sm text-neutral-400">Let’s design and build a product that moves your business forward.</p>
        <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">Start a Project</a>
      </div>
    </section>
  );
}
