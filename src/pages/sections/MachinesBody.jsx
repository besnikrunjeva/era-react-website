import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Printer, Scissors, Package, Coffee } from 'lucide-react'

const BASE = import.meta.env.BASE_URL
const img = (name) => `${BASE}images/machines/${name}`

const CATEGORIES = [
  {
    id: 'printimi',
    icon: Printer,
    al: 'Printimi',
    en: 'Printing',
    desc: {
      al: 'Shtypje offset 4-ngjyrësh CMYK me saktësi industriale',
      en: '4-color CMYK offset printing at industrial precision',
    },
    machines: [
      {
        al: 'Shtypëse Offset 4-Ngjyrësh',
        en: '4-Color Offset Press',
        badge: { al: 'Offset Printing', en: 'Offset Printing' },
        specs: ['Heidelberg', 'Sheet-fed', '4-color CMYK', 'B1 Format'],
        img: img('offset.jpg'),
      },
    ],
  },
  {
    id: 'prerja',
    icon: Scissors,
    al: 'Prerja & Stampimi',
    en: 'Die Cutting',
    desc: {
      al: 'Prerje dhe stampim me saktësi të lartë industriale',
      en: 'High-precision die cutting and stamping',
    },
    machines: [
      {
        al: 'Makinë Prerëse & Stampuese — Kryesore',
        en: 'Die Cutter & Stamper — Primary',
        badge: { al: 'Die Cutting', en: 'Die Cutting' },
        specs: ['Lukes LKS-1060H', 'Flatbed Die-cutter'],
        img: img('shtanci.png'),
      },
      {
        al: 'Makinë Prerëse & Stampuese — Dytësore',
        en: 'Die Cutter & Stamper — Secondary',
        badge: { al: 'Die Cutting', en: 'Die Cutting' },
        specs: ['TMZ Zaragoza CX-92', 'Flatbed Die-cutter'],
      },
    ],
  },
  {
    id: 'kutite',
    icon: Package,
    al: 'Formimi i Kutive',
    en: 'Box Forming',
    desc: {
      al: 'Palosje dhe ngjitje e kutive të gatshme për tregun',
      en: 'Folding and gluing of finished boxes for market',
    },
    machines: [
      {
        al: 'Makinë Palosëse-Ngjitëse (4 & 6 Kënde)',
        en: 'Folder Gluer (4 & 6 Panel)',
        badge: { al: 'Box Forming', en: 'Box Forming' },
        specs: ['GS Series', 'Folder Gluer', '4 & 6 panel'],
        img: img('machine-palosese-46.png'),
      },
      {
        al: 'Makinë Palosëse-Ngjitëse Lineare',
        en: 'Straight-Line Folder Gluer',
        badge: { al: 'Box Forming', en: 'Box Forming' },
        specs: ['Straight-Line', 'Folder Gluer'],
        img: img('machine-palosese-lineare.jpg'),
      },
    ],
  },
  {
    id: 'ushqimore',
    icon: Coffee,
    al: 'Paketime Ushqimore',
    en: 'Food Packaging',
    desc: {
      al: 'Formim i gotave, kupave dhe paketimeve të tjera ushqimore',
      en: 'Forming of cups, bowls and other food packaging',
    },
    machines: [
      {
        al: '3 × Makinë Formimi Gotash Letre',
        en: '3 × Paper Cup Forming Machine',
        badge: { al: 'Cup Forming', en: 'Cup Forming' },
        specs: ['Cup Forming', '3.5oz · 7oz · 12oz'],
        img: img('machine-gota.png'),
      },
      {
        al: 'Makinë Formimi Kupave (Supa & Pasta)',
        en: 'Bowl Former (Soup & Pasta)',
        badge: { al: 'Bowl Forming', en: 'Bowl Forming' },
        specs: ['MB-C12', 'Bowl Forming'],
        img: img('machine-supe.png'),
      },
      {
        al: 'Makinë Formimi Kupave Akullore',
        en: 'Ice Cream Cup Former',
        badge: { al: 'Ice Cream Cups', en: 'Ice Cream Cups' },
        specs: ['MB-C35', 'Ice Cream Forming'],
        img: img('machine-akullore.png'),
      },
      {
        al: 'Makinë Paketimi Lugësh',
        en: 'Cutlery Pocket Machine',
        badge: { al: '⚙ Ndërtuar nga ERA', en: '⚙ Built by ERA' },
        specs: ['Cutlery Pocket', 'Custom-built', 'In-house design'],
        special: true,
      },
    ],
  },
]

function MachineImage({ src, alt, special }) {
  if (src) {
    return (
      <div className={`w-40 shrink-0 overflow-hidden border-r md:w-48 min-h-[110px] ${
        special ? 'border-amber-500/25' : 'border-white/10'
      }`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }
  return (
    <div className={`flex min-h-[110px] w-40 shrink-0 flex-col items-center justify-center gap-1 border-r md:w-48 ${
      special
        ? 'border-amber-500/25 bg-amber-500/[0.06]'
        : 'border-white/10 bg-white/[0.03]'
    }`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={special ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.2)'} strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span className="text-[8px] uppercase tracking-widest" style={{ color: special ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.15)' }}>
        Foto
      </span>
    </div>
  )
}

function MachineCard({ machine, lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-stretch overflow-hidden rounded-xl border transition-all duration-200 ${
        machine.special
          ? 'border-amber-500/25 bg-amber-500/[0.06] hover:border-amber-500/45'
          : 'border-white/10 bg-white/[0.04] hover:border-[#4ca706]/35 hover:bg-white/[0.06]'
      }`}
    >
      <MachineImage src={machine.img} alt={machine.en} special={machine.special} />

      <div className="flex flex-1 flex-col justify-center gap-1.5 p-3 md:p-4">
        <span className={`inline-block w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
          machine.special
            ? 'border-amber-500/40 bg-amber-500/15 text-amber-400'
            : 'border-[#4ca706]/30 bg-[#4ca706]/10 text-[#4ca706]'
        }`}>
          {machine.badge[lang]}
        </span>

        <p className="text-sm font-extrabold leading-snug text-white md:text-[0.9rem]">
          {machine[lang]}
        </p>

        <div className="flex flex-wrap gap-1">
          {machine.specs.map(s => (
            <span
              key={s}
              className={`rounded px-1.5 py-0.5 text-[10px] ${
                machine.special
                  ? 'bg-amber-500/15 text-amber-400/80'
                  : 'bg-white/10 text-white/40'
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function MachinesBody({ lang = 'al' }) {
  const sectionRefs = useRef([])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const observers = CATEGORIES.map((_, i) => {
      const el = sectionRefs.current[i]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <section className="bg-[#0f1010]">
      <div className="mx-auto flex max-w-5xl items-start px-4">

        {/* Sticky progress rail — hidden on mobile */}
        <div className="sticky top-14 hidden w-14 shrink-0 self-start py-10 md:flex md:flex-col md:items-center">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.id} className="flex flex-col items-center">
              <button
                onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group flex cursor-pointer flex-col items-center gap-1 py-1"
                aria-label={cat[lang]}
              >
                <div className={`size-3 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? 'bg-[#4ca706] shadow-[0_0_8px_rgba(76,167,6,0.45)]'
                    : 'bg-white/20 group-hover:bg-[#4ca706]/40'
                }`} />
                <span className={`text-[9px] font-bold transition-colors ${
                  i === activeIdx ? 'text-[#4ca706]' : 'text-white/20 group-hover:text-white/40'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>

              {i < CATEGORIES.length - 1 && (
                <div className={`my-1 w-px transition-all duration-500 ${
                  i < activeIdx ? 'bg-[#4ca706]/35' : 'bg-white/10'
                }`} style={{ height: '48px' }} />
              )}
            </div>
          ))}
        </div>

        {/* Category sections */}
        <div className="min-w-0 flex-1 divide-y divide-white/10">
          {CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                ref={el => { sectionRefs.current[catIdx] = el }}
                className="py-10 md:py-14"
              >
                {/* Category heading */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-7"
                >
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-[#4ca706]">
                      {String(catIdx + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#4ca706]/30 to-transparent" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#4ca706]/10 border border-[#4ca706]/25">
                      <Icon className="size-5 text-[#4ca706]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white">{cat[lang]}</h2>
                      <p className="text-sm text-white/40">{cat.desc[lang]}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Machine cards */}
                <div className="flex flex-col gap-3">
                  {cat.machines.map((machine, mi) => (
                    <MachineCard key={mi} machine={machine} lang={lang} index={mi} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
