import { NavLink } from 'react-router-dom'
import dhcLogo from '../../dhc_logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111010] border-t border-white/5 px-6 lg:px-12 py-10">
      <div className="max-w-[1700px] mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={dhcLogo} alt="DHC Logo" className="w-8 h-8 object-contain rounded-lg opacity-80" />
          <span className="text-white/30 text-sm">
            © {new Date().getFullYear()} Dallas Harmony Construction, LLC. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className="text-white/30 hover:text-white/70 text-sm transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="text-white/20 text-xs tracking-widest uppercase">
          Irving, TX · (817) 287-1814
        </div>
      </div>
    </footer>
  )
}
