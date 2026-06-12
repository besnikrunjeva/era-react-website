import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-corndog'

export default function ProductKutiCorndog({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
