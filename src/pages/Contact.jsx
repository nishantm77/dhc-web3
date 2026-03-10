import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import VideoHero from '../components/VideoHero'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(972) 916-9486',
    href: 'tel:+19729169486',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'shree@dhctexas.com',
    href: 'mailto:shree@dhctexas.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '2300 Valley View Ln Suite #855, Irving, TX 75062',
    href: 'https://maps.google.com/?q=2300+Valley+View+Ln+Suite+855,+Irving,+TX+75062',
  },
]

export default function Contact() {
  useReveal()

  return (
    <div className="bg-white">
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <VideoHero
        eyebrow="Get in Touch"
        headline={
          <>
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568dca] to-[#7ba9dc]">
              Something Great.
            </span>
          </>
        }
        sub="Ready to start your project? We’d love to hear about it. Reach out for a free consultation and estimate — no obligation."
      />

      {/* ── CONTACT LAYOUT ──────────────────────────────────────── */}
      <section className="py-12 sm:py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — contact method cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === 'Address' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-start gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#568dca]/25 hover:shadow-xl bg-white transition-all duration-400"
                data-reveal
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5F8FB] group-hover:bg-[#568dca] flex items-center justify-center text-[#568dca] group-hover:text-white transition-all duration-400 flex-shrink-0 shadow-sm group-hover:shadow-lg group-hover:shadow-[#568dca]/30">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-[#568dca] text-[10px] uppercase tracking-widest font-bold mb-1">{label}</p>
                  <p className="text-[#111010] font-semibold text-base group-hover:text-[#568dca] transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* Business hours card */}
            <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-gray-100" data-reveal>
              <p className="text-[#568dca] text-[10px] uppercase tracking-widest font-bold mb-3">Office Hours</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Monday – Friday</span>
                  <span className="text-[#111010] text-sm font-bold">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Saturday</span>
                  <span className="text-[#111010] text-sm font-bold">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Sunday</span>
                  <span className="text-gray-300 text-sm font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="lg:col-span-8" data-reveal>
            <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/80 bg-white">
              {/* Panel header */}
              <div className="bg-[#111010] px-8 py-7 flex items-center justify-between">
                <div>
                  <h2 className="text-white font-serif font-bold text-2xl tracking-tighter">Our Location</h2>
                  <p className="text-white/50 text-sm mt-1">2300 Valley View Ln Suite #855, Irving, TX 75062</p>
                </div>
                <a
                  href="https://maps.google.com/?q=2300+Valley+View+Ln+Suite+855,+Irving,+TX+75062"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 bg-white/10 hover:bg-[#568dca] border border-white/15 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300"
                >
                  Open in Maps <ArrowRight size={13} strokeWidth={3} />
                </a>
              </div>
              {/* Map iframe */}
              <div className="w-full" style={{ height: 'clamp(280px, 55vw, 520px)' }}>
                <iframe
                  title="DHC Office Location"
                  src="https://maps.google.com/maps?q=2300+Valley+View+Ln+Suite+855,+Irving,+TX+75062&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
