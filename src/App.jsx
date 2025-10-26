import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Technologies Section */}
        <section id="technologies" className="border-y border-slate-900 bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-slate-400">Our versatile tech stack</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['WordPress','Shopify','Bubble.io','Flutter','Supabase','Firebase','N8N','Custom Code'].map(t => (
                <span key={t} className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">{t}</span>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-slate-400">Our versatile tech stack allows us to build anything from websites to enterprise-grade applications.</p>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesOverview />

        {/* Featured Projects Preview */}
        <section id="portfolio" className="border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-950/60">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-400">A glimpse of what we’ve built. Explore the outcomes we deliver for brands, startups, and enterprises.</p>
              </div>
              <a href="#contact" className="hidden rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900 md:inline-flex">Start a Project</a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {title:'Alpha Commerce',desc:'Shopify storefront with a custom theme and conversion-focused UX.',stack:['Shopify','Custom Theme','Analytics']},
                {title:'Nova Dashboard',desc:'Bubble.io admin panel backed by Supabase and n8n automations.',stack:['Bubble.io','Supabase','N8N']},
                {title:'Orbit Fitness',desc:'Flutter mobile app with Firebase realtime sync and push notifications.',stack:['Flutter','Firebase']},
              ].map(p => (
                <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 transition hover:border-slate-700">
                  <div className="h-44 w-full bg-[linear-gradient(120deg,#0b132b_0%,#252b46_40%,#0b132b_100%)]" />
                  <div className="p-5">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map(s => (
                        <span key={s} className="rounded-full border border-slate-800 px-2 py-0.5 text-[11px] text-slate-300">{s}</span>
                      ))}
                    </div>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">View Project →</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why Choose Us</h2>
              <p className="mt-3 max-w-xl text-sm text-slate-400">Versa Sync Studios blends creativity and technology to build scalable digital products that feel effortless and deliver measurable results.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {['End-to-End Expertise','Performance & Scalability','Cross-Platform Development','Fast Turnaround'].map(item => (
                <li key={item} className="flex items-start gap-2 rounded-xl border border-slate-900 bg-slate-950 p-4">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">Ready to build something exceptional? Let’s collaborate.</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-slate-900 bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start a Project</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">Share a few details and we’ll get back within 24 hours.</p>

                <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs text-slate-300">Name</label>
                    <input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-blue-600 focus:outline-none" placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs text-slate-300">Email</label>
                    <input type="email" className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-blue-600 focus:outline-none" placeholder="you@company.com" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs text-slate-300">Project Type</label>
                    <select className="w-full appearance-none rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-blue-600 focus:outline-none">
                      <option>Web Design</option>
                      <option>Web Application</option>
                      <option>Mobile Application</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs text-slate-300">Message</label>
                    <textarea rows={5} className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-blue-600 focus:outline-none" placeholder="Tell us about your goals, timeline, and budget range..." />
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">
                      Send Message
                    </button>
                    <a href="mailto:hello@versasync.studio" className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-5 py-3 text-sm text-slate-200 hover:bg-slate-900">Email Us</a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-5 py-3 text-sm text-slate-200 hover:bg-slate-900">WhatsApp</a>
                  </div>
                </form>
              </div>

              <div className="rounded-2xl border border-slate-900 bg-slate-950 p-6">
                <h3 className="text-base font-semibold">Let’s talk</h3>
                <p className="mt-2 text-sm text-slate-400">We typically reply within one business day.</p>
                <div className="mt-5 space-y-3 text-sm text-slate-300">
                  <p>Email: hello@versasync.studio</p>
                  <p>Timezone: GMT</p>
                  <p>Engagements: Fixed, Retainer, Time & Materials</p>
                </div>
                <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-4 ring-1 ring-inset ring-blue-500/20">
                  <p className="text-sm text-slate-300">“From prototype to production, we’ve got your back.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition-colors hover:bg-blue-500"
      >
        Start a Project
      </a>
    </div>
  );
}
