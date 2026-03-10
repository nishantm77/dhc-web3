import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'

const values = [
  {
    n: '01',
    title: 'Customer Satisfaction',
    body: 'We prioritize the success of our clients and treat every project as a true partnership — your goals are our goals.',
  },
  {
    n: '02',
    title: 'Quality Control',
    body: 'Rigorous standards ensure every detail meets our exacting expectations before a project is considered complete.',
  },
  {
    n: '03',
    title: 'Timely Delivery',
    body: 'Strong scheduling and proactive project management enable consistent on-time completion, budget intact.',
  },
  {
    n: '04',
    title: 'Integrity & Honesty',
    body: 'Transparency and ethical conduct guide every decision we make — from the first estimate to the final walkthrough.',
  },
]

const expertise = [
  'Project Management',
  'Cost Estimating',
  'Construction Engineering',
  'Government Infrastructure',
  'Contract Administration',
  'Self-Performing Eight Trades',
]

export default function About() {
  useReveal()

  return (
    <div className="bg-white">
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <VideoHero
        eyebrow="Who We Are"
        headline={
          <>
            Built on Trust. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">
              Proven by Results.
            </span>
          </>
        }
        sub="Dallas Harmony Construction, LLC. has been simplifying commercial construction for government agencies, municipalities, and private sector clients across DFW since 2013."
      />

      {/* ── ABOUT BODY ──────────────────────────────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left sticky label */}
          <div className="lg:col-span-4" data-reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none" style={{ fontSize: 'clamp(2.4rem,4vw,4.5rem)' }}>
                Our <br /><span className="text-[#568dca]">Mission.</span>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#F5F8FB] border border-gray-100">
                  <p className="font-serif font-bold text-[#111010] text-4xl">10+</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Years</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F5F8FB] border border-gray-100">
                  <p className="font-serif font-bold text-[#111010] text-4xl">8</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Core Trades</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right body text */}
          <div className="lg:col-span-8 space-y-7 text-gray-600 text-lg leading-relaxed" data-reveal>
            <p>
              Dallas Harmony Construction, LLC. was founded in 2013 in Dallas, Texas with a simple
              vision: deliver dependable construction solutions that allow clients to focus on their
              mission while we handle the complexity of building.
            </p>
            <p>
              Over the last decade, DHC has grown from a small startup into a trusted construction
              partner for government agencies, municipalities, educational institutions, and commercial
              clients across the Dallas–Fort Worth metroplex. Our reputation has been built on
              integrity, precision, and the ability to deliver projects efficiently without
              compromising quality.
            </p>
            <p>
              We specialize in small-to-mid scale commercial construction projects ranging from
              interior renovations to structural work and facility upgrades. By self-performing key
              trades such as drywall, concrete, painting, flooring, and masonry, we maintain full
              control over quality, scheduling, and cost efficiency.
            </p>

            {/* Image */}
            <div className="rounded-[2rem] overflow-hidden h-80 lg:h-[450px] my-10">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                alt="DHC project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ───────────────────────────────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 bg-[#111010] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#568dca] rounded-full blur-[220px] opacity-8 pointer-events-none" />
        <div className="max-w-[1700px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div data-reveal>
            <span className="text-[#568dca] font-bold tracking-widest uppercase text-xs mb-5 block">Our Story</span>
            <h2 className="font-serif font-bold text-white tracking-tighter leading-none mb-8" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
              A Gap in the Market. <br />
              <span className="text-white/40">A Company Built to Fill It.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              Before founding DHC, president Shripad Maldikar worked on numerous large-scale
              construction projects across Texas, including government and military facilities.
              Through that experience, he identified a gap in the market for a firm that could
              deliver efficient construction services with the agility and attention of a specialized
              team.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Today, DHC continues to expand its capabilities while maintaining the same
              entrepreneurial spirit and client-first philosophy that defined its beginning.
            </p>
          </div>

          {/* Story visual */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-[420px] lg:h-[520px] shadow-2xl" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
              alt="Construction"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#568dca] text-xs font-bold uppercase tracking-widest mb-2">Founded</p>
              <p className="text-white text-3xl font-serif font-bold tracking-tighter">Dallas, Texas — 2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex items-center gap-2 mb-16" data-reveal>
            <div className="w-10 h-px bg-[#333132]" />
            <span className="text-[#333132] font-bold tracking-widest uppercase text-xs">Leadership</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5" data-reveal>
              <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>
                Shripad <br /><span className="text-[#568dca]">Maldikar</span>
              </h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-8">
                President — Dallas Harmony Construction
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Shripad brings extensive experience in project management, construction engineering,
                cost estimating, and government infrastructure projects.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                His deep experience across Texas government and military construction projects gave
                him the insight to build DHC as a firm where personal commitment and professional
                precision coexist.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-reveal>
              <div className="sm:col-span-2 rounded-[2rem] overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1800&auto=format&fit=crop"
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
              {expertise.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-[#F5F8FB] border border-gray-100 hover:border-[#568dca]/20 hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#568dca] flex-shrink-0" />
                  <span className="text-[#333132] text-sm font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 bg-[#F5F8FB]">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div data-reveal>
              <span className="text-[#568dca] font-bold tracking-widest uppercase text-xs mb-3 block">Core Values</span>
              <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>
                What We <br />Stand By.
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-base leading-relaxed" data-reveal>
              These four principles are not aspirational — they are operational. Every DHC project
              is measured against them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ n, title, body }) => (
              <div
                key={n}
                className="group p-8 lg:p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-[#568dca]/20 hover:shadow-xl transition-all duration-500"
                data-reveal
              >
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-gray-200 font-serif font-bold text-4xl leading-none group-hover:text-[#568dca]/30 transition-colors">{n}</span>
                  <h3 className="font-bold text-[#111010] text-xl tracking-tight">{title}</h3>
                </div>
                <p className="text-gray-500 text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8" data-reveal>
          <h2 className="font-serif font-bold text-[#111010] tracking-tighter text-4xl lg:text-5xl">
            Ready to partner with DHC?
          </h2>
          <Link
            to="/contact"
            className="flex-shrink-0 flex items-center gap-2.5 bg-[#333132] text-white hover:bg-[#568dca] px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 active:scale-95"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
