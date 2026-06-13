import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Sparkles, LayoutGrid, Gem, MessageCircle } from 'lucide-react'

const FINISHES = [
  {
    icon: Layers,
    tag:   { al: 'Veshje',    en: 'Coating'   },
    label: { al: 'Veshje Matte', en: 'Matte Coating' },
    desc:  {
      al: 'Sipërfaqe e butë pa shkëlqim — elegante, rezistente ndaj gjurmëve dhe ndijim premium në prekje.',
      en: 'Smooth non-reflective surface — elegant, fingerprint-resistant and premium to the touch.',
    },
  },
  {
    icon: Gem,
    tag:   { al: 'Metalik',   en: 'Metallic'  },
    label: { al: 'Folë Ari / Argjend', en: 'Gold / Silver Foil' },
    desc:  {
      al: 'Hot-stamping me metalik ari ose argjend — logo dhe detaje luksoze që shkëlqejnë literalisht.',
      en: 'Hot-stamped metallic gold or silver — logos and luxury details that literally shine.',
    },
    shimmer: true,
  },
  {
    icon: Sparkles,
    tag:   { al: 'Lustër',    en: 'Gloss'     },
    label: { al: 'Spot UV',   en: 'Spot UV'   },
    desc:  {
      al: 'Lustër selektive mbi bazë matte — krijon kontrast vizual dhe ndijim të shtresëzuar.',
      en: 'Selective high-gloss over matte — creates visual contrast and a layered tactile feel.',
    },
  },
  {
    icon: LayoutGrid,
    tag:   { al: 'Strukturë', en: 'Structure' },
    label: { al: 'Kuti me Ndarje', en: 'Compartment Boxes' },
    desc:  {
      al: 'Tre ndarje karton që palosen njëra brenda tjetrës — pa ngjitës, vetëm strukturë e pastër.',
      en: 'Three cardboard sections that fold into each other — no glue, pure structural engineering.',
    },
  },
]

export function PremiumStrip({ lang = 'al' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a0b0a] px-4 py-20"
      aria-label={lang === 'al' ? 'Finisazhe Premium' : 'Premium Finishes'}
    >
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 -translate-y-1/3 rounded-full blur-[100px]"
        style={{ background: 'rgba(180,100,0,0.07)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/8 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-400">
            <Gem className="size-3.5" aria-hidden />
            {lang === 'al' ? 'Finisazhe Premium' : 'Premium Finishes'}
          </span>

          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white md:text-4xl">
            {lang === 'al' ? (
              <>Paketime që <span className="text-amber-400">bien në sy</span></>
            ) : (
              <>Packaging that <span className="text-amber-400">stands out</span></>
            )}
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/45">
            {lang === 'al'
              ? 'Mbi printimin standard ofrojmë finisazhe speciale — veshje, metalik dhe struktura të sofistikuara që ngrenë perceptimin e produktit tënd.'
              : 'Beyond standard printing we offer special finishes — coatings, metallics and sophisticated structures that elevate your product perception.'}
          </p>
        </motion.div>

        {/* ── Cards ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FINISHES.map((finish, i) => (
            <motion.div
              key={finish.label.al}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-amber-500/25 hover:bg-white/[0.045]"
            >
              {/* Gold shimmer sweep (gold foil card only) */}
              {finish.shimmer && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ backgroundPosition: ['200% center', '-200% center'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(217,119,6,0.15) 50%, transparent 60%)',
                    backgroundSize: '300% 100%',
                  }}
                />
              )}

              {/* Hover top-border glow */}
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

              {/* Icon */}
              <div className="mb-5 flex size-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/8 transition-colors duration-300 group-hover:border-amber-500/40 group-hover:bg-amber-500/12">
                <finish.icon className="size-5 text-amber-400" aria-hidden />
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/50">
                {lang === 'al' ? finish.tag.al : finish.tag.en}
              </span>

              {/* Label */}
              <h3 className="mt-1 text-base font-extrabold leading-snug text-white">
                {lang === 'al' ? finish.label.al : finish.label.en}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-xs leading-relaxed text-white/40">
                {lang === 'al' ? finish.desc.al : finish.desc.en}
              </p>

              {/* CTA */}
              <a
                href="https://wa.me/38344113533"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-bold text-amber-400/55 transition-colors duration-150 hover:text-amber-400"
                aria-label={lang === 'al'
                  ? `Kërko ofertë për ${finish.label.al}`
                  : `Request quote for ${finish.label.en}`}
              >
                <MessageCircle className="size-3.5" aria-hidden />
                {lang === 'al' ? 'Kërko ofertë' : 'Request quote'}
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 text-center text-xs text-white/25"
        >
          {lang === 'al'
            ? 'Të gjitha finisazhet aplikohen mbi produktet standarde. Kontakto për çmim dhe moq.'
            : 'All finishes apply on top of standard products. Contact us for pricing and MOQ.'}
        </motion.p>

      </div>

      {/* Bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />
    </section>
  )
}
