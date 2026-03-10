import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  X, ChevronLeft, ChevronRight, ImageIcon,
  User, Briefcase, Tag, ArrowRight,
  ArrowLeft, Maximize2,
} from 'lucide-react'
import { projects, imgUrl } from '../data/projects'

// ── Carousel slide ────────────────────────────────────────────
function Slide({ src, alt, index }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
      />
    )
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#151414] relative">
      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 29px,#fff 29px,#fff 30px),' +
            'repeating-linear-gradient(90deg,transparent,transparent 29px,#fff 29px,#fff 30px)',
        }}
      />
      {/* corner ticks */}
      <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#568dca]/40" />
      <span className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#568dca]/40" />
      <span className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#568dca]/40" />
      <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#568dca]/40" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <ImageIcon size={22} className="text-white/20" />
        </div>
        <p className="text-white/20 text-xs font-black tracking-[0.2em] uppercase">
          Photo {index}
        </p>
        <p className="text-white/12 text-[10px]">Image pending</p>
      </div>
    </div>
  )
}

// ── Meta rows ────────────────────────────────────────────────
const META = [
  { icon: User,       key: 'client',  label: 'Client'          },
  { icon: Briefcase,  key: 'scope',   label: 'Scope of Work'   },
  { icon: Tag,        key: 'type',    label: 'Sector'          },
]

// ── Main modal ───────────────────────────────────────────────
export default function ProjectModal({ project, onClose }) {
  const [slideIdx, setSlideIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  // Build slides array from project.images
  const slides = (project.images ?? []).map((filename, i) => ({
    src: imgUrl(project.folder, filename),
    label: `Photo ${i + 1}`,
  }))
  if (slides.length === 0) slides.push({ src: null, label: 'Photo 1' })
  const total = slides.length

  const prevSlide = useCallback(() => setSlideIdx(i => (i - 1 + total) % total), [total])
  const nextSlide = useCallback(() => setSlideIdx(i => (i + 1) % total), [total])

  // Project siblings for bottom nav
  const idx      = projects.findIndex(p => p.slug === project.slug)
  const prevProj = projects[idx - 1] ?? null
  const nextProj = projects[idx + 1] ?? null

  // ESC to close lightbox first, then modal
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(false)
        else onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, lightbox])

  // Scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Reset carousel when project changes
  useEffect(() => { setSlideIdx(0) }, [project.slug])

  // Arrow keys for carousel
  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prevSlide, nextSlide])

  return (
    <>
    {/* ── Backdrop ── */}
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      style={{ background: 'rgba(10,10,10,0.88)', backdropFilter: 'blur(18px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* ── Card ── */}
      <div
        className="relative w-full max-w-[1100px] max-h-[92vh] overflow-y-auto bg-[#141313] rounded-3xl border border-white/8 shadow-2xl flex flex-col"
        style={{ scrollbarWidth: 'none' }}
      >

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/8 hover:bg-white/18 border border-white/10 flex items-center justify-center transition-all duration-200 group"
          aria-label="Close"
        >
          <X size={15} className="text-white/60 group-hover:text-white transition-colors duration-200" />
        </button>

        {/* ── Body: carousel + info side-by-side on lg ── */}
        <div className="flex flex-col lg:flex-row">

          {/* ══ LEFT — CAROUSEL ══ */}
          <div className="lg:w-[56%] flex-shrink-0">
            {/* Main slide */}
            <div
              className={`relative overflow-hidden rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-3xl ${slides[slideIdx]?.src ? 'cursor-zoom-in' : ''}`}
              style={{ height: 'clamp(240px, 40vw, 520px)' }}
              onClick={() => { if (slides[slideIdx]?.src) setLightbox(true) }}
            >
              <Slide
                src={slides[slideIdx]?.src ?? null}
                alt={`${project.title} — ${slides[slideIdx]?.label}`}
                index={slideIdx + 1}
              />

              {/* Zoom hint icon — only on real images */}
              {slides[slideIdx]?.src && (
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <Maximize2 size={13} className="text-white/70" />
                </div>
              )}

              {/* Gradient overlay bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141313] to-transparent" />

              {/* Prev / Next arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={e => { e.stopPropagation(); prevSlide() }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-[#568dca] hover:border-[#568dca] transition-all duration-200 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} className="text-white" />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); nextSlide() }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-[#568dca] hover:border-[#568dca] transition-all duration-200 group"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} className="text-white" />
                  </button>
                </>
              )}

              {/* Slide counter pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/60 text-[11px] font-black tracking-[0.15em]">
                {slideIdx + 1} / {total}
              </div>
            </div>

            {/* Dot indicators + thumbnails strip */}
            <div className="flex items-center justify-center gap-2 py-4 px-6 flex-wrap">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`transition-all duration-200 rounded-sm ${
                    i === slideIdx
                      ? 'w-6 h-2 bg-[#568dca]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ══ RIGHT — INFO ══ */}
          <div className="lg:w-[44%] flex flex-col p-7 lg:p-8 lg:pt-10 gap-0 overflow-y-auto">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-8 bg-[#568dca]" />
              <span className="text-[#568dca] text-[10px] font-black tracking-[0.2em] uppercase">
                {project.type}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif font-bold text-white tracking-tighter leading-tight mb-4"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Meta rows */}
            <div className="flex flex-col gap-0 mb-6 border-t border-white/6">
              {META.map(({ icon: Icon, key, label }) => (
                <div
                  key={key}
                  className="flex items-start gap-3 py-3 border-b border-white/6"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center mt-0.5">
                    <Icon size={12} className="text-[#568dca]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[9px] font-black tracking-[0.18em] uppercase mb-0.5">{label}</p>
                    <p className="text-white text-xs font-bold">{project[key]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-2">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-[#568dca] hover:bg-[#4a7ab5] text-white py-3 rounded-full font-bold text-sm transition-all duration-200 w-full"
              >
                Start a Similar Project <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Sibling project nav ── */}
        {(prevProj || nextProj) && (
          <div className="grid grid-cols-2 gap-3 px-6 pb-6 pt-1">
            <div>
              {prevProj && (
                <button
                  onClick={() => {
                    // signal parent to switch project
                    window.dispatchEvent(new CustomEvent('dhc:modal-nav', { detail: prevProj.slug }))
                  }}
                  className="group w-full text-left flex flex-col gap-0.5 p-4 rounded-2xl border border-white/8 hover:border-[#568dca]/40 hover:bg-white/[0.02] transition-all duration-200"
                >
                  <span className="flex items-center gap-1.5 text-white/30 group-hover:text-[#568dca] text-[9px] font-black tracking-[0.15em] uppercase transition-colors duration-200">
                    <ArrowLeft size={10} /> Previous
                  </span>
                  <span className="text-white/70 font-serif font-bold text-sm leading-tight line-clamp-2 group-hover:text-white transition-colors duration-200">
                    {prevProj.title}
                  </span>
                </button>
              )}
            </div>
            <div>
              {nextProj && (
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('dhc:modal-nav', { detail: nextProj.slug }))
                  }}
                  className="group w-full text-right flex flex-col gap-0.5 p-4 rounded-2xl border border-white/8 hover:border-[#568dca]/40 hover:bg-white/[0.02] transition-all duration-200"
                >
                  <span className="flex items-center justify-end gap-1.5 text-white/30 group-hover:text-[#568dca] text-[9px] font-black tracking-[0.15em] uppercase transition-colors duration-200">
                    Next <ArrowRight size={10} />
                  </span>
                  <span className="text-white/70 font-serif font-bold text-sm leading-tight line-clamp-2 group-hover:text-white transition-colors duration-200">
                    {nextProj.title}
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* ── LIGHTBOX ── */}
    {lightbox && slides[slideIdx]?.src && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(8px)' }}
        onClick={() => setLightbox(false)}
      >
        {/* Close */}
        <button
          onClick={() => setLightbox(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-200 z-10"
          aria-label="Close lightbox"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Prev in lightbox */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); prevSlide() }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#568dca] border border-white/15 flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
        )}

        {/* Full image */}
        <img
          src={slides[slideIdx].src}
          alt={project.title}
          className="max-w-[92vw] max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
          onClick={e => e.stopPropagation()}
          draggable={false}
        />

        {/* Next in lightbox */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); nextSlide() }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#568dca] border border-white/15 flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        )}

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/50 text-[11px] font-black tracking-[0.15em]">
          {slideIdx + 1} / {total}
        </div>
      </div>
    )}
    </>
  )
}
