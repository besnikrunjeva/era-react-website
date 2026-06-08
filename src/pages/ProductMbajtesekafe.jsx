import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Breadcrumb, SpecsSection, RelatedSection } from '@/pages/sections/Product3DPage'
import { ProductHeroFlat } from '@/pages/sections/ProductHeroFlat'
import { ProductHighlights } from '@/pages/sections/ProductHighlights'
import { BottomCTA } from '@/pages/sections/BottomCTA'
import { PRODUCT } from '@/data/products/mbajtese-kafe'

function PairWithSection({ pairWith, lang = 'al' }) {
  return (
    <section className="border-b border-gray-100 bg-[#f8fdf4] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 rounded-2xl border border-[#c8ddb8] bg-white p-6 md:flex-row md:gap-8 md:p-8"
        >
          <div className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f0f9e8] md:size-32">
            <img src={pairWith.img} alt={pairWith.label[lang]} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="mb-2 inline-block rounded-full bg-[#4ca706] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
              {lang === 'al' ? 'Kombino me' : 'Pairs with'}
            </span>
            <h3 className="mt-1 text-lg font-black text-gray-900">{pairWith.label[lang]}</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">{pairWith.desc[lang]}</p>
            <Link
              to={pairWith.slug}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#4ca706] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#3d8f05]"
            >
              {lang === 'al' ? 'Shiko gotat 7oz →' : 'See 7oz cups →'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ProductMbajtesekafe({ lang = 'al' }) {
  useEffect(() => {
    document.title = PRODUCT.seo[lang].title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', PRODUCT.seo[lang].description)

    const existingScript = document.getElementById('jsonld-product')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.id = 'jsonld-product'
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: PRODUCT.name[lang],
      description: PRODUCT.seo[lang].description,
      brand: { '@type': 'Brand', name: 'ERA Print Pack' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'NPT Shtypshkronja ERA' },
      },
    })
    document.head.appendChild(script)
    return () => { const s = document.getElementById('jsonld-product'); if (s) s.remove() }
  }, [lang])

  const resolvedSteps = PRODUCT.steps.map(s => ({ n: s.n, title: s.title[lang], desc: s.desc[lang] }))
  const resolvedRelated = PRODUCT.related.map(r => ({ slug: r.slug, img: r.img, al: lang === 'al' ? r.al : r.en, sub: r.sub, available: r.available }))

  return (
    <>
      <Breadcrumb label={PRODUCT.name[lang]} lang={lang} />
      <ProductHeroFlat lang={lang} product={PRODUCT} />
      <ProductHighlights lang={lang} highlights={PRODUCT.highlights} />
      <PairWithSection pairWith={PRODUCT.pairWith} lang={lang} />
      <SpecsSection specs={PRODUCT.specs} steps={resolvedSteps} lang={lang} />
      <RelatedSection related={resolvedRelated} lang={lang} />
      <BottomCTA lang={lang} />
    </>
  )
}
