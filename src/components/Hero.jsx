import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.85)_60%,rgba(2,6,23,1)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-blue-400">Versa Sync Studios</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl" style={{ fontFamily: 'Siara Condensed, Inter, ui-sans-serif' }}>
              We Build Websites, Web Apps & Mobile Apps that Sync with Your Vision.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
              From concept to launch — Versa Sync Studios transforms ideas into powerful digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 ring-1 ring-white/20 transition hover:bg-slate-100">
                Explore Our Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50 transition hover:bg-blue-500">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
