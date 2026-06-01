import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL
const videos = [
  { src: `${BASE}videos/machine-01.mp4`, label: { al: 'Këndi 01', en: 'Angle 01' } },
  { src: `${BASE}videos/machine-02.mp4`, label: { al: 'Këndi 02', en: 'Angle 02' } },
]

export function MachineVideos({ lang = 'al' }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1010] py-20 px-4">

      {/* Subtle glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[100px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {lang === 'al' ? 'Prodhimi ynë' : 'Our production'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {lang === 'al' ? 'Makina jonë në veprim' : 'Our machines in action'}
          </h2>
        </motion.div>

        {/* Video diptych */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 max-w-xl mx-auto">
          {videos.map(({ src, label }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-2xl bg-[#1a1b1b]"
            >
              <div className="aspect-[9/16] w-full">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  {label[lang]}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ca706]/60">
                  ERA ·{' '}
                  {lang === 'al' ? 'Prishtinë' : 'Pristina'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-xs text-white/20 uppercase tracking-widest"
        >
          {lang === 'al'
            ? '13 makina prodhimi · Prishtinë, Kosovë'
            : '13 production machines · Pristina, Kosovo'}
        </motion.p>

      </div>
    </section>
  )
}
