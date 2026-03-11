import { useRef, useEffect, useCallback, useState } from 'react';

/** Segments split from the hero video — each ~10 s, loaded lazily */
const SEGMENTS = [
  '/hero-seg1.mp4',
  '/hero-seg2.mp4',
  '/hero-seg3.mp4',
  '/hero-seg4.mp4',
];

/**
 * VideoHero — shared full-bleed video backdrop used on every page.
 *
 * Props
 * ─────
 * eyebrow     string          Small all-caps label above the headline (blue line + text)
 * topSlot     ReactNode       Arbitrary content above the headline (replaces eyebrow on Home)
 * headline    ReactNode       The h1 content (supports JSX for gradient spans)
 * sub         string          Subtitle paragraph
 * fullscreen  bool            true → min-h-screen (Home), false → tall-but-fixed padding
 * children    ReactNode       Extra content rendered below sub (CTAs, stats, etc.)
 * floatingEl  ReactNode       Optional element pinned top-right (Home floating card)
 */
export default function VideoHero({
  eyebrow,
  topSlot,
  headline,
  sub,
  fullscreen = false,
  children,
  floatingEl,
}) {
  // ── Dual-buffer sequential video player ──────────────────────────────────
  const [activeSlot, setActiveSlot] = useState(0);
  const slot0Ref = useRef(null);
  const slot1Ref = useRef(null);
  const playheadRef = useRef(0); // index of the segment currently playing

  useEffect(() => {
    // Kick off segment 0 in slot 0; slot 1 already has segment 1 as its src
    // and preload="auto", so the browser buffers it in the background.
    slot0Ref.current?.play().catch(() => {});
  }, []);

  const handleEnded = useCallback(() => {
    const nextIdx = (playheadRef.current + 1) % SEGMENTS.length;
    playheadRef.current = nextIdx;
    const newSlot = nextIdx % 2;           // alternates 0 → 1 → 0 → 1 …
    const bufSlot = 1 - newSlot;
    const bufSegIdx = (nextIdx + 1) % SEGMENTS.length;

    // The new-active slot was preloaded — just play it
    (newSlot === 0 ? slot0Ref : slot1Ref).current?.play().catch(() => {});

    // Load the segment-after-next into the now-idle buffer slot
    const bufRef = (bufSlot === 0 ? slot0Ref : slot1Ref).current;
    if (bufRef) {
      bufRef.src = SEGMENTS[bufSegIdx];
      bufRef.load();
    }

    setActiveSlot(newSlot);
  }, []);
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <section
      className={`relative overflow-hidden bg-[#111010] flex flex-col justify-end ${
        fullscreen ? 'min-h-screen' : 'pt-28 sm:pt-40 lg:pt-60 pb-14 sm:pb-24 lg:pb-36'
      }`}
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        {/*
          Dual-buffer wrapper: slowZoom runs continuously on this div so the
          animation never resets on segment transitions. opacity-50 dims both
          slots uniformly; each slot crossfades with transition-opacity.
        */}
        <div
          className="absolute inset-0 opacity-50"
          style={{ animation: 'slowZoom 28s ease-in-out infinite alternate' }}
        >
          <video
            ref={slot0Ref}
            src={SEGMENTS[0]}
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              activeSlot === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <video
            ref={slot1Ref}
            src={SEGMENTS[1]}
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              activeSlot === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111010]/55 to-transparent" />
      </div>

      {/* ── Optional top-right floating element ── */}
      {floatingEl && (
        <div className="hidden sm:flex absolute top-28 right-6 lg:right-12 z-10 flex-col items-end gap-2 animate-[fadeIn_1s_ease_0.5s_both]">
          {floatingEl}
        </div>
      )}

      {/* ── Content ── */}
      <div
        className={`relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full ${
          fullscreen ? 'pb-16 lg:pb-20' : ''
        }`}
      >
        {/* Optional top-slot (e.g. Home badge) */}
        {topSlot && (
          <div className="mb-6 animate-[fadeIn_0.8s_ease_0.2s_both]">{topSlot}</div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6 animate-[fadeIn_0.8s_ease_0.1s_both]">
            <div className="h-[3px] w-10 bg-[#568dca]" />
            <span className="text-[#568dca] font-black tracking-[0.2em] uppercase text-xs">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="font-serif font-bold text-white tracking-tighter leading-[0.88] mb-8 animate-[fadeInUp_1s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"
          style={{ fontSize: 'clamp(2rem, 8vw, 9rem)' }}
        >
          {headline}
        </h1>

        {/* Subtitle */}
        {sub && (
          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed animate-[fadeInUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
            {sub}
          </p>
        )}

        {/* Page-specific extras (CTAs, stats, etc.) */}
        {children && (
          <div className="animate-[fadeInUp_1s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]">
            {children}
          </div>
        )}
      </div>

      {/* ── Scroll indicator (fullscreen only) ── */}
      {fullscreen && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 animate-[fadeIn_1s_ease_1.4s_both]">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      )}
    </section>
  )
}
