import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UtensilsCrossed, Coffee, Star, Pill, Gift } from 'lucide-react'

const sectors = {
  al: [
    { icon: UtensilsCrossed, title: 'Fast Food & Restorante', desc: 'Kuti, gota, kupa dhe paketime takeaway.' },
    { icon: Coffee,          title: 'Kafene & Hotele',        desc: 'Gota letre, mbajtëse dhe letër tavoline me printim.' },
    { icon: Star,            title: 'Pastiçeri & Ëmbëltore',  desc: 'Kuti standarde dhe premium për ëmbëlsira dhe pastiçeri artizanale.' },
    { icon: Pill,            title: 'Farmaci & Industrial',   desc: 'Paketime të specializuara për industrinë farmaceutike.' },
    { icon: Gift,            title: 'Retail & Dhurata',       desc: 'Kuti premium dhe paketime dhuratash për retail dhe promovime.' },
  ],
  en: [
    { icon: UtensilsCrossed, title: 'Fast Food & Restaurants', desc: 'Boxes, cups, bowls and takeaway packaging.' },
    { icon: Coffee,          title: 'Cafes & Hotels',          desc: 'Paper cups, holders and table paper with custom print.' },
    { icon: Star,            title: 'Bakeries & Confectionery',desc: 'Standard and premium boxes for sweets and artisan pastries.' },
    { icon: Pill,            title: 'Pharma & Industrial',     desc: 'Specialized packaging for the pharmaceutical industry.' },
    { icon: Gift,            title: 'Retail & Gifts',          desc: 'Premium boxes and gift packaging for retail and promotions.' },
  ],
}

export function SectorsSection({ lang = 'al' }) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {lang === 'al' ? 'Klientët Tanë' : 'Our Clients'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {lang === 'al' ? 'Industritë që Shërbejmë' : 'Industries We Serve'}
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
            {lang === 'al'
              ? 'Nga fast food dhe kafene, deri te farmaci dhe paketime dhuratash.'
              : 'From fast food and cafes to pharma and gift packaging.'}
          </p>
        </motion.div>

        {/* 3 top + 2 bottom centered */}
        <div className="flex flex-wrap justify-center gap-5">
          {sectors[lang].map((sector, i) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-2xl border border-gray-200 bg-white p-7 text-center sm:w-[calc(33.33%-14px)]"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#4ca706]/10 text-[#4ca706]">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">{sector.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{sector.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-md border border-[#4ca706] px-6 py-2.5 text-sm font-medium text-[#4ca706] hover:bg-[#4ca706] hover:text-white transition-colors"
          >
            {lang === 'al' ? 'Shiko produktet për industrinë tënde' : 'See products for your industry'}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
