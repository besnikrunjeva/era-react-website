import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

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
    const controls = animate(count, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [isInView, count, num])

  return <motion.span ref={ref}>{display}</motion.span>
}

function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-5">
      <span className="text-3xl font-bold text-[#4ca706] md:text-4xl">
        <CountUp value={value} />
      </span>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center">
        {label}
      </span>
    </div>
  )
}

export function StatsPanel({ stats, className }) {
  return (
    <div
      className={cn(
        'mt-8 inline-grid grid-cols-2 md:grid-cols-4',
        'rounded-2xl overflow-hidden',
        'bg-white/60 backdrop-blur-md border border-white/80 shadow-xl shadow-black/10 drop-shadow-lg',
        className
      )}
    >
      {stats.map((stat, i) => (
        <div key={stat.value} className="flex">
          <StatItem value={stat.value} label={stat.label} />
          {i < stats.length - 1 && (
            <div className="self-stretch w-px bg-gray-200/60 my-4" />
          )}
        </div>
      ))}
    </div>
  )
}
