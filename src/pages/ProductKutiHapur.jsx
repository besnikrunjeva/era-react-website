import { useEffect } from 'react'
import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-hapur'

export default function ProductKutiHapur({ lang = 'al' }) {
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

  return <ProductFlatPage lang={lang} product={PRODUCT} />
}
