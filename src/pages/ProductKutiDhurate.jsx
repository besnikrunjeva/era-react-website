import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-dhurate'

export default function ProductKutiDhurate({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
