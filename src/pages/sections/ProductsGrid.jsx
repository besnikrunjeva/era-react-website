import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import imgGota       from '@/assets/products/gota.webp'
import imgMbajtese   from '@/assets/products/mbajtese.webp'
import imgKutiBurger from '@/assets/products/kuti-burger.webp'
import imgKuti       from '@/assets/products/kuti.webp'
import imgKapak      from '@/assets/products/kapak.webp'
import imgTasSupe    from '@/assets/products/tas-supe.webp'
import imgLeter      from '@/assets/products/leter.webp'

const PRODUCTS = [
  {
    id: 'gota',
    slug: '/products/gota',
    img: imgGota,
    al: 'Gota Letre',
    en: 'Paper Cups',
    desc: { al: 'Kafene · Restorante · Fast-food', en: 'Cafes · Restaurants · Fast-food' },
    premium: false,
    active: true,
  },
  {
    id: 'mbajtese',
    slug: '/products/mbajtese',
    img: imgMbajtese,
    al: 'Mbajtëse Lugësh',
    en: 'Cutlery Holders',
    desc: { al: 'Kafene · Restorante · Hotele', en: 'Cafes · Restaurants · Hotels' },
    premium: false,
    active: true,
  },
  {
    id: 'kuti-ushqimore',
    slug: '/products/kuti-ushqimore',
    img: imgKutiBurger,
    al: 'Kuti Ushqimore',
    en: 'Food Boxes',
    desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
    premium: false,
  },
  {
    id: 'kuti-embelsira',
    slug: '/products/kuti-embelsira',
    img: imgKuti,
    al: 'Kuti Embëlsira',
    en: 'Dessert Boxes',
    desc: { al: 'Tortë · Kek · Byrek', en: 'Cake · Muffin · Börek' },
    premium: false,
  },
  {
    id: 'kuti-premium',
    slug: '/products/kuti-premium',
    img: imgKuti,
    al: 'Kuti Premium Pasticeri',
    en: 'Premium Pastry Boxes',
    desc: { al: 'Foli ari · Finish premium', en: 'Gold foil · Premium finish' },
    premium: true,
  },
  {
    id: 'kapak-gota',
    slug: '/products/kapak-gota',
    img: imgKapak,
    al: 'Kapak Gote',
    en: 'Cup Lids',
    desc: { al: 'PET · 3 madhësi', en: 'PET · 3 sizes' },
    premium: false,
  },
  {
    id: 'tas-supe',
    slug: '/products/tas-supe',
    img: imgTasSupe,
    al: 'Tas Supe',
    en: 'Soup Bowls',
    desc: { al: 'Me kapak · Takeaway', en: 'With lid · Takeaway' },
    premium: false,
  },
  {
    id: 'leter-mbeshtjellese',
    slug: '/products/leter-mbeshtjellese',
    img: imgLeter,
    al: 'Letër Mbeshtjellëse',
    en: 'Wrapping Paper',
    desc: { al: 'Me logo custom · Roll', en: 'Custom logo · Roll' },
    premium: false,
  },
]

function ProductCard({ product, lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: '4/5' }}
    >
      {/* Full-bleed photo */}
      <img
        src={product.img}
        alt={lang === 'al' ? product.al : product.en}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Dark gradient — always visible at bottom, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Premium badge */}
      {product.premium && (
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-amber-400/70 bg-black/50 px-2.5 py-1 text-[10px] font-bold text-amber-400 backdrop-blur-sm">
          ★ Premium
        </span>
      )}

      {/* Content anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
        <p className="text-[11px] font-medium text-white/50 tracking-wide">
          {product.desc[lang]}
        </p>
        <h3 className="text-lg font-bold leading-snug text-white">
          {lang === 'al' ? product.al : product.en}
        </h3>

        {/* CTA — slides up on hover */}
        <div className="mt-2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {product.active ? (
            <Link
              to={product.slug}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              {lang === 'al' ? 'Shiko' : 'View'}
              <ArrowRight className="size-3.5" />
            </Link>
          ) : (
            <span
              title={lang === 'al' ? 'Së shpejti' : 'Coming soon'}
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white/50 backdrop-blur-sm"
            >
              {lang === 'al' ? 'Shiko' : 'View'}
              <ArrowRight className="size-3.5" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProductsGrid({ lang = 'al' }) {
  return (
    <section className="bg-[#0f1010] py-20 px-4">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">
            {lang === 'al' ? 'Paketime & Kuti' : 'Packaging & Boxes'}
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
