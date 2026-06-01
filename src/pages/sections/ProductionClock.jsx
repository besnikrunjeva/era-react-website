import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const UNITS_PER_YEAR = 3_900_000
const MS_PER_YEAR    = 365.25 * 24 * 60 * 60 * 1000
const RATE_PER_MS    = UNITS_PER_YEAR / MS_PER_YEAR

function getTotal() {
  const start = new Date(new Date().getFullYear(), 0, 1).getTime()
  return (Date.now() - start) * RATE_PER_MS
}


export function ProductionClock({ lang = 'al' }) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  // Motion value fed by interval → spring smooths it → transform formats it
  const raw     = useMotionValue(getTotal())
  const spring  = useSpring(raw, { stiffness: 80, damping: 20, restDelta: 0.01 })
  const display = useTransform(spring, v => Math.floor(v).toLocaleString('de-DE'))

  // Progress bar (fractional part of current unit, 0 → 1)
  const [progress, setProgress] = useState(() => getTotal() % 1)

  useEffect(() => {
    if (!isInView) return
    const id = setInterval(() => {
      const total = getTotal()
      raw.set(total)
      setProgress(total % 1)
    }, 80)
    return () => clearInterval(id)
  }, [isInView, raw])

  const year = new Date().getFullYear()

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f1010] py-24 px-4">

      {/* Radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.11] blur-[110px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >

        {/* LIVE pill */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-4 py-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ca706] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#4ca706]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ca706]">
            {lang === 'al' ? 'Prodhim aktiv' : 'Live production'}
          </span>
        </div>

        {/* Eyebrow */}
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/25">
          {lang === 'al'
            ? `Njësi të prodhuara · Janar–Dhjetor ${year}`
            : `Units produced · January–December ${year}`}
        </p>

        {/* Counter — spring-animated via MotionValue */}
        <motion.span
          className="block font-extrabold leading-none tracking-tighter text-[#4ca706]"
          style={{
            fontSize:           'clamp(3.8rem, 11vw, 7.5rem)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {display}
        </motion.span>

        {/* Progress bar */}
        <div className="mx-auto mt-7 h-[2px] w-56 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full bg-[#4ca706]"
            style={{
              width:      `${progress * 100}%`,
              transition: 'width 80ms linear',
            }}
          />
        </div>
        <p className="mt-4 text-sm text-white/40">
          {lang === 'al'
            ? '3.9 milionë çdo vit · ~1 njësi çdo 8 sekonda'
            : '3.9 million per year · ~1 unit every 8 seconds'}
        </p>
        <p className="mt-1 text-xs text-white/20">
          Shtypshkronja ERA · Prishtinë, Kosovë
        </p>

      </motion.div>
    </section>
  )
}
