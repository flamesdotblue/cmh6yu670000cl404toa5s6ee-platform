import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2, Code2, Smartphone, Webhook } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.85)_60%,rgba(2,6,23,1)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-balance font-semibold tracking-tight text-white [text-wrap:balance]" style={{ fontFamily: 'Siara Condensed, Manrope, ui-sans-serif' }}>
              <span className="block text-4xl leading-tight sm:text-5xl md:text-6xl">
                We Build Websites, Web Apps & Mobile Apps that Sync with Your Vision.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg">
              From concept to launch — Versa Sync Studios transforms ideas into powerful digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg shadow-white/10 ring-1 ring-white/20 transition hover:bg-neutral-100">
                Explore Our Work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">
                Start a Project
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <About />
      <DetailedServices />
      <Contact />
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
      {children}
    </span>
  );
}

function TechStack() {
  return (
    <section className="border-y border-neutral-900 bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-neutral-400">Our versatile tech stack</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge>WordPress</Badge>
          <Badge>Shopify</Badge>
          <Badge>Bubble.io</Badge>
          <Badge>Flutter</Badge>
          <Badge>Supabase</Badge>
          <Badge>Firebase</Badge>
          <Badge>N8N</Badge>
          <Badge>Custom Code</Badge>
        </div>
        <p className="mt-4 text-center text-sm text-neutral-400">
          Our versatile tech stack allows us to build anything from websites to enterprise-grade applications.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      icon: <Code2 className="h-5 w-5 text-blue-400" />, 
      title: 'Web Design',
      desc: 'UI/UX-driven websites on WordPress & Shopify with responsive, accessible layouts.',
      href: '#services',
    },
    {
      icon: <Webhook className="h-5 w-5 text-indigo-400" />, 
      title: 'Web Applications',
      desc: 'Bubble.io with Supabase/Firebase backends and N8N automations for scale.',
      href: '#services',
    },
    {
      icon: <Smartphone className="h-5 w-5 text-purple-400" />, 
      title: 'Mobile Applications',
      desc: 'Flutter-based cross‑platform apps with robust backend integration.',
      href: '#services',
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-400">We don’t just build apps — we build experiences. From prototype to production, we’ve got your back.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900 md:inline-flex">Learn More</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="group rounded-2xl border border-neutral-900 bg-neutral-950 p-6 transition hover:border-neutral-700 hover:bg-neutral-900/40">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900/80 ring-1 ring-neutral-800">
              {c.icon}
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">Learn More <ArrowRight size={14} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: 'E‑commerce Replatform',
      desc: 'Headless Shopify storefront with custom theme and N8N automation.',
      stack: ['Shopify', 'Next.js', 'N8N'],
    },
    {
      title: 'SaaS MVP in 6 Weeks',
      desc: 'Bubble.io web app with Supabase auth and analytics pipeline.',
      stack: ['Bubble.io', 'Supabase'],
    },
    {
      title: 'Cross‑Platform Mobile App',
      desc: 'Flutter app with Firebase backend and offline-first sync.',
      stack: ['Flutter', 'Firebase'],
    },
  ];

  return (
    <section className="border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">A glimpse of what we’ve built. Explore the outcomes we deliver for brands, startups, and enterprises.</p>
          </div>
          <a href="#portfolio" className="hidden rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900 md:inline-flex">View All</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 transition hover:border-neutral-700">
              <div className="h-44 w-full bg-[linear-gradient(135deg,#0b132b_0%,#1f2a44_50%,#0b132b_100%)]"></div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">{s}</span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400">View Project <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    'End-to-End Expertise',
    'Performance & Scalability',
    'Cross-Platform Development',
    'Fast Turnaround',
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why Choose Us</h2>
          <p className="mt-3 max-w-xl text-sm text-neutral-400">Versa Sync Studios blends creativity and technology to build scalable digital products that feel effortless and deliver measurable results.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2 rounded-xl border border-neutral-900 bg-neutral-950 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-200">{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">Ready to build something exceptional? Let’s collaborate.</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-neutral-900 bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="h-60 rounded-2xl bg-[conic-gradient(at_top_left,_#0b132b,_#1f2a44,_#0b132b)]" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Versa Sync Studios</h2>
            <p className="mt-3 text-sm text-neutral-300">
              Founded by developers and designers passionate about merging creativity with technology. Every project starts with understanding your vision — we sync ideas with execution to build products that perform.
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              We partner with startups, scale-ups, and enterprises to design, build, and ship web and mobile products using modern stacks like WordPress, Shopify, Bubble.io, Flutter, Supabase, Firebase, and N8N.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailedServices() {
  const sections = [
    {
      title: 'Web Design',
      points: [
        'User-centered UI/UX',
        'WordPress & Shopify expertise',
        'Responsive, accessible layouts',
      ],
    },
    {
      title: 'Web Applications',
      points: [
        'Bubble.io for rapid development',
        'Supabase & Firebase backends',
        'N8N automation and integrations',
      ],
    },
    {
      title: 'Mobile Applications',
      points: [
        'Flutter cross-platform apps',
        'Backend integration & custom logic',
        'App store deployment support',
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How We Deliver</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-400">From discovery and prototyping to launch and growth — we provide end-to-end solutions tailored to your goals.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <ul className="mt-3 space-y-2">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg shadow-white/10 ring-1 ring-white/20 transition hover:bg-neutral-100">
          Tell us about your project → Start Now
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-900 bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start a Project</h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-400">Share a few details and we’ll get back within 24 hours.</p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs text-neutral-300">Name</label>
                <input className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:border-blue-600 focus:outline-none" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs text-neutral-300">Email</label>
                <input type="email" className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:border-blue-600 focus:outline-none" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs text-neutral-300">Project Type</label>
                <select className="w-full appearance-none rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 focus:border-blue-600 focus:outline-none">
                  <option>Web Design</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-neutral-300">Message</label>
                <textarea rows={5} className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:border-blue-600 focus:outline-none" placeholder="Tell us about your goals, timeline, and budget range..." />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">
                  Send Message
                </button>
                <a href="mailto:hello@versasync.studio" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-5 py-3 text-sm text-neutral-200 hover:bg-neutral-900">Email Us</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-5 py-3 text-sm text-neutral-200 hover:bg-neutral-900">WhatsApp</a>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
            <h3 className="text-base font-semibold">Let’s talk</h3>
            <p className="mt-2 text-sm text-neutral-400">We typically reply within one business day.</p>
            <div className="mt-5 space-y-3 text-sm text-neutral-300">
              <p>Email: hello@versasync.studio</p>
              <p>Timezone: GMT</p>
              <p>Engagements: Fixed, Retainer, Time & Materials</p>
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-4 ring-1 ring-inset ring-blue-500/20">
              <p className="text-sm text-neutral-300">“From prototype to production, we’ve got your back.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
