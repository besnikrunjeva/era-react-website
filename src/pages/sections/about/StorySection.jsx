import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

export function StorySection({ lang = 'al' }) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
              {lang === 'al' ? 'Historia e Shtypshkronja ERA' : 'History of Shtypshkronja ERA'}
            </span>
            <p className="mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-900 md:text-3xl">
              {lang === 'al'
                ? 'Filloi si familje. Mbeti si standard.'
                : 'Started as a family. Stayed as a standard.'}
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-500">
              <p>
                {lang === 'al'
                  ? "ERA u themelua në vitin 2008 në Kosovë, me vizion të qartë: t'u ofrojë bizneseve vendase ambalazhe letre profesionale — të prodhuara këtu, në Kosovë."
                  : 'ERA was founded around 2008 in Kosovo with a clear vision: to offer local businesses professional paper packaging — made here, in Kosovo.'}
              </p>
              <p>
                {lang === 'al' ? (
                  <>
                    Nga një operacion i vogël, kemi rritur kapacitetin tonë gradualisht. Sot, me 13 makina
                    prodhimi, 276 variante produktesh dhe mbi 397 partnerë aktiv, jemi ndër prodhuesit
                    kryesorë të ambalazheve letre në rajon.{' '}
                    <Link to="/products" className="font-semibold text-[#4ca706] hover:underline">
                      Shiko produktet tona →
                    </Link>
                  </>
                ) : (
                  <>
                    From a small operation we have steadily grown our capacity. Today, with 13 machines,
                    276 product variants and 397+ active clients, we are among the region's leading paper
                    packaging manufacturers.{' '}
                    <Link to="/products" className="font-semibold text-[#4ca706] hover:underline">
                      See our products →
                    </Link>
                  </>
                )}
              </p>
              <blockquote className="border-l-2 border-[#4ca706] pl-4 text-gray-700 font-medium italic">
                {lang === 'al'
                  ? '"Çdo paketim që del nga fabrika jonë bart emrin e klientit dhe standardin tonë."'
                  : '"Every package that leaves our factory carries the client\'s name and our standard."'}
              </blockquote>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-gray-200">
                <svg className="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-400">
                {lang === 'al' ? 'Foto fabrike / ekipit' : 'Factory / team photo'}
              </p>
              <p className="mt-0.5 text-[11px] text-gray-300">about-factory.webp</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
