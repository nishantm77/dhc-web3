import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import dhcLogo from '../../dhc_logo.png'

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On dark-bg pages, always keep nav text white
  const isDarkPage = pathname === '/' || pathname === '/projects' || pathname === '/contact'

  return (
    <>
      {/* ── Main bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div
          className={`mx-6 lg:mx-14 xl:mx-20 px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-[#1c1b1a]/90 backdrop-blur-2xl shadow-2xl shadow-black/30 rounded-2xl'
              : ''
          }`}
          style={{ height: scrolled ? '62px' : '80px' }}
        >
          {/* Logo — icon only, no text */}
          <NavLink to="/" className="flex-shrink-0 flex items-center">
            <img
              src={dhcLogo}
              alt="DHC"
              className={`object-contain rounded-xl transition-all duration-300 ${
                scrolled ? 'w-11 h-11' : 'w-14 h-14 sm:w-[76px] sm:h-[76px] lg:w-[88px] lg:h-[88px]'
              }`}
            />
          </NavLink>

          {/* Center pill nav — desktop */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
            {navLinks.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative px-7 py-1.5 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-[#333132] shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18172871814"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              (817) 287-1814
            </a>
            <NavLink
              to="/contact"
              className="flex items-center gap-2 bg-[#568dca] hover:bg-[#4a7db8] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 active:scale-95 shadow-lg shadow-[#568dca]/20"
            >
              Start Today
              <span className="text-white/70">→</span>
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isDarkPage || scrolled ? 'text-white hover:bg-white/10' : 'text-[#333132] hover:bg-black/5'
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden mx-4 mt-2 overflow-hidden transition-all duration-500 rounded-2xl bg-[#1c1b1a]/95 backdrop-blur-2xl border border-white/10 shadow-2xl ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 py-5 flex flex-col gap-1">
            {navLinks.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-3 bg-[#568dca] text-white text-sm font-bold px-5 py-3 rounded-xl text-center"
            >
              Start Today →
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}
