import { motion } from 'framer-motion'
import { Printer, PenLine, Truck } from 'lucide-react'

const pillars = {
  al: [
    {
      icon: Printer,
      title: 'Prodhim Profesional',
      desc: 'Printim offset i plotë në letër ushqimore. 276 variante produktesh, 13 makina të specializuara.',
    },
    {
      icon: PenLine,
      title: 'Personalizim i Plotë',
      desc: "Çdo paketim sipas dizajnit, ngjyrës dhe madhësisë suaj. Nga logo deri te forma — çdo detaj sipas kërkesës.",
    },
    {
      icon: Truck,
      title: 'Dorëzim në Rajon',
      desc: 'Shërbejmë Kosovën dhe Ballkanin. Dorëzim direkt nga fabrika tek klienti, 7–14 ditë.',
    },
  ],
  en: [
    {
      icon: Printer,
      title: 'Professional Manufacturing',
      desc: 'Full offset printing on food-grade paper. 276 product variants, 13 specialized machines.',
    },
    {
      icon: PenLine,
      title: 'Full Customization',
      desc: 'Every package made to your design, color, and size. From logo to shape — every detail on request.',
    },
    {
      icon: Truck,
      title: 'Regional Delivery',
      desc: 'We serve Kosovo and the Balkans. Direct factory-to-client delivery in 7–14 days.',
    },
  ],
}

export function PillarsSection({ lang = 'al' }) {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {lang === 'al' ? 'Çfarë Prodhojmë dhe Si Punojmë' : 'What We Make and How We Work'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {lang === 'al' ? 'Tre gjëra që i bëjmë mirë' : 'Three things we do well'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars[lang].map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#4ca706]/10 text-[#4ca706]">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-base font-bold text-gray-900">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{pillar.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
