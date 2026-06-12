import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-muffins'

export default function ProductKutiMuffins({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
