export default function ServicesOverview(){
  const cards = [
    {
      icon: '🌐',
      title: 'Web Design',
      desc: 'UI/UX-driven design, WordPress & Shopify expertise, responsive layouts.',
    },
    {
      icon: '🧩',
      title: 'Web Applications',
      desc: 'Bubble.io with Supabase/Firebase backends and N8N automations for scale.',
    },
    {
      icon: '📱',
      title: 'Mobile Applications',
      desc: 'Flutter-based cross‑platform apps with robust backend integration.',
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">We don’t just build apps — we build experiences. From prototype to production, we’ve got your back.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900 md:inline-flex">Learn More</a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-slate-900 bg-slate-950 p-6 transition hover:border-slate-700 hover:bg-slate-900/40">
            <div className="text-3xl">{c.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">Learn More →</span>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-blue-800/40 bg-blue-600/10 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Ready to build something exceptional? Let’s collaborate.</h3>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition">Start a Project</a>
          <a href="#portfolio" className="px-5 py-3 rounded-lg bg-slate-900/80 border border-slate-700 hover:bg-slate-800 text-white font-medium transition">Explore Our Work</a>
        </div>
      </div>
    </section>
  );
}
