import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

import imgSanduic   from '@/assets/products/kuti-sanduic-studio.jpg'
import imgPomfrit   from '@/assets/products/fries-box-studio.png'
import imgCupHolder from '@/assets/products/cup-holder-studio.png'
import imgBurger    from '@/assets/products/kuti-burger.webp'

const EASE = [0.16, 1, 0.3, 1]

const PRODUCTS = [
  {
    img:   imgSanduic,
    slug:  '/products/kuti-sanduic',
    al:    'Kuti Sanduiçi',
    en:    'Sandwich Box',
    desc:  { al: 'Kapak çirës · Printim CMYK i plotë', en: 'Tear-open lid · Full CMYK print' },
  },
  {
    img:   imgPomfrit,
    slug:  '/products/kuti-pomfrit',
    al:    'Kuti Pomfriti',
    en:    'French Fries Box',
    desc:  { al: 'Formë jastëku · Karton ushqimor', en: 'Pillow shape · Food-grade board' },
  },
  {
    img:   imgCupHolder,
    slug:  '/products/mbajtese-kafe',
    al:    'Mbajtëse Kafeje',
    en:    'Coffee Cup Holder',
    desc:  { al: '2 gota · Printim custom', en: '2 cups · Custom print' },
  },
  {
    img:   imgBurger,
    slug:  '/products/kuti-hamburgeri',
    al:    'Kuti Hamburgeri',
    en:    'Burger Boxes',
    desc:  { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
  },
]

export function FeaturedProducts({ lang = 'al' }) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#4ca706]">
            ✦ {lang === 'al' ? 'Paketime të zgjedhura' : 'Featured packaging'}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {lang === 'al'
              ? <>Kuti me printim<br /><span className="text-[#4ca706]">sipas biznesit tënd</span></>
              : <>Boxes printed<br /><span className="text-[#4ca706]">for your brand</span></>}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500">
            {lang === 'al'
              ? 'Çdo kuti prodhohet sipas dizajnit tënd — logo, ngjyrë dhe madhësi. Printim CMYK, karton ushqimor, dorëzim direkt.'
              : 'Every box is produced to your design — logo, color and size. CMYK print, food-grade board, direct delivery.'}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-[#f5f4f0]"
            >
              <Link to={p.slug} className="flex h-full flex-col">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={lang === 'al' ? p.al : p.en}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
                  <p className="text-[10px] font-medium tracking-wide text-black/35 truncate">
                    {p.desc[lang]}
                  </p>
                  <h3 className="text-sm font-extrabold leading-snug text-black/80 sm:text-base">
                    {lang === 'al' ? p.al : p.en}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-[11px] font-bold text-[#4ca706]">
                      {lang === 'al' ? 'Shiko detajet →' : 'View details →'}
                    </span>
                    <a
                      href="https://wa.me/38344113533"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      aria-label={lang === 'al' ? 'Merr ofertë në WhatsApp' : 'Get a quote on WhatsApp'}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#4ca706]/10 text-[#4ca706] transition-colors hover:bg-[#4ca706]/20 active:bg-[#4ca706]/30"
                    >
                      <MessageCircle className="size-4" />
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-[#4ca706] px-6 py-2.5 text-sm font-bold text-[#4ca706] transition-colors hover:bg-[#4ca706] hover:text-white"
          >
            {lang === 'al' ? 'Shiko të gjitha produktet' : 'View all products'}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
