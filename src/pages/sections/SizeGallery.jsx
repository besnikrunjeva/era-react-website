import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export function SizeGallery({ sizes, lang = 'al' }) {
  const [active, setActive] = useState(0)
  const startX = useRef(null)

  const go = (i) => {
    if (i < 0 || i >= sizes.length) return
    setActive(i)
  }

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 44)  go(active + 1)
    if (diff < -44) go(active - 1)
    startX.current = null
  }

  return (
    <div className="select-none">

      {/* ── Main image ─────────────────────────────────── */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f5f5f3]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={sizes[active].img}
            alt={sizes[active].imgAlt[lang]}
            initial={{ opacity: 0, scale: 0.975 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </AnimatePresence>

        {/* Active size badge — top-left */}
        <motion.div
          key={`badge-${active}`}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black tracking-wide text-gray-800 shadow backdrop-blur-sm"
        >
          {sizes[active].label[lang]}
        </motion.div>

        {/* Swipe dots — mobile only */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 md:hidden">
          {sizes.map((_, i) => (
            <motion.span
              key={i}
              animate={{ width: i === active ? 20 : 6, opacity: i === active ? 1 : 0.45 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="h-1.5 rounded-full bg-white"
              style={{ display: 'block' }}
            />
          ))}
        </div>
      </div>

      {/* ── Thumbnail strip ────────────────────────────── */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {sizes.map((size, i) => {
          const isActive = i === active
          return (
            <button
              key={i}
              onClick={() => go(i)}
              className="group cursor-pointer text-left"
            >
              {/* Thumb image */}
              <div
                className={[
                  'relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-250',
                  isActive
                    ? 'border-[#4ca706] shadow-md shadow-[#4ca706]/15'
                    : 'border-transparent hover:border-[#4ca706]/30',
                ].join(' ')}
              >
                <img
                  src={size.img}
                  alt={size.imgAlt[lang]}
                  className={[
                    'h-full w-full object-cover transition-opacity duration-250',
                    isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-75',
                  ].join(' ')}
                />
                {/* Active green dot */}
                {isActive && (
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#4ca706] ring-2 ring-white" />
                )}
              </div>

              {/* Label */}
              <p
                className={[
                  'mt-1.5 text-center text-[11px] font-bold transition-colors duration-200',
                  isActive ? 'text-[#4ca706]' : 'text-gray-400 group-hover:text-gray-600',
                ].join(' ')}
              >
                {size.label[lang]}
              </p>
            </button>
          )
        })}
      </div>

    </div>
  )
}
