import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'
import { featuredProjects, projects, getProjectBySlug, imgUrl } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

const clients = [
  { name: 'City of Dallas', type: 'Municipal Government' },
  { name: 'City of Arlington', type: 'Municipal Government' },
  { name: 'City of Carrollton', type: 'Municipal Government' },
  { name: 'Dallas County', type: 'County Government' },
  { name: 'Child Care Associates', type: 'Nonprofit' },
  { name: 'Nehemia Group', type: 'Private Sector' },
  { name: 'Infinity Contractors', type: 'Commercial' },
  { name: 'Acumen Enterprises', type: 'Commercial' },
]

export default function Projects() {
  useReveal()
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const handler = e => {
      const proj = getProjectBySlug(e.detail)
      if (proj) setActiveProject(proj)
    }
    window.addEventListener('dhc:modal-nav', handler)
    return () => window.removeEventListener('dhc:modal-nav', handler)
  }, [])

  return (
    <div className="bg-[#111010]">
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <VideoHero
        eyebrow="Portfolio"
        headline={
          <>
            Projects &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">
              Clients.
            </span>
          </>
        }
        sub="Much of our growth comes from repeat clients and referrals — the strongest evidence of work done right."
      />

      {/* ── FEATURED PROJECT GRID ───────────────────────────────── */}
      <section className="px-6 lg:px-12 pb-0">
        <div className="max-w-[1700px] mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10 pt-4" data-reveal>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[3px] w-10 bg-[#568dca]" />
                <span className="text-[#568dca] font-black tracking-[0.2em] uppercase text-xs">Featured Work</span>
              </div>
              <h2 className="font-serif font-bold text-white tracking-tighter leading-none" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
                Selected Projects
              </h2>
            </div>
            <Link
              to="/projects/all"
              className="hidden sm:flex items-center gap-2 text-white/50 hover:text-[#568dca] text-sm font-bold transition-colors duration-300 group"
            >
              View All {projects.length} Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => {
              const { slug, title, scope, client, type, images, folder } = project
              const thumb = images?.length ? imgUrl(folder, images[0]) : null
              return (
              <button
                key={slug}
                onClick={() => setActiveProject(project)}
                className={`relative group overflow-hidden rounded-2xl sm:rounded-[2rem] block text-left w-full cursor-pointer ${i === 0 ? 'md:col-span-2' : ''}`}
                style={{ height: i <= 1 ? 'clamp(280px, 42vw, 500px)' : 'clamp(220px, 30vw, 380px)' }}
                data-reveal
              >
                {thumb && (
                <img
                  src={thumb}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-110 opacity-60"
                />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Type badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                    {type}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#568dca] text-[11px] font-bold uppercase tracking-widest mb-2">{client}</p>
                  <h3 className="text-white font-serif font-bold tracking-tighter text-2xl lg:text-3xl mb-1">{title}</h3>
                  <p className="text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">{scope}</p>
                </div>

                <div className="absolute bottom-7 right-7 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-45">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </button>
              )
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 mb-16 sm:mb-0 flex sm:hidden">
            <Link
              to="/projects/all"
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:bg-[#568dca] hover:border-[#568dca] text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300"
            >
              View All {projects.length} Projects <ArrowRight size={14} />
            </Link>
          </div>

          {/* Desktop CTA strip */}
          <div className="hidden sm:flex items-center justify-center pb-16 sm:pb-24 lg:pb-32 mt-12">
            <Link
              to="/projects/all"
              className="group flex items-center gap-3 border-2 border-white/10 hover:border-[#568dca] text-white/60 hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
            >
              <span>View All {projects.length} Projects</span>
              <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#568dca] flex items-center justify-center transition-colors duration-300">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLIENT SECTION ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div data-reveal>
              <span className="text-[#568dca] font-black tracking-[0.2em] uppercase text-xs mb-3 block">Our Partners</span>
              <h2 className="font-serif font-bold text-[#111010] tracking-tighter leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)' }}>
                Trusted <br />Clients.
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-base leading-relaxed" data-reveal>
              Government agencies, municipalities, nonprofits, and commercial contractors —
              all united by a shared demand for quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clients.map(({ name, type }, i) => (
              <div
                key={name}
                className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-[#568dca]/40 hover:shadow-xl bg-white transition-all duration-400 flex flex-col gap-2"
                data-reveal
              >
                <span className="text-gray-300 font-serif font-bold text-3xl leading-none">0{i + 1}</span>
                <h3 className="font-bold text-[#111010] text-base tracking-tight mt-2">{name}</h3>
                <p className="text-[#568dca] text-[11px] font-bold uppercase tracking-widest">{type}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 lg:p-12 rounded-[2rem] bg-[#F5F8FB] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8" data-reveal>
            <div>
              <p className="font-bold text-[#111010] text-xl mb-2">Built on referrals &amp; repeat business.</p>
              <p className="text-gray-500 text-sm max-w-lg">
                Much of DHC&apos;s business comes from clients who return and clients who refer us to
                others — the most reliable indicator of quality in our industry.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 flex items-center gap-2.5 bg-[#333132] text-white hover:bg-[#568dca] px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
            >
              Work with DHC <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
