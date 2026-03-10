import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ImageIcon } from 'lucide-react'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'
import { projects, getProjectBySlug, imgUrl } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

// Type → accent color mapping for variety
const typeColors = {
  'Municipal Government': '#568dca',
  'County Government':    '#7ba9dc',
  'Federal Government':   '#4a7ab5',
  'Public Institution':   '#568dca',
  'Recreation Facility':  '#5aaa8a',
  'Cultural Heritage':    '#c4923a',
  'Education':            '#7b6dca',
  'Commercial':           '#888',
  'Nonprofit Education':  '#c4693a',
}

export default function AllProjects() {
  useReveal()
  const [activeProject, setActiveProject] = useState(null)

  // Listen for in-modal prev/next navigation events
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
      {/* ── HERO ───────────────────────────────────────────────── */}
      <VideoHero
        eyebrow="Full Portfolio"
        headline={
          <>
            All{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">
              Projects.
            </span>
          </>
        }
        sub={`${projects.length} projects across government, municipal, education, and commercial sectors.`}
      />

      {/* ── BACK NAV ────────────────────────────────────────────── */}
      <div className="px-6 lg:px-12 pt-8 pb-2 max-w-[1700px] mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#568dca] text-sm font-bold transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Featured Projects
        </Link>
      </div>

      {/* ── PROJECT GRID — ALL 19 ────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10 pb-24 lg:pb-40">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map(({ slug, title, scope, client, type, images, folder }, i) => {
            const thumb = images?.length ? imgUrl(folder, images[0]) : null
            const accent = typeColors[type] || '#568dca'
            const num = String(i + 1).padStart(2, '0')

            return (
              <button
                key={slug}
                onClick={() => setActiveProject(projects[i])}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1919] border-2 border-gray-800/60 hover:border-[#568dca]/50 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#568dca]/10 cursor-pointer text-left w-full"
                style={{ minHeight: 'clamp(240px, 28vw, 360px)' }}
                data-reveal
              >
                {/* Image or placeholder */}
                {thumb ? (
                  <div className="absolute inset-0">
                    <img
                      src={thumb}
                      alt={title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-all duration-[1.8s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)`
                  }} />
                )}

                {/* Watermark number */}
                <div
                  className="absolute top-3 right-4 font-serif font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(4rem,8vw,6rem)', color: accent, opacity: 0.07 }}
                >
                  {num}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6 pt-14">
                  {/* Type badge */}
                  <span
                    className="self-start px-3 py-1 rounded-full text-[10px] font-black tracking-[0.15em] uppercase border"
                    style={{ color: accent, borderColor: `${accent}30`, background: `${accent}12` }}
                  >
                    {type}
                  </span>

                  {/* Bottom info */}
                  <div className="mt-auto pt-10">
                    {!thumb && (
                      <div className="flex items-center gap-2 text-white/20 text-xs mb-3">
                        <ImageIcon size={12} />
                        <span>Photos coming soon</span>
                      </div>
                    )}
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1.5">{client}</p>
                    <h3 className="text-white font-serif font-bold tracking-tighter text-xl leading-tight mb-2 group-hover:text-[#568dca] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-white/30 text-xs leading-relaxed line-clamp-2 group-hover:text-white/50 transition-colors duration-300">
                      {scope}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full border border-white/10 group-hover:border-[#568dca] group-hover:bg-[#568dca] flex items-center justify-center transition-all duration-300">
                  <ArrowRight size={13} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 pb-24 lg:pb-40">
        <div className="max-w-[1700px] mx-auto">
          <div className="relative p-8 lg:p-12 rounded-[2rem] bg-[#568dca] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10">
              <p className="text-white font-serif font-bold text-2xl lg:text-3xl tracking-tighter mb-2">
                Ready to start your project?
              </p>
              <p className="text-white/70 text-sm max-w-md">
                Join the municipalities, government agencies, and businesses who trust DHC
                to deliver on time and on budget.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link
                to="/contact"
                className="flex items-center gap-2.5 bg-white text-[#568dca] hover:bg-[#111010] hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
              >
                Start a Conversation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── PROJECT MODAL ── */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
