import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import imgCajPfanta       from '@/assets/products/caj-pfanta-sage.jpg'
import imgCajForestFruits from '@/assets/products/caj-forest-fruits.png'
import imgKutiBurger  from '@/assets/products/kuti-burger.webp'
import imgKutiSllajder  from '@/assets/products/kuti-sllajder-1.png'
import imgKutiFastFood  from '@/assets/products/kuti-fast-food-v1.png'
import imgKuti6Pika     from '@/assets/products/kuti-6pika-gold.png'
import imgKutiHapur    from '@/assets/products/kuti-hapur-l.png'
import imgKutiKrepa    from '@/assets/products/kuti-krepa-cone.png'
import imgKutiSallata    from '@/assets/products/kuti-sallata-closed.png'
import imgKutiMakaronash from '@/assets/products/kuti-makaronash-s.png'
import imgKuti         from '@/assets/products/kuti.webp'
import imgKapak        from '@/assets/products/kapak.webp'
import imgLeter        from '@/assets/products/leter.webp'
import imgFriesBox    from '@/assets/products/fries-box-studio.png'
import imgCupHolder   from '@/assets/products/cup-holder-studio.png'
import imgSanduic     from '@/assets/products/kuti-sanduic-studio.jpg'

const GROUPS = [
  {
    id: 'paketime-caji',
    al: 'Paketime Çaji',
    en: 'Tea Packages',
    products: [
      {
        id: 'caj-heksagonal',
        slug: '/products/caj-heksagonal',
        img: imgCajPfanta,
        al: 'Kuti Çaji Heksagonale',
        en: 'Hexagonal Tea Boxes',
        desc: { al: 'Karton · Kraft · 2 materiale', en: 'Board · Kraft · 2 materials' },
        available: true,
      },
      {
        id: 'caj-gable-top',
        slug: '/products/caj-gable-top',
        img: imgCajForestFruits,
        al: 'Qese Çaji Gable-Top',
        en: 'Gable-Top Tea Bags',
        desc: { al: 'Kraft · Karton · 2 materiale', en: 'Kraft · Board · 2 materials' },
        available: true,
      },
    ],
  },
  {
    id: 'kuti-ushqimore',
    al: 'Kuti',
    en: 'Boxes',
    products: [
      {
        id: 'kuti-hamburgeri',
        slug: '/products/kuti-hamburgeri',
        img: imgKutiBurger,
        al: 'Kuti Hamburgeri',
        en: 'Burger Boxes',
        desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
        available: true,
      },
      {
        id: 'kuti-sllajder',
        slug: '/products/kuti-sllajder',
        img: imgKutiSllajder,
        al: 'Kuti Sllajder',
        en: 'Slider Boxes',
        desc: { al: 'Pizza · Embëlsira · Furra · Kafete', en: 'Pizza · Sweets · Bakery · Café' },
        available: true,
      },
      {
        id: 'kuti-fast-food',
        slug: '/products/kuti-fast-food',
        img: imgKutiFastFood,
        al: 'Kuti Fast Food',
        en: 'Fast Food Boxes',
        desc: { al: 'Shawarme · Pule · Nuggets · Snacks', en: 'Shawarma · Chicken · Nuggets · Snacks' },
        available: true,
      },
      {
        id: 'kuti-sallata',
        slug: '/products/kuti-sallata',
        img: imgKutiSallata,
        al: 'Kuti për Sallata',
        en: 'Salad Boxes',
        desc: { al: 'Sallata · Oriz · Pule · Fast food', en: 'Salad · Rice · Chicken · Fast food' },
        available: true,
      },
      {
        id: 'kuti-hapur',
        slug: '/products/kuti-hapur',
        img: imgKutiHapur,
        al: 'Kuti e Hapur',
        en: 'Open Tray Box',
        desc: { al: 'Fast Food · Embëlsira · Sushi', en: 'Fast Food · Pastries · Sushi' },
        available: true,
      },
      {
        id: 'kuti-pomfrit',
        slug: '/products/kuti-pomfrit',
        img: imgFriesBox,
        al: 'Kuti Pomfriti',
        en: 'French Fries Box',
        desc: { al: 'Formë jastëku · Karton', en: 'Pillow shape · Board' },
        available: true,
      },
      {
        id: 'mbajtese-kafe',
        slug: '/products/mbajtese-kafe',
        img: imgCupHolder,
        al: 'Mbajtëse Kafeje',
        en: 'Coffee Cup Holder',
        desc: { al: '2 gota · Printim CMYK', en: '2 cups · CMYK Print' },
        available: true,
      },
      {
        id: 'kuti-sanduic',
        slug: '/products/kuti-sanduic',
        img: imgSanduic,
        al: 'Kuti Sanduiçi',
        en: 'Sandwich Box',
        desc: { al: 'Kapak çirës · Karton', en: 'Tear-open lid · Board' },
        available: true,
      },
    ],
  },
  {
    id: 'pasticeri',
    al: 'Pastiçeri',
    en: 'Pastry',
    products: [
      {
        id: 'kuti-makaronash',
        slug: '/products/kuti-makaronash',
        img: imgKutiMakaronash,
        al: 'Kuti Makaronash',
        en: 'Macaron Boxes',
        desc: { al: 'S · M · Gjatë — kapak sllajder', en: 'S · M · Long — sliding lid' },
        available: true,
      },
      {
        id: 'kuti-krepa',
        slug: '/products/kuti-krepa',
        img: imgKutiKrepa,
        al: 'Kuti Krepa',
        en: 'Crepe Boxes',
        desc: { al: 'Kon handheld · Kuti trekëndore', en: 'Cone holder · Triangle box' },
        available: true,
      },
      {
        id: 'kuti-6pika',
        slug: '/products/kuti-6pika',
        img: imgKuti6Pika,
        al: 'Kuti me 6 Pika',
        en: '6-Corner Boxes',
        desc: { al: 'Foli ari · Foli argjend · E montuar gati', en: 'Gold foil · Silver foil · Pre-assembled' },
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

function ProductCard({ product, lang, index, compact = false }) {
  const name = lang === 'al' ? product.al : product.en

  const inner = (
    <>
      {/* Photo */}
      <div className={`relative overflow-hidden ${compact ? 'h-36' : 'h-52'}`}>
        <img
          src={product.img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {!product.available && (
          <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-bold text-white/80 backdrop-blur-sm">
            {lang === 'al' ? 'Së shpejti' : 'Soon'}
          </span>
        )}
      </div>

      {/* Info panel */}
      <div className={`flex flex-1 flex-col bg-[#eeedea] ${compact ? 'gap-1.5 p-3' : 'gap-2 p-4'}`}>
        <div className="flex-1">
          <p className="text-[10px] font-medium tracking-wide text-black/35 truncate">{product.desc[lang]}</p>
          <h3 className={`mt-0.5 font-extrabold leading-snug text-black/80 ${compact ? 'text-sm' : 'text-base'}`}>
            {name}
          </h3>
        </div>
        {/* Single CTA row */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className={`text-[11px] font-bold transition-colors ${product.available ? 'text-[#4ca706]' : 'text-black/25'}`}>
            {product.available
              ? (lang === 'al' ? 'Shiko detajet →' : 'View details →')
              : (lang === 'al' ? 'Së shpejti' : 'Coming soon')}
          </span>
          {product.available && (
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
          )}
        </div>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-[#eeedea]"
    >
      {product.available
        ? <Link to={product.slug} className="flex flex-1 flex-col">{inner}</Link>
        : inner}
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

        {/* Tea Packages */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Paketime Çaji' : 'Tea Packages'} lang={lang} index={0} />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GROUPS[0].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} compact />
            ))}
          </div>
        </div>

        {/* Kuti */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Kuti' : 'Boxes'} lang={lang} index={1} />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {GROUPS[1].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} compact />
            ))}
          </div>
        </div>

        {/* Pastiçeri */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Pastiçeri' : 'Pastry'} lang={lang} index={2} />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GROUPS[2].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} compact />
            ))}
          </div>
        </div>

        {/* Aksesorë & Letër */}
        <div>
          <CategoryHeading label={lang === 'al' ? 'Aksesorë & Letër' : 'Accessories & Paper'} lang={lang} index={3} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GROUPS[3].products.map((p, i) => (
              <ProductCard key={p.id} product={p} lang={lang} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
