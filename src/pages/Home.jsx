import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react'
import AnimatedNumber from '../components/AnimatedNumber'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'

const serviceTeaser = [
  {
    num: '01',
    title: 'General Construction\n& Renovation',
    desc: 'Turnkey commercial builds, structural upgrades, and facility improvements.',
  },
  {
    num: '02',
    title: 'Interior Systems',
    desc: 'Drywall, painting, ceilings, flooring, and full interior finish-outs.',
  },
  {
    num: '03',
    title: 'Concrete & Masonry',
    desc: 'Foundations, flatwork, ADA ramps, pavement, and masonry construction.',
  },
  {
    num: '04',
    title: 'Facility Upgrades',
    desc: 'Targeted modernisation projects that keep facilities at peak performance.',
  },
]

const stats = [
  { value: 10, suffix: '+', label: 'Years in DFW' },
  { value: 8, suffix: '', label: 'Repeat Clients' },
  { value: 6, suffix: '', label: 'Trades Self-Performed' },
  { value: 100, suffix: '%', label: 'Bonded & Insured' },
]

export default function Home() {
  useReveal()

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <VideoHero
        fullscreen
        topSlot={
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#568dca] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#568dca]" />
            </span>
            <span className="text-white/80 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
              Dallas–Fort Worth · Since 2013
            </span>
          </div>
        }
        headline={
          <>
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Reliability.
            </span>
          </>
        }
        floatingEl={
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3 text-right">
            <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Specialty</p>
            <p className="text-white text-sm font-bold mt-0.5">Designing In Solution</p>
          </div>
        }
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-2">
          <div className="w-full max-w-lg">
            <p className="text-white/70 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              Trusted commercial construction partner serving government and private sector clients.{' '}
              <em className="text-white/50 not-italic">&ldquo;We take on your challenges as our own.&rdquo;</em>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2.5 bg-white text-[#111010] hover:bg-[#568dca] hover:text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 shadow-xl"
              >
                Start a Project <ArrowRight size={16} strokeWidth={3} />
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2.5 border border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
          {/* Glass stat strip */}
          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto">
            {stats.map(({ value, suffix, label }, i) => (
              <div
                key={label}
                className={`px-5 sm:px-7 py-4 sm:py-5 flex flex-col gap-0.5 ${
                  i < stats.length - 1
                    ? 'border-r border-b sm:border-b-0 border-white/10'
                    : ''
                }`}
              >
                <p className="text-white font-serif font-bold text-3xl leading-none">
                  <AnimatedNumber end={value} />{suffix}
                </p>
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </VideoHero>

      {/* ── SERVICES TEASER ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
            <div data-reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-10 bg-[#568dca]" />
                <span className="text-[#568dca] font-bold tracking-widest uppercase text-xs">What We Do</span>
              </div>
              <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none" style={{ fontSize: 'clamp(2.8rem,6vw,6rem)' }}>
                Trades We <span className="italic text-[#568dca]">Master.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-3 text-sm font-bold text-[#333132] hover:text-[#568dca] transition-colors group flex-shrink-0"
              data-reveal
            >
              All Services <MoveRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {serviceTeaser.map(({ num, title, desc }, idx) => (
              <Link
                to="/services"
                key={num}
                className="group relative bg-white border-2 border-gray-200 hover:border-[#568dca] rounded-[1.75rem] p-7 sm:p-8 lg:p-9 hover:shadow-2xl hover:shadow-[#568dca]/10 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] overflow-hidden"
                data-reveal
              >
                {/* Brutalist watermark number */}
                <span className="pointer-events-none select-none absolute -bottom-4 -right-2 font-serif font-bold text-[8rem] leading-none text-gray-100 group-hover:text-[#568dca]/8 transition-colors duration-500">
                  {num}
                </span>

                <div className="flex flex-col gap-5 relative z-10">
                  {/* Number badge */}
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#568dca] group-hover:bg-[#568dca] flex items-center justify-center text-[11px] font-bold tracking-wider text-gray-400 group-hover:text-white transition-all duration-400">
                      {num}
                    </span>
                    <span className="text-gray-200 group-hover:text-[#568dca] transition-colors duration-400 text-xl font-bold leading-none select-none">&rarr;</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-[#111010] text-xl sm:text-2xl lg:text-[1.6rem] tracking-tighter leading-[1.15] whitespace-pre-line">
                    {title}
                  </h3>
                </div>

                {/* Desc */}
                <div className="mt-5 overflow-hidden relative z-10">
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">{desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-[#568dca] text-[11px] font-bold uppercase tracking-widest opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    Explore <ChevronRight size={13} strokeWidth={3} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-[#F5F8FB]">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left text */}
          <div data-reveal>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-px bg-[#333132]" />
              <span className="text-[#333132] font-bold tracking-widest uppercase text-xs">About DHC</span>
            </div>
            <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none mb-8" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>
              Proven <span className="text-[#568dca]">Reliability</span><br />since 2013.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-4">
              Dallas Harmony Construction was founded with a single objective: simplify construction
              for organizations that need reliable partners. Over ten years we have grown from a small
              startup into a trusted partner for government agencies, municipalities, and commercial
              clients across the DFW metroplex.
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
              By self-performing eight core trades, we maintain full control over quality, scheduling,
              and cost efficiency on every project.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 border border-[#333132] text-[#333132] hover:bg-[#333132] hover:text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
            >
              What We Do <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — stacked image cards */}
          <div className="relative h-[300px] sm:h-[420px] lg:h-[580px]" data-reveal>
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop"
                alt="DHC construction project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Floating badge card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Government & Commercial</p>
                  <p className="text-white text-base font-bold mt-1">City of Dallas · Arlington · Dallas County</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#568dca] flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE CLIENT STRIP ─────────────────────────────────── */}
      <section className="py-5 bg-white border-y-2 border-gray-900 overflow-hidden">
        <div className="flex gap-12 items-center animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
          {[
            'City of Dallas', 'City of Arlington', 'City of Carrollton', 'Dallas County',
            'Child Care Associates', 'Nehemia Group', 'Infinity Contractors', 'Acumen Enterprises',
            'City of Dallas', 'City of Arlington', 'City of Carrollton', 'Dallas County',
            'Child Care Associates', 'Nehemia Group', 'Infinity Contractors', 'Acumen Enterprises',
          ].map((name, i) => (
            <span key={i} className="text-gray-800 text-xs font-black uppercase tracking-[0.2em] flex-shrink-0 flex items-center gap-10">
              {name}
              <span className="w-1.5 h-1.5 bg-[#568dca]" />
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-[#111010] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#568dca] rounded-full blur-[180px] opacity-10 pointer-events-none" />
        <div className="max-w-[1700px] mx-auto relative z-10" data-reveal>
          {/* Brutalist inset frame */}
          <div className="border-2 border-white/10 rounded-3xl p-10 sm:p-16 lg:p-20 relative">
            {/* Corner ticks */}
            <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#568dca]" />
            <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#568dca]" />
            <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#568dca]" />
            <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#568dca]" />
            <div className="text-center">
              <p className="text-[#568dca] font-black tracking-[0.25em] uppercase text-xs mb-6">Ready to Build?</p>
              <h2 className="font-serif font-bold text-white tracking-tighter mb-8 leading-none" style={{ fontSize: 'clamp(2.5rem,6vw,7rem)' }}>
                Let&apos;s build something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">great together.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
                Reach out for a free consultation and estimate. No obligation, no complexity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="flex items-center gap-2.5 bg-white text-[#111010] hover:bg-[#568dca] hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 shadow-xl"
                >
                  Get a Free Quote <ArrowRight size={16} strokeWidth={3} />
                </Link>
                <Link
                  to="/projects"
                  className="flex items-center gap-2.5 border-2 border-white/20 text-white hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
