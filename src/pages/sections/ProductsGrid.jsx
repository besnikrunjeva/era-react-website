import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import imgKutiBurger from '@/assets/products/kuti-burger.webp'
import imgKuti       from '@/assets/products/kuti.webp'
import imgKapak      from '@/assets/products/kapak.webp'
import imgLeter      from '@/assets/products/leter.webp'

const GROUPS = [
  {
    id: 'kuti-ushqimore',
    al: 'Kuti Ushqimore',
    en: 'Food Boxes',
    products: [
      {
        id: 'kuti-ushqimore',
        slug: '/products/kuti-hamburgeri',
        img: imgKutiBurger,
        al: 'Kuti Ushqimore',
        en: 'Food Boxes',
        desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
        available: true,
      },
      {
        id: 'kuti-embelsira',
        slug: '/products/kuti-embelsira',
        img: imgKuti,
        al: 'Kuti Embëlsira',
        en: 'Dessert Boxes',
        desc: { al: 'Tortë · Kek · Byrek', en: 'Cake · Muffin · Börek' },
      },
    ],
  },
  {
    id: 'aksesore',
    al: 'Aksesorë & Letër',
    en: 'Accessories & Paper',
    products: [
      {
        id: 'kapak-gota',
        slug: '/products/kapak-gota',
        img: imgKapak,
        al: 'Kapak Gote',
        en: 'Cup Lids',
        desc: { al: 'PET · 3 madhësi', en: 'PET · 3 sizes' },
      },
      {
        id: 'leter-mbeshtjellese',
        slug: '/products/leter-mbeshtjellese',
        img: imgLeter,
        al: 'Letër Mbeshtjellëse',
        en: 'Wrapping Paper',
        desc: { al: 'Me logo custom · Roll', en: 'Custom logo · Roll' },
      },
    ],
  },
]

function ProductCard({ product, lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-[#eeedea]"
    >
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.img}
          alt={lang === 'al' ? product.al : product.en}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {!product.available && (
          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
            {lang === 'al' ? 'Së shpejti' : 'Coming soon'}
          </span>
        )}
      </div>

      {/* Info panel */}
      <div className="flex flex-1 flex-col gap-3 bg-[#eeedea] p-5">
        <div>
          <p className="text-[11px] font-medium tracking-wide text-black/35">{product.desc[lang]}</p>
          <h3 className="mt-1 text-lg font-extrabold leading-snug text-black/80">
            {lang === 'al' ? product.al : product.en}
          </h3>
        </div>
        <div className="mt-auto flex gap-2 pt-1">
          {product.available ? (
            <Link
              to={product.slug}
              className="flex-1 rounded-lg border border-black/[0.08] py-2 text-center text-[11px] font-semibold text-black/60 transition-colors hover:border-[#4ca706]/40 hover:text-[#4ca706]"
            >
              {lang === 'al' ? 'Shiko detajet' : 'View details'}
            </Link>
          ) : (
            <span className="flex-1 cursor-not-allowed rounded-lg border border-black/[0.08] py-2 text-center text-[11px] font-semibold text-black/25">
              {lang === 'al' ? 'Shiko detajet' : 'View details'}
            </span>
          )}
          <span className="flex-1 cursor-not-allowed rounded-lg bg-[#4ca706]/10 py-2 text-center text-[11px] font-semibold text-[#4ca706]/40">
            {lang === 'al' ? 'Interesohu' : 'Get notified'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function PremiumCard({ lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-[#b8922a]/40 bg-[#1e1a12]"
    >
      <div className="flex items-center gap-5 p-6">
        <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-[#b8922a]/25">
          <img src={imgKuti} alt="Kuti Premium" className="h-full w-full object-cover opacity-80" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#b8922a]/50 bg-[#b8922a]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#b8922a] uppercase">
            ★ Premium
          </span>
          <h3 className="text-xl font-extrabold leading-snug text-[#f0e6c8]">
            {lang === 'al' ? 'Kuti Premium Pasticeri' : 'Premium Pastry Boxes'}
          </h3>
          <p className="text-sm text-[#8a7a5a]">
            {lang === 'al' ? 'Foli ari · Finish premium · Gift boxes' : 'Gold foil · Premium finish · Gift boxes'}
          </p>
          <div className="mt-2 flex gap-2">
            <span className="cursor-not-allowed rounded-lg border border-[#b8922a]/20 px-4 py-2 text-[11px] font-semibold text-[#b8922a]/40">
              {lang === 'al' ? 'Shiko detajet' : 'View details'}
            </span>
            <span className="cursor-not-allowed rounded-lg bg-[#b8922a]/10 px-4 py-2 text-[11px] font-semibold text-[#b8922a]/50">
              {lang === 'al' ? 'Interesohu' : 'Get notified'}
            </span>
          </div>
        </div>
      </div>
      {/* subtle gold shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8922a]/40 to-transparent" />
    </motion.div>
  )
}

function CategoryHeading({ label, lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="mb-8 flex items-center gap-4"
    >
      <div className="h-px w-5 bg-[#4ca706]/50" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ca706]">{label}</span>
      <div className="h-px flex-1 bg-[#4ca706]/15" />
    </motion.div>
  )
}

function PremiumCategoryHeading({ lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="mb-8 flex items-center gap-4"
    >
      <div className="h-px w-5 bg-[#b8922a]/60" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b8922a]">
        ★ {lang === 'al' ? 'Kuti Premium Pasticeri' : 'Premium Pastry Boxes'}
      </span>
      <div className="h-px flex-1 bg-[#b8922a]/20" />
    </motion.div>
  )
}

export function ProductsGrid({ lang = 'al' }) {
  return (
    <section className="bg-[#f5f4f0] py-20 px-4">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">

        {/* Group 1: Kuti Ushqimore */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Kuti Ushqimore' : 'Food Boxes'} lang={lang} index={0} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GROUPS[0].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} />
            ))}
          </div>
        </div>

        {/* Group 2: Kuti Premium — standalone dark card */}
        <div>
          <PremiumCategoryHeading lang={lang} index={1} />
          <PremiumCard lang={lang} index={0} />
        </div>

        {/* Group 3: Aksesorë & Letër */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Aksesorë & Letër' : 'Accessories & Paper'} lang={lang} index={2} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GROUPS[1].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
