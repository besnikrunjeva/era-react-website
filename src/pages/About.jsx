import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { InfiniteGrid } from '@/components/ui/infinite-grid'
import { LogoCloud } from '@/components/ui/logo-cloud'
import { StorySection } from '@/pages/sections/about/StorySection'
import { GreenStatsBar } from '@/pages/sections/about/GreenStatsBar'
import { PillarsSection } from '@/pages/sections/about/PillarsSection'
import { SectorsSection } from '@/pages/sections/about/SectorsSection'
import { RegionalSection } from '@/pages/sections/about/RegionalSection'
import { TestimonialsSection } from '@/pages/sections/about/TestimonialsSection'
import { MachinesCallout } from '@/pages/sections/about/MachinesCallout'
import { DarkCta } from '@/pages/sections/about/DarkCta'

import client01 from '@/assets/client-01.svg'
import client02 from '@/assets/client-02.svg'
import client03 from '@/assets/client-03.svg'
import client04 from '@/assets/client-04.svg'
import client05 from '@/assets/client-05.svg'
import client06 from '@/assets/client-06.svg'

const clientLogos = [
  { src: client01, alt: 'Client 1' },
  { src: client02, alt: 'Client 2' },
  { src: client03, alt: 'Client 3' },
  { src: client04, alt: 'Client 4' },
  { src: client05, alt: 'Client 5' },
  { src: client06, alt: 'Client 6' },
]

export default function About({ lang = 'al' }) {
  return (
    <>
      {/* 1. Hero — InfiniteGrid background */}
      <InfiniteGrid className="min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          className="relative z-10 flex flex-col items-center justify-center gap-5 px-4 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ca706]/40 bg-[#4ca706]/10 px-4 py-1.5 text-xs font-medium text-[#4ca706] tracking-wide">
            <Building2 className="size-3.5" />
            {lang === 'al' ? 'Rreth Nesh' : 'About Us'}
          </div>

          {/* H1 */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {lang === 'al' ? (
              <>
                Prodhues i besueshëm i{' '}
                <span className="text-[#4ca706]">ambalazheve letre</span> në Kosovë
              </>
            ) : (
              <>
                Kosovo's trusted{' '}
                <span className="text-[#4ca706]">paper packaging</span> manufacturer
              </>
            )}
          </h1>

          {/* Subtext */}
          <p className="max-w-xl text-base text-gray-500 md:text-lg">
            {lang === 'al'
              ? 'Mbi 15 vite prodhim profesional — në Kosovë dhe rajon.'
              : 'Over 15 years of professional manufacturing — in Kosovo and the region.'}
          </p>
        </motion.div>
      </InfiniteGrid>

      {/* 2. Story */}
      <StorySection lang={lang} />

      {/* 3. Green stats bar */}
      <GreenStatsBar lang={lang} />

      {/* 4. Pillars */}
      <PillarsSection lang={lang} />

      {/* 5. Sectors */}
      <SectorsSection lang={lang} />

      {/* 6. Regional */}
      <RegionalSection lang={lang} />

      {/* 7. Client logos */}
      <section className="relative bg-white pt-4 pb-16 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4">
          <h2 className="mb-5 text-center text-xl font-medium tracking-tight md:text-3xl">
            <span className="text-gray-400">
              {lang === 'al' ? 'Besuar nga bizneset.' : 'Trusted by businesses.'}
            </span>
            {' '}
            <span className="font-semibold text-[#4ca706]">
              {lang === 'al' ? 'Zgjedhur nga liderët.' : 'Chosen by the leaders.'}
            </span>
          </h2>
          <div className="mx-auto mb-5 h-0.5 max-w-sm bg-[#4ca706]/30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          <LogoCloud logos={clientLogos} />
          <div className="mt-5 h-0.5 bg-[#4ca706]/30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>
      </section>

      {/* 8. Testimonials */}
      <TestimonialsSection lang={lang} />

      {/* 9. Machines callout */}
      <MachinesCallout lang={lang} />

      {/* 10. Dark CTA */}
      <DarkCta lang={lang} />
    </>
  )
}
