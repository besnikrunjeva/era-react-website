import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollExpandMedia = ({
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile]             = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect        = el.getBoundingClientRect()
      const scrolled    = -rect.top
      const animRange   = el.offsetHeight - window.innerHeight
      const progress    = Math.max(0, Math.min(1, scrolled / animRange))
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const mediaW      = 280  + scrollProgress * (isMobile ? 500  : 1150)
  const mediaH      = 160  + scrollProgress * (isMobile ? 260  : 620)
  const textShift   = scrollProgress * (isMobile ? 30 : 20)
  const firstWord   = title ? title.split(' ')[0] : ''
  const rest        = title ? title.split(' ').slice(1).join(' ') : ''
  const showContent = scrollProgress >= 0.85

  return (
    <div ref={containerRef} style={{ height: '280vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden' }}>

        {/* Background — fades as video expands */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ opacity: 1 - scrollProgress * 1.2 }}
          transition={{ duration: 0.05 }}
        >
          {bgImageSrc
            ? <img src={bgImageSrc} alt="" aria-hidden className="h-full w-full object-cover" />
            : <div className="h-full w-full bg-[#0f1010]" />
          }
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[120px]"
              style={{ background: '#4ca706' }}
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Expanding video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="overflow-hidden"
            style={{
              width:        `${mediaW}px`,
              height:       `${mediaH}px`,
              maxWidth:     '98vw',
              maxHeight:    '95dvh',
              borderRadius: `${(1 - scrollProgress) * 18}px`,
              boxShadow:    '0 8px 80px rgba(0,0,0,0.6)',
              transition:   'width 0.05s linear, height 0.05s linear',
            }}
          >
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay muted loop playsInline preload="auto"
              className="h-full w-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black"
              animate={{ opacity: 0.55 - scrollProgress * 0.5 }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </div>

        {/* Title — splits left/right as progress increases */}
        <div className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 ${textBlend ? 'mix-blend-difference' : ''}`}>
          {firstWord && (
            <h2
              className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ transform: `translateX(-${textShift}vw)`, transition: 'transform 0.05s linear' }}
            >
              {firstWord}
            </h2>
          )}
          {rest && (
            <h2
              className="text-5xl font-extrabold tracking-tight text-[#4ca706] drop-shadow-lg md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ transform: `translateX(${textShift}vw)`, transition: 'transform 0.05s linear' }}
            >
              {rest}
            </h2>
          )}
        </div>

        {/* Date + scroll hint */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-center">
          {date && (
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50"
              style={{ opacity: 1 - scrollProgress * 3 }}
            >
              {date}
            </p>
          )}
          {scrollToExpand && (
            <p
              className="text-xs font-bold uppercase tracking-[0.22em] text-[#4ca706]"
              style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
            >
              {scrollToExpand}
            </p>
          )}
        </div>

        {/* Optional children shown after full expansion */}
        {children && showContent && (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 px-8 py-10 md:px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ScrollExpandMedia
