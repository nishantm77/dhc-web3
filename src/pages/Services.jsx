import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, HardHat, Building2, Layers, DoorOpen, Wrench } from 'lucide-react'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'

const services = [
  {
    icon: Building2,
    num: '01',
    title: 'General Construction\n& Renovation',
    desc: 'Turnkey construction services for commercial and government facilities including structural upgrades, building additions, and interior improvements.',
    tags: ['Structural Work', 'Building Additions', 'Tenant Fit-Out'],
  },
  {
    icon: Layers,
    num: '02',
    title: 'Interior Remodeling',
    desc: 'Office renovations, institutional remodeling, and functional space redesign. We transform underperforming spaces into productive environments.',
    tags: ['Office Buildouts', 'Institutional', 'Space Design'],
  },
  {
    icon: HardHat,
    num: '03',
    title: 'Concrete & Masonry',
    desc: 'Foundation systems, pavement improvements, structural concrete, sidewalks, ADA ramps, and full masonry construction.',
    tags: ['Foundations', 'ADA Ramps', 'Pavement'],
  },
  {
    icon: Hammer,
    num: '04',
    title: 'Drywall, Painting\n& Finishes',
    desc: 'Complete interior finishing — drywall framing and installation, painting, flooring systems, acoustical ceilings, and all finish trades.',
    tags: ['Drywall', 'Painting', 'Flooring', 'Ceilings'],
  },
  {
    icon: DoorOpen,
    num: '05',
    title: 'Doors, Hardware\n& Fixtures',
    desc: 'Supply and installation of doors, hollow metal frames, finish hardware, toilet partitions, and facility accessories.',
    tags: ['Hollow Metal', 'Hardware', 'Partitions'],
  },
  {
    icon: Wrench,
    num: '06',
    title: 'Facility Upgrades\n& Maintenance',
    desc: 'Targeted improvement projects to modernise, refresh, and maintain facilities at peak operational condition.',
    tags: ['Modernisation', 'Preventive', 'Compliance'],
  },
]

const trades = [
  'Concrete Construction',
  'Masonry & Stucco',
  'Drywall Installation',
  'Painting',
  'Ceiling Systems',
  'Flooring',
  'Toilet Partitions & Accessories',
  'Doors, Frames & Hardware',
]

export default function Services() {
  useReveal()

  return (
    <div className="bg-white">
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <VideoHero
        eyebrow="What We Build"
        headline={
          <>
            Services &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">Capabilities.</span>
          </>
        }
        sub="End-to-end commercial construction from groundbreaking to final punch list. Eight self-performing trades. One accountable partner."
      />

      {/* ── SERVICES GRID ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, num, title, desc, tags }, idx) => (
              <article
                key={num}
                className="group relative p-8 lg:p-10 rounded-[2rem] border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden flex flex-col justify-between min-h-[380px]"
                data-reveal
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#568dca]/5 to-transparent pointer-events-none rounded-[2rem]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#F5F8FB] group-hover:bg-[#568dca] flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#568dca]/30">
                      <Icon size={26} strokeWidth={1.5} className="text-[#333132] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-200 font-serif font-bold text-5xl leading-none group-hover:text-[#568dca]/20 transition-colors">{num}</span>
                  </div>

                  <h3 className="font-serif font-bold text-[#111010] text-2xl lg:text-3xl tracking-tighter leading-snug mb-4 whitespace-pre-line">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>

                <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-100 group-hover:bg-[#568dca]/10 text-gray-500 group-hover:text-[#568dca] text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF-PERFORMED TRADES ───────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-[#111010] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#568dca] rounded-full blur-[200px] opacity-8 pointer-events-none" />
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div data-reveal>
              <span className="text-[#568dca] font-black tracking-[0.2em] uppercase text-xs mb-5 block">Self-Performed</span>
              <h2 className="font-serif font-bold text-white tracking-tighter leading-none mb-8" style={{ fontSize: 'clamp(2.4rem,5vw,5.5rem)' }}>
                Eight Trades. <br />
                <span className="text-white/40">One firm.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Self-performing these trades allows DHC to maintain tighter quality control,
                reliable project timelines, and better cost efficiency than firms that heavily
                subcontract. You get a single point of accountability — from start to finish.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-white text-[#111010] hover:bg-[#568dca] hover:text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
              >
                Discuss Your Project <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-reveal>
              {trades.map((trade, i) => (
                <div
                  key={trade}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/8 hover:border-[#568dca]/40 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#568dca] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">{trade}</span>
                  <span className="ml-auto text-white/20 font-serif font-bold text-sm">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SELF-PERFORM ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-[#F5F8FB]">
        <div className="max-w-[1700px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24" data-reveal>
            <span className="text-[#568dca] font-black tracking-[0.2em] uppercase text-xs mb-5 block">The DHC Advantage</span>
            <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none" style={{ fontSize: 'clamp(2.2rem,4vw,4.5rem)' }}>
              Why Choose DHC?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { n: '10+', label: 'Years Experience', body: 'Over a decade of consistent project delivery in the DFW construction market.' },
              { n: '100%', label: 'Bonded & Insured', body: 'Fully bonded and insured. We are compliance-ready for government procurement.' },
              { n: '8', label: 'Self-Performed Trades', body: 'Direct control over quality, cost, and timeline. No middle-men, no surprises.' },
            ].map(({ n, label, body }) => (
              <div
                key={n}
                className="p-8 lg:p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-[#568dca]/20 hover:shadow-xl transition-all duration-500"
                data-reveal
              >
                <p className="font-serif font-bold text-[#568dca] text-5xl lg:text-6xl tracking-tighter mb-3">{n}</p>
                <p className="font-bold text-[#111010] text-lg mb-3">{label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
