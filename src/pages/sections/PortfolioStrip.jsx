import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import bitLogo  from '@/assets/portfolio/bit-logo.svg'
import bitHero  from '@/assets/portfolio/bit-hero.webp'
import gotaImg  from '@/assets/products/gota.webp'
import kutiImg  from '@/assets/products/kuti-burger.webp'

const data = {
  al: [
    {
      id:           'bit',
      client:       'Bit Restaurant',
      logo:         bitLogo,
      hero:         bitHero,
      tagline:      'Projekt i plotë ambalazhimi — 11 lloje produktesh',
      count:        11,
      countLabel:   'lloje ambalazhesh',
      tags:         ['Kuti Crepa', 'Sushi Box', 'Enë Ushqimore', 'Kupa Akullore'],
      href:         '/portfolio/bit',
      accent:       '#4b877a',
    },
    {
      id:           'gota',
      client:       'Kafeteri & Bare',
      logo:         null,
      hero:         gotaImg,
      tagline:      'Gota letre me printim të plotë custom',
      count:        '3',
      countLabel:   'madhësi: 3.5 · 7 · 12oz',
      tags:         ['3.5oz', '7oz', '12oz', 'Logo Custom'],
      href:         '/products/gota',
      accent:       '#4ca706',
    },
    {
      id:           'kuti',
      client:       'Fast Food & Restorante',
      logo:         null,
      hero:         kutiImg,
      tagline:      'Kuti ushqimore me printim offset',
      count:        '6+',
      countLabel:   'formate të ndryshme',
      tags:         ['Burger Box', 'Kuti Fritas', 'Kuti Sallatë', 'Kuti Tort'],
      href:         '/products/kuti-ushqimore',
      accent:       '#4ca706',
    },
  ],
  en: [
    {
      id:           'bit',
      client:       'Bit Restaurant',
      logo:         bitLogo,
      hero:         bitHero,
      tagline:      'Full packaging project — 11 product types',
      count:        11,
      countLabel:   'packaging types',
      tags:         ['Crepe Box', 'Sushi Box', 'Food Container', 'Ice Cream Cup'],
      href:         '/portfolio/bit',
      accent:       '#4b877a',
    },
    {
      id:           'gota',
      client:       'Cafés & Bars',
      logo:         null,
      hero:         gotaImg,
      tagline:      'Custom-printed paper cups, full colour',
      count:        '3',
      countLabel:   'sizes: 3.5 · 7 · 12oz',
      tags:         ['3.5oz', '7oz', '12oz', 'Custom Logo'],
      href:         '/products/gota',
      accent:       '#4ca706',
    },
    {
      id:           'kuti',
      client:       'Fast Food & Restaurants',
      logo:         null,
      hero:         kutiImg,
      tagline:      'Food boxes with offset printing',
      count:        '6+',
      countLabel:   'different formats',
      tags:         ['Burger Box', 'Fries Box', 'Salad Box', 'Cake Box'],
      href:         '/products/kuti-ushqimore',
      accent:       '#4ca706',
    },
  ],
}

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ProjectCard({ p, lang }) {
  const isReal = p.id === 'bit'

  return (
    <motion.div variants={cardAnim} className="group relative">
      <Link to={p.href} className="block h-full">
        <div
          className="relative h-full overflow-hidden rounded-2xl border bg-[#111] transition-all duration-500"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = `${p.accent}44`}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
        >

          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={p.hero}
              alt={p.client}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Client logo chip — only for real client projects */}
            {p.logo && (
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md">
                <img src={p.logo} alt={p.client} className="h-4 w-auto brightness-0 invert opacity-90" />
              </div>
            )}

            {/* Real project badge */}
            {isReal && (
              <div
                className="absolute right-4 top-4 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest"
                style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}44` }}
              >
                {lang === 'al' ? 'Projekt real' : 'Real project'}
              </div>
            )}

            {/* Count — bottom right of image */}
            <div className="absolute bottom-4 right-4 text-right">
              <span
                className="block text-4xl font-extrabold leading-none tabular-nums"
                style={{ color: p.accent }}
              >
                {p.count}
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40">
                {p.countLabel}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3 p-5">

            {/* Client name / sector */}
            <p
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: p.accent }}
            >
              {p.client}
            </p>

            {/* Tagline */}
            <h3 className="text-[15px] font-bold leading-snug text-white">
              {p.tagline}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.05] px-2.5 py-[3px] text-[10px] font-medium text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <div
              className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-200 group-hover:gap-2"
              style={{ color: p.accent }}
            >
              {lang === 'al' ? 'Shiko projektin' : 'View project'}
              <ArrowUpRight className="size-3" />
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function PortfolioStrip({ lang = 'al' }) {
  const projects = data[lang]

  return (
    <section className="relative overflow-hidden bg-[#0f1010] py-24 px-4">

      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Green glow — offset to bottom-left */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#4ca706]">
              {lang === 'al' ? 'Punët tona' : 'Our work'}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {lang === 'al'
                ? <>Projekte të <span className="text-[#4ca706]">klientëve</span></>
                : <>Client <span className="text-[#4ca706]">projects</span></>}
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/35 leading-relaxed">
              {lang === 'al'
                ? 'Ambalazhe të personalizuara të prodhuara për biznese reale — me logo, ngjyra dhe dimensione sipas kërkesës.'
                : 'Custom packaging produced for real businesses — with logo, colours and dimensions to order.'}
            </p>
          </div>

          {/* Separator line + stat */}
          <div className="hidden sm:flex flex-col items-end gap-1">
            <span className="text-3xl font-extrabold text-white tabular-nums">397<span className="text-[#4ca706]">+</span></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
              {lang === 'al' ? 'klientë të shërbyer' : 'clients served'}
            </span>
          </div>
        </motion.div>

        {/* Thin divider */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map(p => (
            <ProjectCard key={p.id} p={p} lang={lang} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
