import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { InfiniteGrid } from '@/components/ui/infinite-grid'
import { StatsPanel } from '@/components/ui/stat-card'

const STATS = [
  { value: '13',    label: { al: 'Makina Prodhimi',  en: 'Production Machines' } },
  { value: '4',     label: { al: 'Kategori',          en: 'Categories' } },
  { value: '3.9M+', label: { al: 'Njësi / Vit',      en: 'Units / Year' } },
  { value: '15+',   label: { al: 'Vite Eksperiencë', en: 'Years Experience' } },
]

export function MachinesHero({ lang = 'al' }) {
  return (
    <InfiniteGrid className="min-h-[58vh]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center gap-5 px-4 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#4ca706]/40 bg-[#4ca706]/10 px-4 py-1.5 text-xs font-medium text-[#4ca706] tracking-wide">
          <Cpu className="size-3.5" />
          {lang === 'al' ? 'Infrastruktura jonë' : 'Our infrastructure'}
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {lang === 'al' ? (
            <>13 makina prodhimi{' '}<span className="text-[#4ca706]">të nivelit industrial</span></>
          ) : (
            <>13 production machines{' '}<span className="text-[#4ca706]">at industrial scale</span></>
          )}
        </h1>

        <p className="max-w-xl text-base text-gray-500 md:text-lg">
          {lang === 'al'
            ? 'Nga shtypja offset Heidelberg deri tek formueset e gotave letre — kapacitet i plotë prodhimi në Prishtinë.'
            : 'From Heidelberg offset printing to paper cup forming — full production capacity in Pristina.'}
        </p>

        <StatsPanel stats={STATS.map(s => ({ value: s.value, label: s.label[lang] }))} className="mt-2" />
      </motion.div>
    </InfiniteGrid>
  )
}
