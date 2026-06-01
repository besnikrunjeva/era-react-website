import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Printer, Scissors, Package, Coffee } from 'lucide-react'

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
      },
      {
        al: 'Makinë Palosëse-Ngjitëse Lineare',
        en: 'Straight-Line Folder Gluer',
        badge: { al: 'Box Forming', en: 'Box Forming' },
        specs: ['Straight-Line', 'Folder Gluer'],
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
      },
      {
        al: 'Makinë Formimi Kupash & Akullore',
        en: 'Bowl & Ice Cream Cup Former',
        badge: { al: 'Bowl Forming', en: 'Bowl Forming' },
        specs: ['MB-C12', 'MB-C35', 'Bowl Forming'],
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

function ImagePlaceholder({ special }) {
  return (
    <div className={`flex min-h-[72px] w-20 shrink-0 flex-col items-center justify-center gap-1 border-r md:w-24 ${
      special
        ? 'border-amber-200 bg-amber-50'
        : 'border-gray-100 bg-gray-100/80'
    }`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={special ? '#b45309' : '#999'} strokeWidth="1.2" opacity="0.4">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span className="text-[8px] uppercase tracking-widest" style={{ color: special ? '#b45309' : '#bbb', opacity: 0.7 }}>
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
          ? 'border-amber-200 bg-amber-50/30 hover:border-amber-300 hover:shadow-sm'
          : 'border-gray-100 bg-gray-50/40 hover:border-[#4ca706]/25 hover:shadow-sm'
      }`}
    >
      <ImagePlaceholder special={machine.special} />

      <div className="flex flex-1 flex-col justify-center gap-1.5 p-3 md:p-4">
        <span className={`inline-block w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
          machine.special
            ? 'border-amber-300 bg-amber-100 text-amber-700'
            : 'border-[#c8ddb8] bg-[#edf7e3] text-[#4ca706]'
        }`}>
          {machine.badge[lang]}
        </span>

        <p className="text-sm font-extrabold leading-snug text-gray-900 md:text-[0.9rem]">
          {machine[lang]}
        </p>

        <div className="flex flex-wrap gap-1">
          {machine.specs.map(s => (
            <span
              key={s}
              className={`rounded px-1.5 py-0.5 text-[10px] ${
                machine.special
                  ? 'bg-amber-100/70 text-amber-700'
                  : 'bg-gray-100 text-gray-500'
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
    <section className="bg-white">
      <div className="mx-auto flex max-w-5xl items-start px-4">

        {/* Sticky progress rail — hidden on mobile */}
        <div className="sticky top-14 hidden w-14 shrink-0 self-start py-10 md:flex md:flex-col md:items-center">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.id} className="flex flex-col items-center">
              <button
                onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group flex flex-col items-center gap-1 py-1"
                aria-label={cat[lang]}
              >
                <div className={`size-3 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? 'bg-[#4ca706] shadow-[0_0_8px_rgba(76,167,6,0.45)]'
                    : 'bg-gray-200 group-hover:bg-[#4ca706]/40'
                }`} />
                <span className={`text-[9px] font-bold transition-colors ${
                  i === activeIdx ? 'text-[#4ca706]' : 'text-gray-300 group-hover:text-gray-400'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>

              {i < CATEGORIES.length - 1 && (
                <div className={`my-1 w-px transition-all duration-500 ${
                  i < activeIdx ? 'bg-[#4ca706]/35' : 'bg-gray-100'
                }`} style={{ height: '48px' }} />
              )}
            </div>
          ))}
        </div>

        {/* Category sections */}
        <div className="min-w-0 flex-1 divide-y divide-gray-100">
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
                    <div className="h-px flex-1 bg-gradient-to-r from-[#c8ddb8] to-transparent" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#edf7e3] border border-[#c8ddb8]">
                      <Icon className="size-5 text-[#4ca706]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900">{cat[lang]}</h2>
                      <p className="text-sm text-gray-400">{cat.desc[lang]}</p>
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
