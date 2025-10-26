export default function Footer(){
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="text-sm font-semibold">Versa Sync Studios</p>
            <p className="mt-2 text-sm text-slate-400">© {new Date().getFullYear()} Versa Sync Studios — Powered by Code & Creativity.</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#home" className="text-slate-300 hover:text-white">Home</a></li>
              <li><a href="#technologies" className="text-slate-300 hover:text-white">Technologies</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="mailto:hello@versasync.studio" className="hover:text-white">hello@versasync.studio</a></li>
              <li className="flex gap-3">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">Built with modern web technologies. Fully responsive and optimized for performance.</div>
      </div>
    </footer>
  );
}
