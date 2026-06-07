import { Breadcrumb, SpecsSection, RelatedSection } from '@/pages/sections/Product3DPage'
import { ProductHeroFlat } from '@/pages/sections/ProductHeroFlat'
import { ProductHighlights } from '@/pages/sections/ProductHighlights'
import { UseCasesSection } from '@/pages/sections/UseCasesSection'
import { BottomCTA } from '@/pages/sections/BottomCTA'

export function ProductFlatPage({ lang = 'al', product }) {
  const resolvedSteps = product.steps.map(s => ({
    n:     s.n,
    title: s.title[lang],
    desc:  s.desc[lang],
  }))

  const resolvedRelated = product.related.map(r => ({
    slug:      r.slug,
    img:       r.img,
    al:        lang === 'al' ? r.al : r.en,
    sub:       r.sub,
    available: r.available,
  }))

  return (
    <>
      <Breadcrumb label={product.name[lang]} />
      <ProductHeroFlat lang={lang} product={product} />
      <ProductHighlights lang={lang} highlights={product.highlights} />
      {product.useCases && (
        <UseCasesSection useCases={product.useCases} lang={lang} />
      )}
      <SpecsSection specs={product.specs} steps={resolvedSteps} />
      <RelatedSection related={resolvedRelated} />
      <BottomCTA lang={lang} />
    </>
  )
}
