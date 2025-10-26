import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = (href, label) => (
    <a
      href={href}
      className="text-sm text-slate-200/90 hover:text-white transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className={`${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-slate-800' : 'bg-transparent'} fixed inset-x-0 top-0 z-50 border-b border-transparent`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
            <Rocket size={18} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">Versa Sync Studios</p>
            <p className="text-[11px] text-slate-400">Powered by Code & Creativity</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItem('#home', 'Home')}
          {navItem('#technologies', 'Technologies')}
          {navItem('#services', 'Services')}
          {navItem('#portfolio', 'Portfolio')}
          {navItem('#contact', 'Contact')}
          <a href="#contact" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-400/40 transition-colors hover:bg-blue-500">Book a Call</a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mx-3 mb-3 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {navItem('#home', 'Home')}
            {navItem('#technologies', 'Technologies')}
            {navItem('#services', 'Services')}
            {navItem('#portfolio', 'Portfolio')}
            {navItem('#contact', 'Contact')}
            <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-400/40 transition-colors hover:bg-blue-500">Start a Project</a>
          </div>
        </div>
      )}
    </header>
  );
}
