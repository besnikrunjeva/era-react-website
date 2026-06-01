import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function VideoScrollHero({
  videoSrc = '/videos/machine-01.mp4',
  startScale = 0.28,
  title,
  subtitle,
  className = '',
}) {
  const containerRef    = useRef(null)
  const shouldReduce    = useReducedMotion()
  const [scale, setScale] = useState(startScale)

  useEffect(() => {
    if (shouldReduce) return

    const onScroll = () => {
      if (!containerRef.current) return
      const rect     = containerRef.current.getBoundingClientRect()
      const maxScroll = containerRef.current.offsetHeight - window.innerHeight
      const progress  = Math.min(Math.max(-rect.top / maxScroll, 0), 1)
      setScale(startScale + progress * (1 - startScale))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [shouldReduce, startScale])

  const animated = !shouldReduce

  return (
    <div ref={containerRef} className={`relative h-[200vh] bg-[#0f1010] ${className}`}>

      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      {/* Sticky frame */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div
          className="relative will-change-transform"
          style={{
            transform: animated ? `scale(${scale})` : 'scale(1)',
            transformOrigin: 'center center',
          }}
        >
          {/* Full-screen video card */}
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{
              height: '100vh',
              width: '100vw',
              borderRadius: `${(1 - scale) * 20}px`,
            }}
          >
            <video
              autoPlay loop muted playsInline preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Overlay darkens at rest, clears as it expands */}
            <div
              className="absolute inset-0 rounded-2xl bg-black transition-none"
              style={{ opacity: 0.55 - (scale - startScale) * 0.45 }}
            />

            {/* Text */}
            {(title || subtitle) && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-5 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {title && (
                  <motion.h2
                    className="text-xl font-bold tracking-tight text-white md:text-2xl"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
                  >
                    {title}
                  </motion.h2>
                )}
                {subtitle && (
                  <motion.p
                    className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ca706]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </motion.div>
            )}
          </div>

          {/* Scroll hint — fades out as video grows */}
          <p
            className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25"
            style={{ opacity: Math.max(0, 1 - (scale - startScale) * 4) }}
          >
            scroll ↓
          </p>
        </div>
      </div>
    </div>
  )
}
