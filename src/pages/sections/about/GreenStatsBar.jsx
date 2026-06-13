import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

function parseValue(str) {
  const match = str.match(/^([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: str }
  return { num: parseFloat(match[1]), suffix: match[2] }
}

function CountUp({ value }) {
  const { num, suffix } = parseValue(value)
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) =>
    Number.isInteger(num) ? Math.round(latest) + suffix : latest.toFixed(1) + suffix
  )
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, num, { duration: 2, ease: [0.16, 1, 0.3, 1] })
    return controls.stop
  }, [isInView, count, num])

  return <motion.span ref={ref}>{display}</motion.span>
}

const stats = [
  { value: '15+',   label: { al: 'Vite Eksperiencë',    en: 'Years Experience' } },
  { value: '397+',  label: { al: 'Klientë Aktiv',       en: 'Active Clients' } },
  { value: '3.9M+', label: { al: 'Paketime në 2025',    en: 'Units in 2025' } },
  { value: '13',    label: { al: 'Makina Prodhimi',     en: 'Production Machines' } },
]

export function GreenStatsBar({ lang = 'al' }) {
  return (
    <div className="bg-[#0f1010]">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`flex flex-col items-center justify-center px-6 py-10 text-center
              ${i < stats.length - 1 ? 'border-r border-white/10' : ''}
              ${i < 2 ? 'border-b border-white/10 md:border-b-0' : ''}
            `}
          >
            <span className="text-3xl font-bold text-[#4ca706] md:text-4xl">
              <CountUp value={stat.value} />
            </span>
            <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              {stat.label[lang]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
