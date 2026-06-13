import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gem, MessageCircle } from 'lucide-react'

// ── Placeholder visuals — each one embodies its finish type ───────────────

function BoxShape({ borderColor = 'rgba(255,255,255,0.09)', lineColor = 'rgba(255,255,255,0.06)', accentChildren }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[88px] h-[116px] rounded-[2px]" style={{ border: `1px solid ${borderColor}` }}>
        {/* Top fold crease */}
        <div className="absolute inset-x-0 top-[28px] h-px" style={{ background: lineColor }} />
        {/* Brand area rect */}
        <div className="absolute inset-x-[10px] top-[8px] h-[14px] rounded-[1px]" style={{ border: `1px solid ${lineColor}` }} />
        {/* Bottom fold crease */}
        <div className="absolute inset-x-0 bottom-[22px] h-px" style={{ background: lineColor }} />
        {/* Corner fold mark */}
        <div className="absolute bottom-[3px] right-[3px] w-[10px] h-[10px] border-r border-b" style={{ borderColor: lineColor }} />
        {accentChildren}
      </div>
    </div>
  )
}

function MattePlaceholder() {
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(145deg, #141414 0%, #1f1f1f 40%, #191919 65%, #131313 100%)' }}
    >
      {/* Subtle grain overlay via SVG noise */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
          backgroundSize: '180px',
        }}
      />
      <BoxShape />
      <span className="absolute bottom-4 inset-x-0 text-center text-[8px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.18)' }}>
        Foto së shpejti
      </span>
    </div>
  )
}

function GoldFoilPlaceholder() {
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(145deg, #0c0700 0%, #1c0e00 18%, #5c3800 42%, #b8860a 50%, #5c3800 58%, #1c0e00 82%, #0c0700 100%)' }}
    >
      {/* Animated gold shimmer sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ backgroundPosition: ['220% center', '-220% center'] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
        style={{
          background: 'linear-gradient(105deg, transparent 32%, rgba(255,205,80,0.28) 50%, transparent 68%)',
          backgroundSize: '320% 100%',
        }}
      />
      <BoxShape
        borderColor="rgba(184,134,10,0.3)"
        lineColor="rgba(184,134,10,0.18)"
        accentChildren={
          /* Foil accent band on box */
          <div
            className="absolute inset-x-[10px] rounded-[1px]"
            style={{
              top: '40px', height: '22px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(200,155,15,0.35) 40%, rgba(255,215,80,0.5) 55%, rgba(200,155,15,0.35) 70%, transparent 100%)',
            }}
          />
        }
      />
      <span className="absolute bottom-4 inset-x-0 text-center text-[8px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(217,119,6,0.4)' }}>
        Foto së shpejti
      </span>
    </div>
  )
}

function SpotUVPlaceholder() {
  return (
    <div className="absolute inset-0" style={{ background: '#161616' }}>
      {/* UV glossy half — diagonal split */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.035) 50%)' }}
      />
      {/* Specular edge highlight at the UV boundary */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 46%, rgba(255,255,255,0.12) 49%, rgba(255,255,255,0.0) 52%)',
        }}
      />
      <BoxShape
        accentChildren={
          /* UV gloss patch on box — diagonal split within box */
          <div
            className="absolute inset-[10px] rounded-[1px]"
            style={{
              background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.06) 50%)',
            }}
          />
        }
      />
      <span className="absolute bottom-4 inset-x-0 text-center text-[8px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.18)' }}>
        Foto së shpejti
      </span>
    </div>
  )
}

function CompartmentPlaceholder() {
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(145deg, #111 0%, #181818 50%, #111 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Wide box showing 3 compartments side by side */}
        <div className="relative w-[108px] h-[116px] rounded-[2px]" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Vertical divider 1 */}
          <div className="absolute inset-y-0 left-[33.3%] w-px" style={{ background: 'rgba(255,255,255,0.09)' }} />
          {/* Vertical divider 2 */}
          <div className="absolute inset-y-0 left-[66.6%] w-px" style={{ background: 'rgba(255,255,255,0.09)' }} />
          {/* Top fold */}
          <div className="absolute inset-x-0 top-[26px] h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Bottom fold */}
          <div className="absolute inset-x-0 bottom-[20px] h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Small inner markers per compartment */}
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="absolute h-[6px] rounded-[1px]"
              style={{
                left: `calc(${i * 33.3}% + 6px)`,
                width: 'calc(33.3% - 12px)',
                top: '36px',
                background: 'rgba(255,255,255,0.05)',
              }}
            />
          ))}
        </div>
      </div>
      <span className="absolute bottom-4 inset-x-0 text-center text-[8px] uppercase tracking-[0.22em] font-medium" style={{ color: 'rgba(255,255,255,0.18)' }}>
        Foto së shpejti
      </span>
    </div>
  )
}

// ── Finish data ───────────────────────────────────────────────────────────

const FINISHES = [
  {
    id: 'matte',
    Placeholder: MattePlaceholder,
    tag:   { al: 'Veshje',    en: 'Coating'   },
    label: { al: 'Veshje Matte',         en: 'Matte Coating'      },
    desc:  { al: 'Sipërfaqe e butë pa shkëlqim — elegante dhe rezistente ndaj gjurmëve.', en: 'Smooth non-reflective surface — elegant and fingerprint-resistant.' },
  },
  {
    id: 'foil',
    Placeholder: GoldFoilPlaceholder,
    tag:   { al: 'Metalik',   en: 'Metallic'  },
    label: { al: 'Folë Ari / Argjend',   en: 'Gold / Silver Foil' },
    desc:  { al: 'Hot-stamping me metalik ari ose argjend — logo dhe detaje luksoze.', en: 'Hot-stamped metallic gold or silver — logos and luxury details.' },
    gold: true,
  },
  {
    id: 'spotuv',
    Placeholder: SpotUVPlaceholder,
    tag:   { al: 'Lustër',    en: 'Gloss'     },
    label: { al: 'Spot UV',               en: 'Spot UV'            },
    desc:  { al: 'Lustër selektive mbi bazë matte — kontrast vizual dhe ndijim shtresëzuar.', en: 'Selective gloss over matte — visual contrast and a layered tactile feel.' },
  },
  {
    id: 'compartment',
    Placeholder: CompartmentPlaceholder,
    tag:   { al: 'Strukturë', en: 'Structure' },
    label: { al: 'Kuti me Ndarje',        en: 'Compartment Box'    },
    desc:  { al: 'Tre ndarje karton që palosen njëra brenda tjetrës — pa ngjitës.', en: 'Three cardboard sections that fold into each other — no glue.' },
  },
]

// ── PremiumCard ───────────────────────────────────────────────────────────

function PremiumCard({ finish, lang, delay, inView }) {
  const { Placeholder } = finish
  const isGold = finish.gold

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0f0f0f] transition-colors duration-300 hover:border-white/[0.13]"
    >
      {/* Photo / placeholder area */}
      <div className="relative h-56 overflow-hidden sm:h-60">
        <Placeholder />
        {/* Subtle inner vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {/* Tag */}
        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isGold ? 'text-amber-500/70' : 'text-white/30'}`}>
          {lang === 'al' ? finish.tag.al : finish.tag.en}
        </span>

        {/* Name */}
        <h3 className="text-[15px] font-extrabold leading-snug text-white">
          {lang === 'al' ? finish.label.al : finish.label.en}
        </h3>

        {/* Desc */}
        <p className="flex-1 text-[11px] leading-relaxed text-white/38">
          {lang === 'al' ? finish.desc.al : finish.desc.en}
        </p>

        {/* Divider */}
        <div className="mt-1 h-px bg-white/[0.06]" />

        {/* CTA */}
        <a
          href="https://wa.me/38344113533"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-bold transition-colors duration-150 ${
            isGold ? 'text-amber-500/55 hover:text-amber-400' : 'text-white/30 hover:text-white/70'
          }`}
          aria-label={lang === 'al' ? `Kërko ofertë për ${finish.label.al}` : `Request quote for ${finish.label.en}`}
        >
          <MessageCircle className="size-3.5" aria-hidden />
          {lang === 'al' ? 'Kërko ofertë' : 'Request quote'}
        </a>
      </div>
    </motion.article>
  )
}

// ── PremiumStrip (export) ─────────────────────────────────────────────────

export function PremiumStrip({ lang = 'al' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a0b0a] px-4 py-20"
      aria-label={lang === 'al' ? 'Finisazhe Premium' : 'Premium Finishes'}
    >
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[120px]"
        style={{ background: 'rgba(160,90,0,0.06)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/7 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-400">
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

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/40">
            {lang === 'al'
              ? 'Veshje, metalik dhe struktura të sofistikuara — mbi çdo produkt standard.'
              : 'Coatings, metallics and sophisticated structures — available on any standard product.'}
          </p>
        </motion.div>

        {/* ── Cards ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {FINISHES.map((finish, i) => (
            <PremiumCard
              key={finish.id}
              finish={finish}
              lang={lang}
              delay={0.1 + i * 0.08}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Footer note ──────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 text-center text-[11px] text-white/22"
        >
          {lang === 'al'
            ? 'Të gjitha finisazhet aplikohen mbi produktet standarde. Kontakto për çmim dhe sasi minimale.'
            : 'All finishes apply on top of standard products. Contact us for pricing and minimum quantities.'}
        </motion.p>

      </div>

      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/12 to-transparent" />
    </section>
  )
}
