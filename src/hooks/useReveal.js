import { useEffect } from 'react'

/**
 * Attaches IntersectionObserver to all [data-reveal] elements in the DOM.
 * Call this at the top of each page component.
 */
export default function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    els.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${(i % 5) * 80}ms`)
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
