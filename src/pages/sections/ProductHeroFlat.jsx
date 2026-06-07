import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { SizeGallery } from '@/pages/sections/SizeGallery'

const EASE = [0.16, 1, 0.3, 1]

export function ProductHeroFlat({ lang = 'al', product }) {
  const waHref =
    'https://wa.me/38344113533?text=' +
    encodeURIComponent(product.whatsappText[lang])

  return (
    <section className="bg-white px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

        {/* Image / Size gallery — top on mobile, right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="order-first md:order-last"
        >
          {product.sizes ? (
            <SizeGallery sizes={product.sizes} lang={lang} />
          ) : (
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
              <img
                src={product.img}
                alt={product.imgAlt[lang]}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          )}
        </motion.div>

        {/* Text — below image on mobile, left on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            {product.name[lang]}
          </h1>

          <p className="mt-3 max-w-sm text-base text-gray-500">
            {product.tagline[lang]}
          </p>

          {/* Badge pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.badges.map((badge, i) => (
              <span
                key={i}
                className="rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-3 py-1 text-[11px] font-bold text-[#4ca706]"
              >
                {badge[lang]}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4ca706] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8f05]"
            >
              <MessageCircle className="size-4" />
              {lang === 'al' ? 'Merr ofertë' : 'Get a quote'}
            </a>
            <a
              href="tel:+38344113533"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Phone className="size-4" />
              {lang === 'al' ? 'Telefono' : 'Call us'}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
