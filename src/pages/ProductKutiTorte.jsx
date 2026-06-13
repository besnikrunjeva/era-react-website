import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-torte'

export default function ProductKutiTorte({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
