import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-furre'

export default function ProductKutiFurre({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
